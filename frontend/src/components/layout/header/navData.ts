export const menus = [
  {
    name: "Главная",
    url: "/",
  },
  {
    name: "Услуги",
    url: "/services",
    children: [
      { name: "Разработка 1С", url: "/services/development" },
      { name: "Внедрение", url: "/services/implementation" },
      { name: "Сопровождение", url: "/services/support" },
      { name: "Аутсорс/аутстафф", url: "/services/outsource" },
    ],
  },
  {
    name: "Цены",
    url: "/prices",
  },
  {
    name: "Контакты",
    url: "/contacts",
  },
  {
    name: "О Компании",
    url: "/about",
  },
];