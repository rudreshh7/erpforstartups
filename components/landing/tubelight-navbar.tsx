"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, CheckSquare, Info, Mail } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Icon mapping for client-side rendering
const iconMap = {
  home: Home,
  "check-square": CheckSquare,
  info: Info,
  mail: Mail,
};

interface NavItem {
  name: string;
  url: string;
  icon: keyof typeof iconMap;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  showAuth?: boolean;
}

export function NavBar({ items, className, showAuth = false }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || "");

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.name);
    const element = document.querySelector(item.url);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => ({
        name: item.name,
        element: document.querySelector(item.url),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveTab(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {/* Navigation Items */}
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}

        {/* Authentication Buttons */}
        {showAuth && (
          <>
            <div className="h-6 w-px bg-border mx-2" />
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-semibold px-4 py-2 rounded-full hover:bg-muted"
              >
                <span className="hidden sm:inline">Sign In</span>
                <span className="sm:hidden">In</span>
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                size="sm"
                className="text-sm font-semibold px-4 py-2 rounded-full bg-primary hover:bg-primary/90"
              >
                <span className="hidden sm:inline">Sign Up</span>
                <span className="sm:hidden">Up</span>
              </Button>
            </SignUpButton>
          </>
        )}
      </div>
    </div>
  );
}
