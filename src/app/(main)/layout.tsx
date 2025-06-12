import React from "react";
import DashboardProvider from "./provider";

function DashboardLayout({ children }: { children: any }) {
  return (
    <div className="bg-secondary">
      <DashboardProvider>
        <div className="p-">{children}</div>
      </DashboardProvider>
    </div>
  );
}

export default DashboardLayout;
