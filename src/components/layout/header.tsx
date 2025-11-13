"use client";

import { usePathname } from 'next/navigation';
import PillNav from './PillNav';
import './PillNav.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <PillNav
      logoText="RDK"
      items={navItems}
      activeHref={pathname}
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#4169E1"
      pillColor="#E6EBF5"
      hoveredPillTextColor="#4169E1"
      pillTextColor="#4169E1"
    />
  );
}
