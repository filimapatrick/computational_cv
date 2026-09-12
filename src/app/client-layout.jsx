'use client';

import { useState } from "react";
import SideNav from "../components/SideNav";
import MobileNav from "../components/MobileNav";
import { navItems, contactLinks } from "../components/SideNav";

export default function ClientLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#070B18]">
      {/* Desktop & Laptop Sidebar Container */}
      <aside className="hidden md:block w-60 lg:w-64 flex-shrink-0 relative z-30">
        <SideNav />
      </aside>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        navItems={navItems}
        contactLinks={contactLinks}
      />

      {/* Main Content Area */}
      <main className="min-w-0 flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6 bg-[#070B18] text-white relative z-10">
        {children}
      </main>
    </div>
  );
}