"use client";

import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import Header from "./Header";
import Footer from "./Footer";

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
  SideBar?: React.ReactNode;
  title?: string;
}>;

export default function DashboardLayout({ children, SideBar, title }: DashboardLayoutProps) {
  useEffect(() => {
    document.body.classList.add("flex");
    document.body.classList.add("flex-1");
    return () => {
      document.body.classList.remove("flex");
      document.body.classList.remove("flex-1");
    };
  });

  return (
    <SidebarProvider className="flex flex-1">
      <div className="min-h-screen flex flex-col bg-gray-100 flex-1">
        <Header title={title} />

        <div className="flex flex-1 mt-8">
          {SideBar ?? <AppSidebar />}

          <div className="flex-1 flex flex-col">
            <main className="flex-1 p-6 md:ml-64 flex justify-center">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
