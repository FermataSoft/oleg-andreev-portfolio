<script setup>
defineProps({
  isActive: Boolean
})
</script>

<template>
  <Transition>
    <div class="dropdown-menu" v-show="isActive">
      <div class="dropdown-menu__items">
        <a
          class="dropdown-menu__item"
          href="Oleg Andreev Front-end Developer CV_RU.pdf"
          target="_blank"
          >RU</a
        >
        <a class="dropdown-menu__item" href="" target="_blank">EN</a>
      </div>
      <span class="dropdown-menu__add-element"></span>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.dropdown-menu {
  position: relative;
  transition: all 0.3s;
}

.dropdown-menu__items {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: $secondary;
  border-radius: 10px;
  overflow: hidden;
  z-index: 3;
}

.dropdown-menu__item {
  color: $on-surface;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 15px 40px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: $secondary-variant;
  }

  &:active {
    background-color: $secondary-variant-darker;
  }
}

.dropdown-menu__add-element {
  content: "";
  position: absolute;
  top: 20px;
  right: -8px;
  transform: rotate(45deg);
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: $secondary;
  z-index: 2;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
