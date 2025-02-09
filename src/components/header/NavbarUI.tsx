'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * @function NavbarUI
 * @description Componente de navegação do header, com menu para desktop e mobile.
 * @returns {JSX.Element} Um componente header com menu.
 */
/******  a3f7e17a-39cf-48a0-a1d7-66ba5ce49517  *******/
export default function NavbarUI() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItens = [
    { name: 'Home', link: '#home' },
    { name: 'Serviços', link: '#services' },
    { name: 'Impressões 3D', link: '#3d' },
    { name: 'Clientes', link: '#clients' },
    { name: 'Contatos', link: '#footer' },
  ];

  return (
    <header
      className={`text-white font-montserrat pt-[45px] transition-[background-color] duration-1000 ease-in-out ${
        menuOpen ? 'bg-bgMenu md:bg-transparent' : 'bg-bgMenu/00'
      }`}
    >
      <section className="max-w-[1240px] md:w-[90%] mx-auto flex justify-between items-center px-4 py-4 md:px-0 h-[64px]">
        <article className="flex gap-2 items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={130} height={130} />
        </article>

        {/* Menu desktop */}
        <NavigationMenu.Root className="hidden md:flex gap-6">
          <NavigationMenu.List className="flex gap-6">
            {menuItens.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <Link
                  href={item.link}
                  className="inline-block py-2 text-right relative group hover:text-hoverMenu transition uppercase font-semibold"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-hoverMenu transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Botão de menu para mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <Cross2Icon className="w-6 h-6 transform rotate-y-180 transition-transform duration-300" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6 transform rotate-y-0 transition-transform duration-300" />
          )}
        </button>
      </section>

      {/* Menu mobile */}
      <div
        className={`md:hidden h-screen bg-bgMenu overflow-hidden transition-[max-height] duration-500 ease-in-out pt-[109px] ${
          menuOpen ? '' : 'pt-[109px] bg-transparent'
        }  -mt-[109px] ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <NavigationMenu.Root className="p-4 flex flex-col gap-2 items-end">
          <NavigationMenu.List className="flex flex-col items-end">
            {menuItens.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <NavigationMenu.Link
                  href={item.link}
                  className="inline-block py-2 text-right relative group hover:text-hoverMenu transition"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-hoverMenu transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
}
