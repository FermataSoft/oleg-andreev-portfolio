<script setup></script>

<template>
  <div class="about">
    <ElementHeader>Обо мне</ElementHeader>
    <div class="about__description">
      <p>
        Привет! Меня зовут Олег. Я являюсь Front-end разработчиком (Vue) более 2
        лет во фрилансе. Разрабатываю адаптивные и отзывчивые веб-приложения,
        системы управления контентом (CMS) для небольших организаций и индивидуальных предпринимателей.
      </p>
      <p>В разработке использую различные технологии:</p>
      <p>Nuxt, MySQL, i18n, gsap</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  max-width: $content-width;
  margin: 0 auto;
}
.about__description {
  font-size: 2rem;
  font-weight: 400;
  text-align: justify;
  color: $on-surface;
}
</style>
