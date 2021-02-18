import { v4 as uuidv4 } from "uuid";
import { DirectiveOptions } from "vue/types/umd";
interface ObjectLiteral {
  [key: string]: number;
}
const counter = {} as ObjectLiteral;
const params = {
  handlers: new WeakMap(),
  debouncers: new WeakMap(),
  instant: new WeakMap(),
  uniques: new WeakMap(),
  callbacks: new WeakMap()
};
const clear = (id: string) => {
  if (!counter[id]) return;
  clearTimeout(counter[id]);
  delete counter[id];
};
const unobserve = (
  target: Element,
  id: string,
  observer: IntersectionObserver
) => {
  observer.unobserve(target);
  if (id) clear(id);
};
const observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    const getTimeoutId = params.debouncers.get(entry.target);
    const instant = params.instant.get(entry.target);

    const execute = () => {
      const isUnique = params.uniques.get(entry.target);
      const getCallback = params.callbacks.get(entry.target);
      const sendResponse = params.handlers.get(entry.target);
      sendResponse(entry.target, getCallback);
      if (isUnique) unobserve(entry.target, getTimeoutId, self);
    };

    // check if the entry is intersecting with the viewport
    if (entry.isIntersecting) {
      // if the entry has the instant modifier we execute the callback immediately
      // we need to apply this behaviour by default without the modifier
      if (instant) execute();
      // skip the setTimeout in case the entry is not instant
      if (counter[getTimeoutId] || instant) return;
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

export const isIntersecting = {
  bind: function(el, binding) {
    params.callbacks.set(el, binding.arg);
    params.instant.set(el, binding.modifiers.instant);
    params.uniques.set(el, binding.modifiers.unique);
    params.debouncers.set(el, uuidv4());
    params.handlers.set(el, binding.value);
    observer.observe(el);
  },
  unbind: function(el) {
    observer.unobserve(el);
  }
} as DirectiveOptions;
