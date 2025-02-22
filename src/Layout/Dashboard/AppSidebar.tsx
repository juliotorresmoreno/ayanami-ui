import {
  Database,
  FileSearch,
  Layers,
  Settings,
  Home,
  Code,
  Activity,
  LineChart,
  Tag,
  List,
  AlertCircle,
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

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Datasets",
    url: "/dashboard/datasets",
    icon: Database,
  },
  {
    title: "Vector Databases",
    url: "/dashboard/vector-databases",
    icon: Layers,
  },
  {
    title: "Pipelines",
    url: "/dashboard/pipelines",
    icon: Code,
  },
  {
    title: "Search",
    url: "/dashboard/search",
    icon: FileSearch,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const monitoringItems = [
  {
    title: "Logs",
    url: "/dashboard/logs",
    icon: List,
  },
  {
    title: "Monitoring",
    url: "/dashboard/monitoring",
    icon: Activity,
  },
  {
    title: "Alerts",
    url: "/dashboard/alerts",
    icon: AlertCircle,
  },
];

const visualizationItems = [
  {
    title: "Charts",
    url: "/dashboard/charts",
    icon: LineChart,
  },
  {
    title: "Labeling Tools",
    url: "/dashboard/labeling-tools",
    icon: Tag,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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

        <SidebarGroup>
          <SidebarGroupLabel>Monitoring & Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {monitoringItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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

        <SidebarGroup>
          <SidebarGroupLabel>Visualization & Labeling</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {visualizationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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