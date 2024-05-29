<script setup></script>

<template>
  <footer class="footer">
    <p class="footer__copyright-text">
      Copyright © 2024
      <a href="https://www.linkedin.com/in/olegandreev/" target="_blank"
        >Fermata Soft</a
      >. Все права защищены.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer__copyright-text {
  font-size: 1.4rem;
  font-weight: 100;
  color: $on-surface;
  text-align: center;
  margin-top: 50px;
  padding-bottom: 10px;

  @include breakpoint(sm) {
    font-size: 1.2rem;
    margin-top: 30px;
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
