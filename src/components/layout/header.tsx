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
      baseColor="#046307"
      pillColor="white"
      hoveredPillTextColor="#046307"
      pillTextColor="#046307"
    />
  );
}
