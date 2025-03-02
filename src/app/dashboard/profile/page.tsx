// app/dashboard/profile/page.tsx
"use client";

import ProfileLayout from "@/Layout/Profile/ProfileLayout";
import BasicInfo from "@/Layout/Profile/BasicInfo";

export default function ProfilePage() {
  return (
    <ProfileLayout>
      <BasicInfo />
    </ProfileLayout>
  );
}
