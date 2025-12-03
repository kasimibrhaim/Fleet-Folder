"use client";

import { useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function HomeRedirect() {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && pathname === "/") {
      router.replace("/dashboard");
    }
  }, [isSignedIn, pathname, router]);

  return null;
}


