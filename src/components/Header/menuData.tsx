import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "corporate",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "about",
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "certificates",
        path: "/certificates",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "products",
    newTab: false,
    path: "/products",
  },
  {
    id: 4,
    title: "technology",
    newTab: false,
    path: "/technology",
  },
  {
    id: 5,
    title: "media",
    path: "/media",
    newTab: false,
  },
  {
    id: 6,
    title: "career",
    path: "mailto:ik@sonicalu.com",
    newTab: true,
  },
  {
    id: 7,
    title: "contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
