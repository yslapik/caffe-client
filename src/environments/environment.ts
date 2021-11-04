

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
      caption: "Справочники",
      children: [
        {
          routerLink: "/lookups/positions",
          caption: "Позиции",
        },
        {
          routerLink: "/lookups/positionTypes",
          caption: "Категории",
        },
        {
          routerLink: "/lookups/residues",
          caption: "Остатки",
        },
      ]
    },
    {
      routerLink: "/statistics",
      icon: "transform",
      caption: "Статистика"
    }
  ],

  lookupTemplateList: [
    {
      modelName:"Position",
      caption: "Позиции",
      displayColumns:[]
    },
    {
      modelName:"PositionType",
      caption: "Категории",
      displayColumns:[]
    },
    {
      modelName:"Residue",
      caption: "Остатки",
      displayColumns:[]
    }
  ],

  salesTemplate: {
      modelName: 'sales',
      caption:'Продажи',
      displayColumns:[
        {
          name:'name',
          header:'Позиция'
        },
        {
          name:'price',
          header:'Цена'
        },
        {
          name:'count',
          header:'Продано',
          isEditable:true
        },
        {
          name:'dailyAmount',
          header:'Продаж за день'
        },
        {
          name:'sum',
          header:'Общая сумма'
        }
      ]
    }
}
