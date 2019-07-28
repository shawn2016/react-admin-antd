

export default [
    {
      path: "/resources/mianxitest_page",
      title: "免息活动",
      hideMenu: true,
      component: () => import("./activity/components/mianxitest_page/index.js")
    },
    {
        path: "/resources/mianxi715_page",
        title: "免息活动",
        hideMenu: true,
        component: () => import("./activity/components/mianxi715_page/index.js")
      },
  ];
  