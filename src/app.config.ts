export default defineAppConfig({
  pages: ["pages/home/home", "pages/my/my"],
  subPackages: [
    {
      root: "pages/subPkg",
      pages: ["search/search", "detail/detail"],
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fa2c19",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    selectedColor: "#fa2c19",
    list: [
      {
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "assets/icons/home-default.png",
        selectedIconPath: "assets/icons/home-active.png",
      },
      {
        pagePath: "pages/my/my",
        text: "个人中心",
        iconPath: "assets/icons/circle-default.png",
        selectedIconPath: "assets/icons/circle-active.png",
      },
    ],
  },
});
