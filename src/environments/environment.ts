import {TableItem, SideNavListItem} from "../models";

export const environment = {
  production: false,
  sidenavList: [
    {
      routerLink: "/orders",
      icon: "receipt",
      caption: "Создание заказов"
    },
    {
      routerLink: "/sales",
      icon: "reorder",
      caption: "Продажи"
    },
    {
      routerLink: "/residues",
      icon: "shop",
      caption: "Остатки"
    },
    {
      routerLink: "/lookups",
      icon: "format_list_bulleted",
      caption: "Справочники"
    },
    {
      routerLink: "/statistics",
      icon: "transform",
      caption: "Статистика"
    }
  ] as SideNavListItem[],
  lookupEditList: [
    {
      caption: "Позиции"
    },
    {
      caption: "Категории"
    },
    {
      caption: "Остатки"
    }
  ] as TableItem[]
}
