"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { SideBarOptions } from "@/app/services/Constants";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const path = usePathname();
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo classname="flex justify-center" />
        <Button
          onClick={() => router.push("/create-interview")}
          className="bg-blue-600"
        >
          <Plus className="w-full" />
          Create New Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
                <SidebarMenuItem key={index} className="p-1">
                  <SidebarMenuButton
                    asChild
                    className={`p-5 ${
                      path === option.path &&
                      "text-blue-600 bg-blue-100 transition duration-300 ease-in-out"
                    }`}
                  >
                    <Link href={option.path}>
                      <option.icon />
                      <span className={`text-[16px]`}>{option.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
