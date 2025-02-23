"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { SidebarTrigger } from "@/components/ui/sidebar";

type HeaderProps = Readonly<{
  title?: string;
}>;

export default function Header({ title }: HeaderProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/login");
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/dashboard"
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
        >
          {title ?? "Dashboard"}
        </Link>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <button
              className="flex items-center focus:outline-none gap-2"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300 flex items-center justify-center bg-gray-100">
                  <FaUser className="text-gray-600 w-5 h-5" />
                </div>
              </div>

              <span className="text-gray-700 font-medium">John Doe</span>
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                <Link
                  href="/dashboard/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  Profile
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <SidebarTrigger />
        </div>
      </div>
    </header>
  );
}