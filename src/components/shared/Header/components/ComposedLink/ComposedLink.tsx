import { usePathname } from 'next/navigation';
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import type { ReactNode } from 'react';

const ComposedLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenuLink
      className={navigationMenuTriggerStyle()}
      active={isActive}
      asChild
    >
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  );
};

export default ComposedLink;
