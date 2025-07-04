"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  description?: string;
}

const navItems: NavItem[] = [
  {
    name: "Features",
    href: "#features",
    description: "Discover our powerful tools",
  },
  {
    name: "Solutions",
    href: "#solutions",
    description: "Built for modern businesses",
  },
  {
    name: "Pricing",
    href: "#pricing",
    description: "Simple, transparent pricing",
  },
  { name: "About", href: "#about", description: "Learn more about rudrErp" },
];

export function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#E3EAFC]/80 shadow-xl shadow-[#1E3A8A]/5"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/rudrerp.svg"
                alt="rudrERP Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#F26B0A] to-[#FF5A1A] bg-clip-text text-transparent">
                  ERP
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative px-4 py-2.5 text-[#374151] hover:text-[#F26B0A] transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#F26B0A] to-[#FF5A1A] group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isSignedIn ? (
              <div className="flex items-center space-x-3">
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="group border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#E3EAFC] hover:border-[#1E3A8A]/40 transition-all duration-300"
                  >
                    Dashboard
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="text-[#374151] hover:text-[#1E3A8A] hover:bg-[#E3EAFC]/60 transition-all duration-300 font-medium"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="group bg-gradient-to-r from-[#F26B0A] via-[#FF5A1A] to-[#EA4335] hover:from-[#EA4335] hover:via-[#F26B0A] hover:to-[#FF5A1A] text-white shadow-lg shadow-[#F26B0A]/25 hover:shadow-xl hover:shadow-[#F26B0A]/30 transition-all duration-300 font-semibold px-6">
                    Get Started
                    <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-[#374151] hover:text-[#1E3A8A] hover:bg-[#E3EAFC]/60"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#E3EAFC]/80 bg-white/98 backdrop-blur-xl"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 px-2 text-[#374151] hover:text-[#F26B0A] rounded-lg transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        {item.description && (
                          <div className="text-sm text-[#6B7280] mt-1">
                            {item.description}
                          </div>
                        )}
                      </div>
                      <ChevronRight className="h-4 w-4 text-[#F26B0A]" />
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 space-y-3 border-t border-[#E3EAFC]/80">
                  {isSignedIn ? (
                    <div className="space-y-3">
                      <Link href="/dashboard" className="block">
                        <Button
                          className="w-full bg-gradient-to-r from-[#0B82F0] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1E3A8A]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Dashboard
                        </Button>
                      </Link>
                      <div className="flex justify-center">
                        <UserButton afterSignOutUrl="/" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <SignInButton mode="modal">
                        <Button
                          variant="outline"
                          className="w-full border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#E3EAFC]"
                        >
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button className="w-full bg-gradient-to-r from-[#F26B0A] to-[#FF5A1A] hover:from-[#EA4335] hover:to-[#F26B0A]">
                          Get Started
                        </Button>
                      </SignUpButton>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
