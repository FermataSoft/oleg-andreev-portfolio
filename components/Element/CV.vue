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
  padding-left: 20px;
}

.cv__menu {
  position: absolute;
  top: -10px;
  left: 0;
  transform: translate(-100%, 0);
}
</style>
