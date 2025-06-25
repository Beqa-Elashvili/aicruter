import { Button } from "@/components/ui/button";
import { useUser } from "./providers/provider";
import Dashboard from "./(main)/dashboard/page";

export default function Home() {

  return (
    <div>
      <Dashboard />
    </div>
  );
}
