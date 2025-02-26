export interface NavbarProps {
  title: string;
  items?: Array<INavbarItem | INavbarGroup>;
}

export interface INavbarItem {
  title: string;
  linkURL: string;
}

export interface INavbarGroup {
  parent: string;
  children: Array<INavbarItem>;
}
