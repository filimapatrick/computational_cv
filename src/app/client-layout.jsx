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
      <aside className="hidden md:block w-64 lg:w-72 flex-shrink-0 relative z-30">
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
      <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 bg-[#070B18] text-white relative z-10">
        {children}
      </main>
    </div>
  );
}