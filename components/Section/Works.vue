<script setup>
let cards = [
  {
    imgSrc: "images/interiorsteel.jpg",
    title: "Интерьер Сталь (в разработке)",
    description: [
      `Многостраничный сайт мастерской по изготовлению изделий из металла (каркасы лестниц, ограждения, ворота и др.). Сайт является мультиязычным. Дизайн и часть графики выполнены с нуля.`,
      `Стек: Vue 3, Pinia, Vite, Scss, MySQL, gsap.`,
      `P.s. : из-за временного размещения на бесплатном хостинге (на время разработки) отправка сообщений через форму обратной
      связи будет недоступна.`,
    ],
    link: "http://subneckgm2.temp.swtest.ru/",
  },
  {
    imgSrc: "images/andrvi.jpg",
    title: "AndrVi • 3D motion designer",
    description: [
      `Одностраничный сайт-визитка, демонстрирующий работы 3D Motion дизайнера. Верстка выполнена по проекту Figma.`,
      `Стек: HTML, Scss, Java Script, gulp, i18n, jQuery, gsap, PHP Mailer`,
      `P.s. : из-за временного размещения на бесплатном хостинге отправка сообщений через форму обратной связи будет недоступна.`,
    ],
    link: "https://andrvi.web.app/",
  },
];
</script>

<template>
  <section class="works">
    <ElementHeader class="works__header">Проекты</ElementHeader>
    <div class="works__cards">
      <ElementCard
        v-for="(card, index) in cards"
        :key="index"
        :img-src="card.imgSrc"
        :title="card.title"
        :description="card.description"
        :link="card.link"
      ></ElementCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works {
  display: block;
  max-width: $content-width;
  margin: 0 auto;
}

.works__header {
  margin-bottom: 40px;
}

.works__cards {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 100px;
}
</style>
