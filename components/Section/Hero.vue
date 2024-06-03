<script setup></script>

<template>
  <header class="hero">
    <div class="hero__image">
      <picture>
        <source
          type="image/webp"
          srcset="
            ~public/images/hero/hero@2160w.webp 1250w,
            ~public/images/hero/hero@3840w.webp 1920w
          "
          sizes="
            (max-width: 1250px) 1250px,
            1920px"
        />
        <img src="~public/images/hero/hero@3840w.jpg" alt="hero__image" />
      </picture>
    </div>
    <div class="hero__title-block">
      <h1 class="hero__title">Олег Андреев</h1>
      <span class="hero__subtitle">{{ "Front-end разработчик" }}</span>
    </div>
    <div class="glow-background"></div>
    <ElementCV class="hero__icon-cv"></ElementCV>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  position: relative;

  @media (max-aspect-ratio: 1/1) {
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

.hero__title-block {
  position: absolute;
  // top: 40%;
  // left: 30%;
  // transform: translate(-50%, -50%);
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  color: $on-surface;

  .hero__title {
    font-size: $header1;
    line-height: $header1;
    font-weight: bold;
    z-index: 3;
    text-wrap: nowrap;

    @include breakpoint(lg) {
      font-size: $header1-lg;
      line-height: $header1-lg;
    }

    @include breakpoint(md) {
      font-size: $header1-md;
      line-height: $header1-md;
    }

    @include breakpoint(xs) {
      font-size: $header1-xs;
      line-height: $header1-xs;
    }
  }

  .hero__subtitle {
    $subtitle-size: 3rem;
    display: block;
    font-size: $subtitle-size;
    font-weight: 500;
    z-index: 3;
    padding-left: 3px;
    margin-top: 10px;

    @include breakpoint(lg) {
      font-size: calc($subtitle-size * 0.8);
    }

    @include breakpoint(md) {
      font-size: calc($subtitle-size * 0.6);
    }

    @include breakpoint(xs) {
      font-size: calc($subtitle-size * 0.5);
    }
  }
}

.hero__icon-cv {
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>
