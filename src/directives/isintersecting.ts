import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

const counter = {} as any;
const params = {
  handlers: new WeakMap(),
  debouncers: new WeakMap(),
  lazy: new WeakMap(),
  uniques: new WeakMap(),
  callbacks: new WeakMap(),
};
const clear = (id: string) => {
  if (!counter[id]) return;
  clearTimeout(counter[id]);
  delete counter[id];
};
const unobserve = (target: Element, id: string) => {
  observer.unobserve(target);
  if (id) clear(id);
};
const observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    const getTimeoutId = params.debouncers.get(entry.target);
    const notLazy = params.lazy.get(entry.target);
    
    const execute = () => {
      const isUnique = params.uniques.get(entry.target);
      const getCallback = params.callbacks.get(entry.target);
      const sendResponse = params.handlers.get(entry.target);
      sendResponse(entry.target, getCallback);
      if (isUnique) unobserve(entry.target, getTimeoutId);
    };

    // check if the entry is intersecting with the viewport
    if (entry.isIntersecting) {
      // if the entry has the lazy modifier we execute the callback immediately
      // we need to apply this behaviour by default without the modifier
      if (notLazy) execute();
      // skip the setTimeout in case the entry is not lazy
      if (counter[getTimeoutId] || notLazy) return;
      // debounce the callback, so it's only triggered if the element is intersecting for more than 500ms
      // in case we don't want the callback to be triggered even after a very short intersection time
      counter[getTimeoutId] = setTimeout(() => {
        execute();
        clear(getTimeoutId);
      }, 500);
    } else {
      clear(getTimeoutId);
      return;
    }
  });
});

export default Vue.directive("is-intersecting", {
  bind: function(el, binding) {
    params.callbacks.set(el, binding.arg);
    params.lazy.set(el, binding.modifiers.lazy);
    params.uniques.set(el, binding.modifiers.unique);
    params.debouncers.set(el, uuidv4());
    params.handlers.set(el, binding.value);
    observer.observe(el);
  },
  unbind: function(el) {
    observer.unobserve(el);
  },
});
