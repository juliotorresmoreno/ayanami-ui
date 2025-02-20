

interface RegisterArgs {
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  active: boolean;
}

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(data: RegisterArgs) {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Registration failed.");
  }
}