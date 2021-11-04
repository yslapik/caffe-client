export interface SideNavListItem {
  routerLink:string;
  icon?:string;
  caption:string;
  children?:SideNavListItem[]
}
