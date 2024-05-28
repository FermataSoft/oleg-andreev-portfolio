<script setup></script>

<template>
  <header class="hero">
    <div class="hero__image">
      <img src="/public/hero.png" alt="" />
    </div>
    <div class="hero__title">
      <div class="hero__title-text-block">
        <h1>Олег Андреев</h1>
        <h2>{{ "<Front-end разработчик />" }}</h2>
        <ElementCV class="hero__icon-cv"></ElementCV>
      </div>
    </div>
    <div class="hero__author-link">
      <a href="https://www.behance.net/AndrVi" target="_blank"
        >Image by AndrVi</a
      >
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  position: relative;
}

.hero__image {
  width: 100%;
  height: 70vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    mask-image: linear-gradient(#000 40%, transparent);
  }
}

.hero__title {
  position: relative;
  position: absolute;
  top: 40%;
  left: 30%;
  color: $on-surface;
  backdrop-filter: blur(50px);
  border-radius: 20px;

  .hero__title-text-block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    padding: 20px;

    h1 {
      font-size: 8rem;
      font-weight: bold;
      z-index: 3;
    }

    h2 {
      font-size: 3rem;
      font-weight: lighter;
      z-index: 3;
    }
  }
}

.hero__author-link {
  position: absolute;
  bottom: 30px;
  right: 50px;

  a {
    color: #889cac;
    font-weight: 500;
  }
}

.hero__icon-cv {
  margin-top: 50px;
}
</style>
