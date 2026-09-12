'use client';

import { FaBars, FaTimes } from 'react-icons/fa';
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
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-xl bg-[#0F172A]/90 backdrop-blur-md text-white border border-white/15 shadow-xl hover:border-sky-400/50 transition-all flex items-center justify-center"
      >
        {isOpen ? <FaTimes className="w-4 h-4 text-sky-400" /> : <FaBars className="w-4 h-4 text-white" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#090D16]/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 w-72 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative h-full p-4">
          <div className="relative h-full rounded-2xl bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto">
            
            <div>
              <div className="text-center py-2 mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden mx-auto mb-2 border border-sky-400/30 shadow-md">
                  <Image
                    src="/patrick.jpeg"
                    alt="Patrick Filima"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-sm font-bold text-white tracking-tight">Patrick Filima</h1>
                <p className="text-[11px] text-sky-400 font-medium">Research Software Engineer</p>
                <p className="text-[10px] text-indigo-300 font-medium">Computational Neuroscientist</p>
              </div>

              <div className="space-y-1 my-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <ItemIcon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-around gap-2">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      aria-label={link.label}
                      className="text-slate-300 hover:text-sky-300 p-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
              <div className="text-[10px] text-center text-slate-500">
                © 2026 Patrick Filima
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}