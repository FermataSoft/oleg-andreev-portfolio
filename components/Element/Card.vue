<script setup>
const props = defineProps({
  imgSrc: String,
  title: String,
  description: Array,
  link: String,
});
</script>

<template>
  <div class="card">
    <div class="card__wrapper">
      <a :href="link" target="_blank">
        <div class="card__image">
          <img :src="imgSrc" alt="" />
        </div>
      </a>
      <div class="card__text">
        <h1 class="card__title">{{ title }}</h1>
        <p
          class="card__description"
          v-for="(item, index) in description"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <a :href="link" target="_blank">
      <input class="card__button" type="button" value="Перейти на сайт" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 750px;
  width: 600px;
  background-color: $color6;
  border-radius: 10px;
  transition: all 0.2s ease-out;

  @include device(screen) {
    &:hover {
      background-color: $secondary-variant;

      .card__image {
        box-shadow: 0px 5px 10px 0px rgba(37, 37, 37, 0.5);
      }
    }
  }
}

.card__wrapper {
  position: absolute;
  top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
}

.card__image {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 20px 20px 0px rgba(37, 37, 37, 0.5);
  transition: all 0.2s ease-out;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.card__text {
  text-align: center;
  padding: 0 40px;
  line-height: 2.5rem;
  overflow: hidden;
  height: 300px;
  // background-color: #fff;
  mask-image: linear-gradient(#000 95%, transparent);

  .card__title {
    font-size: 2.4rem;
    font-weight: bold;
    color: $color2;
    margin-bottom: 20px;
  }
  .card__description {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    color: $color4;
    margin-top: 1.6rem;
  }
}

.card__button {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px 20px;
  border-radius: 25px;
  background-color: $color2;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-out;

  @include device(screen) {
    &:hover {
      background-color: $primary-variant;
    }
  }

  &:active {
    background-color: $primary-variant-darker;
  }
}
</style>
