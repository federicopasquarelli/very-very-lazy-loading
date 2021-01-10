import Vue from "vue";

const lazyPrefix = "data-lazy-img";

const revealFullImage = (el: HTMLElement, val: string) => {
  return el.tagName === "IMG"
    ? el.setAttribute("src", val)
    : (el.style.backgroundImage = `url(${val}`);
};
const counter = {} as any;
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (counter[entry.target.id]) return;
      counter[entry.target.id] = setTimeout(() => {
        observer.unobserve(entry.target);
        const target = entry.target as HTMLElement;
        const fullImage = target.getAttribute(lazyPrefix) || "";
        revealFullImage(target, fullImage);
      }, 500);
    } else {
      clearTimeout(counter[entry.target.id]);
      counter[entry.target.id] = undefined;
      return;
    }
  });
});

Vue.directive("lazy-bg", {
  bind: function(el, binding) {
    el.setAttribute(lazyPrefix, binding.value);
    if (el.tagName != "IMG") {
      el.style.backgroundImage = `url(${el.getAttribute("src")}`;
    }
    observer.observe(el);
  },
  unbind: function(el) {
    observer.unobserve(el);
  }
});

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
  }
});
