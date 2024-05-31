<script setup></script>

<template>
  <section class="about">
    <ElementHeader>Обо мне</ElementHeader>
    <div class="about__description">
      <p>
        Привет! Меня зовут Олег. Я являюсь Front-end разработчиком (Vue) более 2
        лет во фрилансе. Разрабатываю кроссбраузерные и адаптивные сайты,
        веб-приложения и системы управления контентом (CMS) для небольших
        организаций и индивидуальных предпринимателей.
      </p>
      <h3>Стек:</h3>
      <p>
        Vue 3 (+ Pinia, VueRouter, VueUse), Nuxt 3, MySQL, i18n, gsap, docker,
        vite, gulp, git.
      </p>
      <h3>Личные качества:</h3>
      <p>
        Целеустремленность, гибкий подход к решению задач, стремление к изучению
        и применению новых технологий на практике, быстрая адаптация к изменению
        условий, инициативность, коммуникативность.
      </p>
      <h3>Знание языков:</h3>
      <ul>
        <li>Русский - носитель языка</li>
        <li>Английский - B1 (Intermediate)</li>
      </ul>
      <h3>Увлечения и хобби:</h3>
      <p>DJ, саундпродюссер.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  max-width: $content-width;
  margin: 0 auto;
}
.about__description {
  h3 {
    font-size: $header3;
    font-weight: bold;
    color: $tertiary;
    margin-top: 2rem;

    @include breakpoint(md) {
      font-size: $header3-md;
    }

    @include breakpoint(xs) {
      font-size: $header3-xs;
    }
  }

  p, ul {
    margin-bottom: 2rem;
    font-size: $paragraph;
    font-weight: 400;
    text-align: justify;
    color: $on-surface;

    @include breakpoint(lg) {
      font-size: $paragraph-lg;
    }

    @include breakpoint(md) {
      font-size: $paragraph-md;
    }

    @include breakpoint(sm) {
      font-size: $paragraph-sm;
    }

    @include breakpoint(xs) {
      font-size: $paragraph-xs;
    }
  }
}
</style>
