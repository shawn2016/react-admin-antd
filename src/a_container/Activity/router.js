export default [
  {
    path: "/activity/editactive_page",
    title: "编辑活动",
    component: () => import("./editactive_page")
  },
//   {
//     path: "/activity/projectmng_page",
//     title: "项目管理",
//     component: () => import("./projectmng_page")
//   },
  {
    path: "/activity/templateactive_page",
    title: "活动模板",
    component: () => import("./templateactive_page")
  }
];
