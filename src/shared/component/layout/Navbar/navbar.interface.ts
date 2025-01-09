export interface INavbarItem {
  title: string;
  linkURL: string;
}

export interface INavbarGroup {
    parent: string
    children: Array<INavbarItem>
}

