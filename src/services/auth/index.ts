import { defaultFetchOptions } from "@/config";


interface RegisterArgs {
  name: string;
  email: string;
  username: string;
  password: string;
  role: "USER" | "ADMIN";
  active: boolean;
}

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(data: RegisterArgs) {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      ...defaultFetchOptions
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Registration failed.");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
}


interface LoginArgs {
  email: string;
  password: string;
}

export const login = async (credentials: LoginArgs) => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      ...defaultFetchOptions
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Login failed.");
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      ...defaultFetchOptions
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Failed to reset password");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An error occurred while resetting the password.");
  }
};