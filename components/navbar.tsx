"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";


const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {}

export const Navbar = () => {
  
  return ( 
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
      <Menu className="block md:hidden" />
        <Link href="/">
          
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
          Synapse Station
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        
          <Button size="sm" variant="premium">
            Hasin_Codes
            <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
        
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
