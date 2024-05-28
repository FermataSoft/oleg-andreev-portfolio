<script setup>
const props = defineProps({
  inverseColor: Boolean,
  noMargin: Boolean,
});
</script>

<template>
  <h1
    class="section-header"
    :class="{
      'section-header--inverse-color': inverseColor,
      'section-header--no-margin': noMargin,
    }"
  >
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.section-header {
  font-size: 4rem;
  font-weight: 800;
  margin-top: 80px;
  padding-bottom: 30px;
  color: $primary;
  text-align: center;
  text-transform: uppercase;

  @include breakpoint(md) {
    font-size: 3rem;
  }

  @include breakpoint(sm) {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }

  &::before, &::after {
    padding: 0 10px;
  }

  &::before {
    content: "<";
  }

  &::after {
    content: "/>";
  }

  .section-header__icon-before {
    margin-right: 10px;

    @include breakpoint(sm) {
      margin-right: 0;
    }
  }
  .section-header__icon-after {
    margin-left: 10px;

    @include breakpoint(sm) {
      margin-left: 0;
    }
  }
}

.section-header--inverse-color {
  color: $on-surface;

  &::before,
  &::after {
    color: $on-surface;
  }
}

.section-header--no-margin {
  margin: 0;
}
</style>
