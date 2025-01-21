'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NavbarUI({
  setNavbarColor,
}: {
  setNavbarColor: (color: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItens = [
    { name: 'Home', link: '/' },
    { name: 'Serviços', link: '#services' },
    { name: 'Impressões 3D', link: '#3d' },
    { name: 'Clientes', link: '#clients' },
    { name: 'Contatos', link: '#contact' },
  ];

  useEffect(() => {
    if (menuOpen) {
      setNavbarColor(''); // Define a cor do menu aberto
    } else {
      setNavbarColor('transparent'); // Volta para a cor original
    }
  }, [menuOpen, setNavbarColor]);

  return (
    <header className="bg-transparent shadow-sm text-white font-montserrat pt-[45px]">
      <section className="max-w-[1240px] md:w-[90%] mx-auto flex justify-between items-center px-4 py-4 md:px-0 h-[64px]">
        <article className="flex gap-2 items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={130} height={130} />
        </article>

        {/* Menu desktop */}
        <NavigationMenu.Root className="hidden md:flex gap-6">
          <NavigationMenu.List className="flex gap-6">
            {menuItens.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <NavigationMenu.Link
                  href={item.link}
                  className="hover:text-hoverMenu transition uppercase"
                >
                  {item.name}
                </NavigationMenu.Link>
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
        <NavigationMenu.Root className="p-4 flex flex-col gap-2 ">
          <NavigationMenu.List>
            {menuItens.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <NavigationMenu.Link
                  href={item.link}
                  className="block py-2 hover:text-hoverMenu transition "
                >
                  {item.name}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
}
