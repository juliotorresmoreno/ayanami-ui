// Layout/ProfileSidebar/ProfileSidebar.tsx
"use client";

import {
  User,
  Lock,
  Trash,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

interface ProfileItems {
  title: string;
  url: string;
  icon: React.ElementType;
  hide?: boolean;
}

const profileItems: ProfileItems[] = [
  {
    title: "Basic Information",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Security",
    url: "/dashboard/profile/security",
    icon: Lock,
  },
  {
    title: "Forget Data",
    url: "/dashboard/profile/forget-data",
    icon: Trash,
    hide: true,
  },
];


export default function ProfileSidebar() {
  const location = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {profileItems.filter(item => !item.hide).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${location === item.url
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <a href={item.url} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}