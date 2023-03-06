// 最简代码，也就是这些字段必须有
export default {
  path: "/crud",
  meta: {
    title: "crud页面"
  },
  children: [
    {
      path: "/crud/index",
      name: "Crud",
      component: () => import("@/views/crud/index.vue"),
      meta: {
    title: "crud页面"
      }
    }
  ]
};
