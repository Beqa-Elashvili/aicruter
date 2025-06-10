import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo classname="flex justify-center" />
        <Button className="bg-blue-600">
          <Plus className="w-full" />
          Create New Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
