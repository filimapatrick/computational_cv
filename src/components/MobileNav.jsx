'use client';

import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav({ isOpen, setIsOpen, navItems, contactLinks }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-72 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative h-full">
          {/* Glassmorphic Background */}
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-lg border-r border-white/10" />
          
          {/* Content Container */}
          <div className="relative z-10 flex flex-col h-full overflow-y-auto">
            <div className="text-center py-8 px-4">
              <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-6 border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm" />
                <Image
                  src="/patrick.jpeg"
                  alt="Filima Patrick"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">FILIMA PATRICK</h1>
              <p className="text-blue-400 text-lg">Neuroscientist & Developer</p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-blue-400 hover:text-blue-300 transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="px-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 w-full ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/20'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 