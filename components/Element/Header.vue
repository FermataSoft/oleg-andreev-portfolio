<script setup>
const props = defineProps({
  inverseColor: Boolean,
  noMargin: Boolean,
});
</script>

<template>
  <h2
    class="section-header"
    :class="{
      'section-header--inverse-color': inverseColor,
      'section-header--no-margin': noMargin,
    }"
  >
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.section-header {
  font-size: $header2;
  font-weight: 800;
  color: $primary;
  text-align: center;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 40px;

  @include breakpoint(lg) {
    font-size: $header2-lg;
  }

  @include breakpoint(sm) {
    font-size: $header2-sm;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @include breakpoint(xs) {
    font-size: $header2-xs;
  }

  &::before,
  &::after {
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
