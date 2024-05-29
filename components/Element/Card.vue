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
    <a class="card__image" :href="link" target="_blank">
      <div>
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
    <a class="card__button-link" :href="link" target="_blank">
      <input class="card__button" type="button" value="Перейти на сайт" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: auto;
  max-width: 600px;
  background-color: $secondary;
  border-radius: 10px;
  transition: all 0.2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0 20px 40px;
  margin-top: 30px;

  @include device(screen) {
    &:hover {
      background-color: $secondary-variant;

      .card__image {
        box-shadow: 0px 5px 10px 0px rgba(37, 37, 37, 0.5);
      }
    }
  }

  @include breakpoint(1300px) {
    max-width: calc(50% - 30px);
    // gap: 30px;
    // padding-bottom: 30px;
  }

  @include breakpoint(md) {
    max-width: 400px;
    gap: 30px;
    padding-bottom: 30px;
  }
}

.card__image {
  transform: translate(0, -30px);
  margin-bottom: -40px;
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
  padding: 0 20px;
  overflow: hidden;

  @include breakpoint(1300px) {
    padding: 0;
  }

  @include breakpoint(md) {
    margin-top: 10px;
  }

  .card__title {
    font-size: 2.4rem;
    font-weight: bold;
    color: $color2;
    margin-bottom: 20px;

    @include breakpoint(md) {
      font-size: 2rem;
    }

    @include breakpoint(sm) {
      font-size: 1.8rem;
    }
  }
  .card__description {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;
    color: $color4;
    margin-top: 1.6rem;

    @include breakpoint(md) {
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }
}

.card__button-link {
  margin-top: auto;
}

.card__button {
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
