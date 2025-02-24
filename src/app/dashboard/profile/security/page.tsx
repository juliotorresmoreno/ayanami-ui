// app/dashboard/profile/page.tsx
"use client";

import ProfileLayout from "@/Layout/Profile/ProfileLayout";
import Security from "@/Layout/Profile/Security";

export default function Page() {
  return (
    <ProfileLayout>
      <Security />
    </ProfileLayout>
  );
}
