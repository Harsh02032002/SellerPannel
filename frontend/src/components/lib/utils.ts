import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BACKEND_BASE_URL =
  (import.meta as any).env?.VITE_API_URL || "https://shopzeo.in";
