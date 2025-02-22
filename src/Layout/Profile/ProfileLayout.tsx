"use client";

import React from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import ProfileSidebar from "./ProfileSidebar";

interface ProfileLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: ProfileUrls) => void;
}

export default function ProfileLayout({ children, activeSection, setActiveSection }: ProfileLayoutProps) {
  return (
    <DashboardLayout
      SideBar={
        <ProfileSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      }
    >
      <div className="w-full max-w-4xl mx-auto p-6">
        {children}
      </div>
    </DashboardLayout>
  );
}
