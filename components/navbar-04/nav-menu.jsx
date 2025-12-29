"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Estrutura dos links de navegação
const navItems = [
  { href: "/", label: "Início" },
  { href: "/videos", label: "videos" },
  { href: "/#curriculum", label: "Currículum" },
  { href: "/#trajetoria", label: "Trajetória" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#imagens", label: "Imagens" },
  { href: "/#galeria", label: "Galeria" },
];

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className='gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start'>
      {navItems.map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink
            href={item.href}
            className={
              navigationMenuTriggerStyle() +
              " text-sm font-medium rounded-full hover:bg-primary/10 transition-colors block"
            }
          >
            {item.label}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
