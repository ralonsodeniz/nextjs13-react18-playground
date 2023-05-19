'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ROUTES } from '@/http/routes';
import ComposedLink from '@/components/shared/Header/components/ComposedLink';

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.values(ROUTES).map((route) =>
          route.render ? (
            <NavigationMenuItem key={route.href}>
              <ComposedLink href={route.href}>{route.description}</ComposedLink>
            </NavigationMenuItem>
          ) : null,
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
