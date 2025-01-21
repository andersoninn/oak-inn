'use client';

import { useState } from 'react';
import NavbarUI from './NavbarUI';

export default function Header() {
  const [navbarColor, setNavbarColor] = useState('transparent');

  return (
    <section className={`absolute top-0 w-full z-10  bg-${navbarColor}`}>
      <NavbarUI setNavbarColor={setNavbarColor} />
    </section>
  );
}
