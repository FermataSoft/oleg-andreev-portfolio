<script setup></script>

<template>
  <div class="footer">
    <p class="copyright-text">
      Copyright © 2024
      <a href="https://www.linkedin.com/in/olegandreev/" target="_blank"
        >Fermata Soft</a
      >. Все права защищены.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.copyright-text {
  font-size: 1.4rem;
  font-weight: 100;
  color: $on-surface;
  text-align: center;
  margin-top: 50px;
  padding-bottom: 10px;

  @include breakpoint(sm) {
    font-size: 1.2rem;
  }

  a {
    color: $on-surface;
    font-weight: 500;

    &:hover {
      color: $primary;
    }
  }
}
</style>
