<script setup></script>

<template>
  <section class="social-links">
    <!-- <ElementHeader>Ссылки</ElementHeader> -->
    <BlockLinks></BlockLinks>
  </section>
</template>

<style lang="scss" scoped>
.social-links {
  margin-top: 80px;

  @include breakpoint(sm) {
    margin-top: 40px;
  }
}
</style>
