'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaUser, 
  FaRocket, 
  FaBriefcase, 
  FaGraduationCap, 
  FaFlask, 
  FaBook, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaTools,
  FaMoon
} from 'react-icons/fa';

export const navItems = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaUser },
  { name: 'What I Do', path: '/skills', icon: FaTools },
  { name: 'Expertise', path: '/skills#expertise', icon: FaRocket },
  { name: 'Projects', path: '/experience#projects', icon: FaFlask },
  { name: 'Experience', path: '/experience', icon: FaBriefcase },
  { name: 'Education', path: '/education', icon: FaGraduationCap },
  { name: 'Publications', path: '/publications', icon: FaBook },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
];

export const contactLinks = [
  { icon: FaEnvelope, href: 'mailto:filimapatrick@gmail.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/patrick-filima-91450817b/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/filimapatrick', label: 'GitHub' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex w-72 h-screen flex-col justify-between py-6 px-4 relative z-30">
      {/* Floating Glass Sidebar Container */}
      <div className="absolute inset-2 rounded-3xl bg-[#0D1425]/75 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto">
        
        {/* Top Profile Header */}
        <div>
          <Link href="/" className="text-center block group mb-6">
            <div className="w-24 h-24 relative rounded-full overflow-hidden mx-auto mb-3 border-2 border-blue-500/40 group-hover:border-cyan-400/80 transition-all duration-300 shadow-lg shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 backdrop-blur-xs" />
              <Image
                src="/patrick.jpeg"
                alt="Filima Patrick"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-lg font-extrabold text-white tracking-wider uppercase group-hover:text-cyan-300 transition-colors">
              FILIMA PATRICK
            </h1>
            <p className="text-xs font-medium text-blue-400 mt-1 leading-tight">
              Research Software Engineer &<br />Technical Product Lead
            </p>
          </Link>

          {/* Navigation Links */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-white border border-blue-500/40 shadow-md shadow-blue-500/10'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Social & Theme Info */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <p className="text-[11px] text-gray-400 text-center font-medium leading-relaxed">
            Let’s build the future of <span className="text-blue-400 font-semibold">science</span> and <span className="text-purple-400 font-semibold">technology</span>.
          </p>

          <div className="flex justify-center gap-3">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-300 hover:text-cyan-300 p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/30 border border-white/10 transition-all duration-200"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] text-gray-400">© 2026 Filima Patrick</span>
            <div className="p-2 rounded-full bg-white/5 text-gray-300 border border-white/10">
              <FaMoon className="w-3 h-3 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}