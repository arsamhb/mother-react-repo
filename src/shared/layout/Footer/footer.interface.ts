export interface IFooterLink {
  title: string;
  url: string;
}

export interface IFooterGroup {
  title: string;
  links: Array<IFooterLink>;
}

export interface FooterProps {
  linkGroups: Array<IFooterGroup>;
}
