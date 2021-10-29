import {SideNavListItem} from "../models/structure/sideNavListItem";
import {TableItem} from "../models/structure/tableItem";

export const environment = {
  production: true,
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
      caption: "Категории"
    },
    {
      caption: "Остатки"
    }
  ] as TableItem[]
};
