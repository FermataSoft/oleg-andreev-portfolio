<script setup>
let cards = [
  {
    imgSrc: "images/interiorsteel.jpg",
    title: "Интерьер Сталь (в разработке)",
    description: [
      `Многостраничный сайт мастерской по изготовлению изделий из металла (каркасы лестниц, ограждения, ворота и др.). Сайт является мультиязычным.`,
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
      `Одностраничный сайт-визитка, демонстрирующий работы 3D Motion дизайнера.`,
      `Стек: HTML, Scss, Java Script, gulp, i18n, jQuery, gsap, PHP Mailer`,
      `P.s. : из-за временного размещения на бесплатном хостинге отправка сообщений через форму обратной связи будет недоступна.`,
    ],
    link: "https://andrvi.web.app/",
  },
];
</script>

<template>
  <div class="works">
    <h1>Проекты</h1>
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
  </div>
</template>

<style lang="scss" scoped>
.works {
  display: block;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
}

h1 {
  margin-top: 50px;
  margin-bottom: 100px;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: $color2;
  text-transform: uppercase;
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
