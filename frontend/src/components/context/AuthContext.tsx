

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Types
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'vendor' | 'customer' | 'delivery_man' | 'employee';
  avatar?: string;
  isActive: boolean;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string; captchaText: string; 
    sessionId: string;  }) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      verifyToken();
    } else {
      setIsLoading(false);
    }
  }, []);

  // src/context/AuthContext.tsx

const verifyToken = async () => {
  try {
    
    const response = await axios.get('https://shopzeo.in/api/auth/verify'); 

    if (response.data && response.data.success) {
      // Backend se aane wale user data ko state mein set karein
      // Response structure ke anusaar 'user' ya 'admin' key check karein
      setUser(response.data.data.user || response.data.data.admin);
    } else {
      // Agar backend 'success: false' bhejta hai
      // localStorage.removeItem('adminToken');
      // setUser(null);
      delete axios.defaults.headers.common['Authorization'];
    }
  } catch (error) {
    // Agar API call fail ho jaati hai (jaise 401 error)
    console.error("Token verification failed:", error);
    // localStorage.removeItem('adminToken');
    // setUser(null);
    delete axios.defaults.headers.common['Authorization'];
  } finally {
    // Dono hi cases mein, loading ko false kar dein
    setIsLoading(false);
  }
};
  const login = async (credentials: { email: string; password: string; captchaText: string; 
    sessionId: string;  }) => {
    try {
      const response = await axios.post('https://shopzeo.in/api/auth/login', credentials);
      
       if (response.data.success) {
         const { admin: adminData, token } = response.data.data;
          localStorage.setItem('adminToken', token);
          localStorage.setItem('adminToken', response.data.data.token);
          localStorage.setItem('adminData', JSON.stringify(response.data.data.admin));
          setUser(adminData); 
       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
       const redirectPath = 
        adminData.role === 'super_admin' ? '/dashboard' : // Role 'super_admin' hai
        '/'; // Default redirect
        
        navigate(redirectPath);
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const logout = () => {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('adminData'); 
  setUser(null);
  
  delete axios.defaults.headers.common['Authorization'];
  navigate('/login');
  };

  // Register, updateProfile, changePassword functions...
  const register = async () => { /* ... your logic ... */ };
  const updateProfile = async () => { /* ... your logic ... */ };
  const changePassword = async (_currentPassword: string) => { /* ... your logic ... */ };
  const isAuthenticated = !!user; 
  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    changePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};