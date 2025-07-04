"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 blur-xl" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg rotate-45 opacity-30 blur-lg" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-lg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
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
              </Link>{" "}
              <p className="text-[#6B7280] leading-relaxed max-w-sm">
                Empowering startups and growing businesses with intelligent ERP
                solutions. Streamline operations, boost productivity, and scale
                with confidence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-[#6B7280] hover:text-[#1F2937] transition-colors group">
                  <div className="w-8 h-8 bg-[#F8FAFC] border border-[#E3EAFC] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#E3EAFC] group-hover:border-[#0B82F0]/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">hello@rudrerp.com</span>
                </div>
                <div className="flex items-center text-[#6B7280] hover:text-[#1F2937] transition-colors group">
                  <div className="w-8 h-8 bg-[#F8FAFC] border border-[#E3EAFC] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#E3EAFC] group-hover:border-[#0B82F0]/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-[#6B7280] hover:text-[#1F2937] transition-colors group">
                  <div className="w-8 h-8 bg-[#F8FAFC] border border-[#E3EAFC] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#E3EAFC] group-hover:border-[#0B82F0]/20 transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-[#1F2937] text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#6B7280] hover:text-[#0B82F0] transition-colors duration-200 text-sm font-medium flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#0B82F0]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          {" "}
          {/* Elegant separator */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E3EAFC] to-transparent" />
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <span className="text-[#6B7280] text-sm font-medium flex items-center">
                © 2024 rudrERP. Made with{" "}
                <Heart className="h-4 w-4 text-[#EA4335] mx-1.5 animate-pulse" />
                for growing businesses.
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white border border-[#E3EAFC] rounded-xl flex items-center justify-center text-[#6B7280] hover:text-[#0B82F0] hover:border-[#0B82F0]/20 hover:bg-[#E3EAFC]/60 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
