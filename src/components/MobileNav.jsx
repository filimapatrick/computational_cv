'use client';

import { FaBars, FaTimes, FaMoon } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav({ isOpen, setIsOpen, navItems, contactLinks }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
        className="md:hidden fixed top-4 right-4 z-50 p-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-cyan-400/50 shadow-xl shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? <FaTimes className="w-5 h-5 text-cyan-300" /> : <FaBars className="w-5 h-5 text-white" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#070B18]/90 backdrop-blur-md z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden fixed top-0 left-0 w-72 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative h-full p-4">
          <div className="relative h-full rounded-3xl bg-[#0D1425]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto">
            
            <div>
              <div className="text-center py-4">
                <div className="w-20 h-20 relative rounded-full overflow-hidden mx-auto mb-3 border-2 border-blue-500/40 shadow-lg shadow-blue-500/20">
                  <Image
                    src="/patrick.jpeg"
                    alt="Filima Patrick"
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-base font-extrabold text-white tracking-wider uppercase">FILIMA PATRICK</h1>
                <p className="text-xs font-medium text-blue-400 mt-1">Research Software Engineer & Technical Product Lead</p>
              </div>

              <div className="space-y-1 my-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-white border border-blue-500/40'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-center gap-3">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-300 p-2.5 rounded-xl bg-white/5 border border-white/10"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between text-[10px] text-gray-400">
                <span>© 2026 Filima Patrick</span>
                <FaMoon className="text-cyan-400 w-3 h-3" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}