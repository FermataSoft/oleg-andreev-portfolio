<script setup>
let isMenuActive = ref(false);
</script>

<template>
  <div class="cv" @mouseenter="isMenuActive = true" @mouseleave="() => isMenuActive = false">
    <IconCV></IconCV>
    <ElementDropdownMenu
      class="cv__menu"
      :is-active="isMenuActive"
    ></ElementDropdownMenu>
  </div>
</template>

<style lang="scss" scoped>
.cv {
  position: relative;
  width: max-content;
  padding-right: 20px;
}

.cv__menu {
  position: absolute;
  right: 0;
  top: -10px;
  transform: translate(100%, 0%);
}

.cv__outside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
