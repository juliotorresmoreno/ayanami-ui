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

const profileItems: Array<{
  title: string;
  url: ProfileUrls;
  icon: React.ElementType;
}> = [
    {
      title: "Basic Information",
      url: "basic-info",
      icon: User,
    },
    {
      title: "Security",
      url: "security",
      icon: Lock,
    },
    {
      title: "Forget Data",
      url: "forget-data",
      icon: Trash,
    },
  ];

interface ProfileSidebarProps {
  readonly activeSection: string;
  readonly setActiveSection: (section: ProfileUrls) => void;
}

const stylePointer = {
  cursor: 'pointer'
}

export default function ProfileSidebar({
  activeSection,
  setActiveSection,
}: ProfileSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {profileItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => setActiveSection(item.url)}
                    className={`${activeSection === item.url
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <div style={stylePointer} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </div>
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