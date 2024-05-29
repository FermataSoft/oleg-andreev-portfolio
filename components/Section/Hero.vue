<script setup></script>

<template>
  <header class="hero">
    <div class="hero__image">
      <img src="/public/hero.png" alt="" />
    </div>
    <div class="hero__title">
      <h1>Олег Андреев</h1>
      <h2>{{ "Front-end разработчик" }}</h2>
    </div>
    <div class="glow-background"></div>
    <ElementCV class="hero__icon-cv"></ElementCV>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  position: relative;

  @media (max-aspect-ratio: 1/1)
  {
    margin-bottom: -5vh;
  }
}

.hero__image {
  width: 100%;
  height: 70vh;
  overflow: hidden;

  @include breakpoint(xs) {
    height: 60vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    mask-image: linear-gradient(#000 40%, transparent);
  }
}

.hero__title {
  position: absolute;
  // top: 40%;
  // left: 30%;
  // transform: translate(-50%, -50%);
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  color: $on-surface;

  h1 {
    font-size: 10rem;
    line-height: 10rem;
    font-weight: bold;
    z-index: 3;
    text-wrap: nowrap;

    @include breakpoint(lg) {
      $size: calc(10rem * 0.8);
      font-size: $size;
      line-height: $size;
    }

    @include breakpoint(md) {
      $size: calc(10rem * 0.6);
      font-size: $size;
      line-height: $size;
    }

    @include breakpoint(xs) {
      $size: calc(10rem * 0.4);
      font-size: $size;
      line-height: $size;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 500;
    z-index: 3;
    padding-left: 3px;
    margin-top: 10px;

    @include breakpoint(lg) {
      font-size: calc(3rem * 0.8);
    }

    @include breakpoint(md) {
      font-size: calc(3rem * 0.6);
    }

    @include breakpoint(xs) {
      font-size: calc(3rem * 0.5);
    }
  }
}

.hero__icon-cv {
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>
