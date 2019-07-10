export default [
  {
    path: "/activity/editactivity_page",
    title: "编辑活动",
    menuChild: true,
    component: () => import("./editactivity_page")
  },
  {
    path: "/activity/projectmng_page",
    title: "项目管理",
    component: () => import("./projectmng_page")
  },
  {
    path: "/activity/myactivity_page",
    title: "我的活动",
    component: () => import("./myactivity_page")
  },
  {
    path: "/activity/templateactivity_page",
    title: "活动模板",
    component: () => import("./templateactivity_page")
  },
  {
    path: "/activity/previewactivity_page",
    title: "活动预览",
    menuChild: true,
    component: () => import("./previewactivity_page")
  }
];
