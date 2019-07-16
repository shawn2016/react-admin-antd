export default [
  {
    path: "/system/menu_admin_page",
    title: "菜单管理",
    component: () => import("./menu_admin_page")
  },
  {
    path: "/system/power_admin_page",
    title: "权限管理",
    component: () => import("./power_admin_page")
  },
  {
    path: "/system/role_admin_page",
    title: "角色管理",
    component: () => import("./role_admin_page")
  },
  {
    path: "/system/user_admin_page",
    title: "用户管理",
    component: () => import("./user_admin_page")
  }
];
