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
          icon: "arrow_right",
          caption: "Позиции",
        },
        {
          routerLink: "/lookups/positionTypes",
          icon: "arrow_right",
          caption: "Категории",
        },
        {
          routerLink: "/lookups/residues",
          icon: "arrow_right",
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

  tableTemplate:{
    positionsLookup:{
      modelName:"Positions",
      caption: "Позиции",
      displayColumns:[
        {
          name:'name',
          header:'Название',
          isEditable:true
        },
        {
          name:'price',
          header:'Цена',
          isEditable:true
        },
        {
          name:'src',
          header:'Ссылка на иконку',
          isEditable:true
        },
      ]
    },
    positionTypesLookup:{
      modelName:"PositionTypes",
      caption: "Категории",
      displayColumns:[
        {
          name:'name',
          header:'Название категории',
          isEditable:true
        },
      ]
    },
    residuesLookup: {
      modelName:"Residues",
      caption: "Остатки",
      displayColumns:[
        {
          name:'name',
          header:'Название',
          isEditable:true
        },
        {
          name:'purchaseDate',
          header:'Дата закупки',
          isEditable:true
        },
        {
          name:'totalAmount',
          header:'Общее кол-во',
          isEditable:true
        },
      ]
    },
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
}
