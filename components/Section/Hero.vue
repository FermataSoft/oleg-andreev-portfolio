<script setup></script>

<template>
  <div class="hero">
    <div class="hero__image">
      <img src="/public/hero.png" alt="" />
    </div>
    <header class="hero__title">
      <div class="hero__title-text-block">
        <h1>Олег Андреев</h1>
        <h2>Front-end разработчик</h2>
      </div>
    </header>
    <div class="hero__author-link">
      <a href="https://www.behance.net/AndrVi" target="_blank"
        >Image by AndrVi</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  position: relative;
}

.hero__image {
  width: 100%;
  height: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.hero__title {
  position: relative;
  position: absolute;
  top: 130px;
  left: 30%;
  // width: 800px;
  // height: 250px;
  transform: translate(-50%, -50%);
  color: $on-surface;
  backdrop-filter: blur(50px);
  border-radius: 20px;
  // border: 10px solid rgba(255, 255, 255, 1);

  .hero__title-text-block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    padding: 20px;

    h1 {
      font-size: 10rem;
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
  bottom: 20px;
  right: 50px;

  a {
    color: #889cac;
    font-weight: 500;
  }
}
</style>
