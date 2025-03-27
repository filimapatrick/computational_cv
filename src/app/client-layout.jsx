'use client';

import { useState } from "react";
import SideNav from "../components/SideNav";
import MobileNav from "../components/MobileNav";
import { navItems, contactLinks } from "../components/SideNav";

export default function ClientLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <SideNav />
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        navItems={navItems}
        contactLinks={contactLinks}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
} 