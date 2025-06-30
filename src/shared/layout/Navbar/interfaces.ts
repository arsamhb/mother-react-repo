import { Roles } from '@/shared/service/interface.schema';

export type INavItem = {
  title: string;
  linkURL: string;
  needsAuthenticatedUser?: boolean;
  rolesAllowed?: Roles[];
};

export type INavGroup = {
  parent: string;
  children: INavItem[];
  needsAuthenticatedUser?: boolean;
  rolesAllowed?: Roles[];
};

export type NavbarData = Array<INavItem | INavGroup>;
