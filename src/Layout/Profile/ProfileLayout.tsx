"use client";

import React from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import ProfileSidebar from "./ProfileSidebar";

interface ProfileLayoutProps {
  readonly children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <DashboardLayout
      SideBar={
        <ProfileSidebar />
      }
    >
      <div className="w-full max-w-4xl mx-auto p-6">
        {children}
      </div>
    </DashboardLayout>
  );
}
