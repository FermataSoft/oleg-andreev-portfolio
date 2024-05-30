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
      <p>
        В разработке использую различные технологии:<br />Vue 3 (+ Pinia,
        VueRouter, VueUse), Nuxt 3, MySQL, i18n, gsap, docker, vite, gulp, git.
      </p>
      <p>
        Личные качества: целеустремленность, гибкий подход к
        решению задач, стремление к изучению и применению новых технологий на практике,
        быстрая адаптация к изменению условий, инициативность, коммуникативность.
      </p>
      <p>
        Увлечения и хобби: DJ, саундпродюсер.
      </p>
    </div>
  </section>
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

  @include breakpoint(md) {
    font-size: 1.4rem;
  }

  p {
    margin-top: 2rem;
  }
}
</style>
