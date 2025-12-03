"use client";

import { LayoutDashboard, Truck, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DashboardNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="flex items-center gap-2">
      <Link href="/dashboard">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "gap-2 transition-all duration-300 font-medium",
            isActive("/dashboard")
              ? "bg-white/95 text-emerald-600 hover:bg-white hover:scale-105 shadow-lg border border-white/20"
              : "text-white hover:bg-white/20 hover:scale-105",
          )}
        >
          <LayoutDashboard className="h-4 w-4" />
          <span className="hidden lg:inline">Overview</span>
        </Button>
      </Link>
      <Link href="/dashboard/drivers">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "gap-2 transition-all duration-300 font-medium",
            isActive("/dashboard/drivers")
              ? "bg-white/95 text-emerald-600 hover:bg-white hover:scale-105 shadow-lg border border-white/20"
              : "text-white hover:bg-white/20 hover:scale-105",
          )}
        >
          <Users className="h-4 w-4" />
          <span className="hidden lg:inline">Drivers</span>
        </Button>
      </Link>
      <Link href="/dashboard/fleet">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "gap-2 transition-all duration-300 font-medium",
            isActive("/dashboard/fleet")
              ? "bg-white/95 text-emerald-600 hover:bg-white hover:scale-105 shadow-lg border border-white/20"
              : "text-white hover:bg-white/20 hover:scale-105",
          )}
        >
          <Truck className="h-4 w-4" />
          <span className="hidden lg:inline">Fleet</span>
        </Button>
      </Link>
    </nav>
  );
}