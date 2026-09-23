"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

function isBareRoute(pathname: string): boolean {
  return pathname.startsWith("/auth") || pathname.startsWith("/payment");
}

/** Marketing nav + footer stay off login / register / payment so the CTA is not crushed. */
export function AppChrome({ children }: Props) {
  const pathname = usePathname() || "/";
  const bare = isBareRoute(pathname);

  return (
    <>
      {bare ? null : <Navbar />}
      <main className="min-w-0 flex-grow overflow-x-clip">{children}</main>
      {bare ? null : <Footer />}
    </>
  );
}
