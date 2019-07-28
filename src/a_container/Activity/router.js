export default [
  {
    path: "/activity/editactivity_page",
    title: "编辑活动",
    hideMenu: true,
    component: () => import("./editactivity_page")
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
    path: "/activity/activitylist_page",
    title: "活动模板",
    component: () => import("./activitylist_page")
  },
  {
    path: "/activity/previewactivity_page",
    title: "活动预览",
    hideMenu: true,
    component: () => import("./previewactivity_page")
  },
  {
    path: "/activity/editcomponent_page",
    title: "调试组件",
    hideMenu: true,
    component: () => import("./editcomponent_page")
  },
  {
    path: "/activity/previewcomponent_page",
    title: "预览组件",
    hideMenu: true,
    component: () => import("./previewcomponent_page")
  },
  {
    path: "/activity/devactivity_page",
    title: "开发组件",
    component: () => import("./devactivity_page")
  },
  {
    path: "/activity/devcomponent_page",
    title: "编写组件",
    hideMenu: true,
    component: () => import("./devcomponent_page")
  }
];
