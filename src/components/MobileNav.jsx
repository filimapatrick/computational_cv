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
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-500 text-white"
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-72 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="text-center py-8 px-4">
            <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-100">
              <Image
                src="/patrick.jpeg"
                alt="Filima Patrick"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">FILIMA PATRICK</h1>
            <p className="text-blue-600 text-lg">Neuroscientist & Developer</p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-blue-500 hover:text-blue-600 transition-colors"
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
                  className={`flex items-center gap-4 px-6 py-3 rounded-lg transition-colors w-full ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
} 