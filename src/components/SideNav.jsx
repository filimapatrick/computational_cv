'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaRocket,
  FaFlask,
  FaBook,
  FaGraduationCap,
  FaTools,
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

export const navItems = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaUser },
  { name: 'Experience', path: '/experience', icon: FaBriefcase },
  { name: 'Projects', path: '/projects', icon: FaRocket },
  { name: 'Research', path: '/research', icon: FaFlask },
  { name: 'Publications', path: '/publications', icon: FaBook },
  { name: 'Education', path: '/education', icon: FaGraduationCap },
  { name: 'Skills & Stack', path: '/skills', icon: FaTools },
];

export const contactLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/patrick-filima-91450817b/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/filimapatrick', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:filimapatrick@gmail.com', label: 'Email' }
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full h-screen flex-col justify-between py-4 pl-3 pr-1 lg:pl-4 lg:pr-1 relative">
      {/* Sidebar Container */}
      <div className="w-full h-full rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between p-4 overflow-y-auto">

        {/* Top Profile Header */}
        <div>
          <Link href="/" className="text-center block group mb-5">
            <div className="w-20 h-20 relative rounded-full mx-auto mb-3 p-0.5 bg-gradient-to-b from-sky-400/40 to-indigo-500/20 border border-sky-400/30 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0B1120]">
                <Image
                  src="/patrick.jpeg"
                  alt="Patrick Filima"
                  fill
                  priority
                  loading="eager"
                  sizes="80px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <h1 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
              Patrick Filima
            </h1>
            <div className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight space-y-0.5">
              <p className="text-sky-400">Research Software Engineer</p>
              <p className="text-indigo-300">Computational Neuroscientist</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-sm'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <ItemIcon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Social Links & Affiliations */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-around">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-lg bg-white/5 hover:bg-sky-500/15 text-slate-400 hover:text-sky-300 border border-white/5 hover:border-sky-500/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <div className="text-[10px] text-center text-slate-500 font-medium">
            Austin, TX • Oxford • Global
          </div>
        </div>
      </div>
    </nav>
  );
}