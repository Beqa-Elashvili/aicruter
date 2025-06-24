import React from "react";
import DashboardProvider from "./provider";

function DashboardLayout({ children }: { children: any }) {
  return (
    <div className="bg-secondary">
      <DashboardProvider>{children}</DashboardProvider>
    </div>
  );
}

export default DashboardLayout;
