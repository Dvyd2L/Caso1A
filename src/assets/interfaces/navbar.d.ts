export interface ILink {
    name: string;
    href: string;
    target?: string;
    rel?: string;
    icon?: SVGElement | ImageMetadata| string;
  }
  
  export interface ILinkGroup {
    name: string;
    links: ILink[];
  }
  
  export interface ILinkGroups {
    groups: ILinkGroup[];
  }
  
  export interface ILinkGroupsState {
    linkGroups: ILinkGroups;
  }