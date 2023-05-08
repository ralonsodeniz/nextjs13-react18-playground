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
        <NavigationMenuItem>
          <ComposedLink href={ROUTES.HOME}>home</ComposedLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ComposedLink href={ROUTES.USE_CACHE}>
            use hook and cache
          </ComposedLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
