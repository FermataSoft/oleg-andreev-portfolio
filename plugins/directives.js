export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el, binding, vnode) {
      el.__ClickOutsideHandler__ = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          if (typeof binding.value === "function") {
            binding.value(event);
          } else {
            vnode.context[binding.expression](event);
            throw new Error(`Custom directive: ${this.name} is not function. Use v-${this.name}="() => ..."`)
          }
        };
      };
      document.body.addEventListener('click', el.__ClickOutsideHandler__);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.__ClickOutsideHandler__)
    }
  })
})