import { createElementBlock as s, openBlock as c, createElementVNode as a, markRaw as i } from "vue";
const d = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, r] of e)
    t[o] = r;
  return t;
}, l = {};
function f(n, e) {
  return c(), s("div", null, e[0] || (e[0] = [
    a("h1", null, "INSIGHTS DASHBOARD", -1)
  ]));
}
const u = /* @__PURE__ */ d(l, [["render", f]]), m = {
  setup(n) {
    n.registerComponent("InsightsDashboard", i(u));
  }
};
export {
  m as default
};
