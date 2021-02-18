import Vue from "vue";

const interval = {} as any;
Vue.directive("random-color", {
  bind: function(el, binding) {
    if (!el.id) el.id = "color-" + Math.random();
    if (interval[el.id]) return;
    const printColors = () => {
      const color =
        "#" +
        Math.random()
          .toString(16)
          .substr(-6);
      if (binding.modifiers.bg) {
        el.style.backgroundColor = color;
      }
      if (binding.modifiers.text) {
        el.style.color = color;
      }
    };
    interval[el.id] = setInterval(() => {
      printColors();
    }, 500);
  },
  unbind: function(el) {
    clearInterval(interval[el.id]);
    delete interval[el.id];
  },
});