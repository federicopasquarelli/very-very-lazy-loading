import { v4 as uuidv4 } from "uuid";
import { DirectiveOptions } from "vue/types/umd";

const counter = new WeakMap();
const reverseCounter = new WeakMap();
const wasIntersecting = new WeakMap();
const params = {
  handlers: new WeakMap(),
  debouncers: new WeakMap(),
  instant: new WeakMap(),
  uniques: new WeakMap(),
  callbacks: new WeakMap(),
  current: new WeakMap()
};
const clear = (el: Element) => {
  if (!counter.get(el)) return;
  clearTimeout(counter.get(el));
  counter.delete(el);
};
const clearReverse = (el: Element) => {
  if (!reverseCounter.get(el)) return;
  clearTimeout(reverseCounter.get(el));
  reverseCounter.delete(el);
};
const unobserve = (target: Element, observer: IntersectionObserver) => {
  observer.unobserve(target);
  clear(target);
};
const execute = (el: Element, self?: IntersectionObserver) => {
  const isUnique = params.uniques.get(el);
  const getCallback = params.callbacks.get(el);
  const sendResponse = params.handlers.get(el);
  const current = params.current.get(el);
  if (!wasIntersecting.get(el)) wasIntersecting.set(el, true);
  if (current) {
    sendResponse[0](el, getCallback);
  } else {
    sendResponse(el, getCallback);
  }
  if (isUnique && self) unobserve(el, self);
};
const executeCurrent = (el: Element) => {
  const sendResponse = params.handlers.get(el);
  const getCallback = params.callbacks.get(el);
  const current = params.current.get(el);
  if (current) {
    sendResponse[1](el, getCallback);
  }
};
const observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    const instant = params.instant.get(entry.target);

    // if is not intersecting clear the entry timeout for the lazyloader
    if (!entry.isIntersecting) {
      if (wasIntersecting.get(entry.target)) {
        if (instant) {
          executeCurrent(entry.target);
        }
        if (reverseCounter.get(entry.target) || instant) return;
        reverseCounter.set(
          entry.target,
          setTimeout(() => {
            executeCurrent(entry.target);
            clearReverse(entry.target);
          }, 500)
        );
      }
      clear(entry.target);
      return;
    }

    // if the entry has the instant modifier we execute the callback immediately
    // we need to apply this behaviour by default without the modifier
    if (instant) {
      execute(entry.target);
    }

    // skip the setTimeout in case the entry is instant
    if (counter.get(entry.target) || instant) return;

    // debounce the callback, so it's only triggered if the element is intersecting for more than 500ms
    // in case we don't want the callback to get triggered even after a very short intersection time
    counter.set(
      entry.target,
      setTimeout(() => {
        execute(entry.target, self);
        clear(entry.target);
      }, 500)
    );
  });
});
const setInitialParams = (el: HTMLElement, binding: any) => {
  params.callbacks.set(el, binding.arg);
  params.instant.set(el, binding.modifiers.instant);
  params.uniques.set(el, binding.modifiers.unique);
  params.current.set(el, binding.modifiers.current);
  params.debouncers.set(el, uuidv4());
  params.handlers.set(el, binding.value);
};
const removeParams = (el: HTMLElement) => {
  params.callbacks.delete(el);
  params.instant.delete(el);
  params.uniques.delete(el);
  params.current.delete(el);
  params.debouncers.delete(el);
  params.handlers.delete(el);
  counter.delete(el);
  reverseCounter.delete(el);
  wasIntersecting.delete(el);
};
export const isIntersecting = {
  bind: function(el, binding) {
    setInitialParams(el, binding);
    observer.observe(el);
  },
  unbind: function(el) {
    removeParams(el);
    observer.unobserve(el);
  }
} as DirectiveOptions;
