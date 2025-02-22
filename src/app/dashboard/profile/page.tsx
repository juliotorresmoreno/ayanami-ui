// app/dashboard/profile/page.tsx
"use client";

import { useState } from "react";
import ProfileLayout from "@/Layout/Profile/ProfileLayout";
import BasicInfo from "@/Layout/Profile/BasicInfo";

const Sections = {
  "basic-info": <BasicInfo />,
  "security": <div>Security</div>,
  "forget-data": <div>Forget Data</div>,
};

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<ProfileUrls>("basic-info");

  return (
    <ProfileLayout activeSection={activeSection} setActiveSection={setActiveSection}>
      {Sections[activeSection]}
    </ProfileLayout>
  );
}