<script setup></script>

<template>
  <div class="links">
    <a
      href="https://www.linkedin.com/in/olegandreev/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconLinkedIn></IconLinkedIn>
    </a>
    <a
      href="https://www.instagram.com/makewonderofficial/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconInstagram></IconInstagram>
    </a>
    <a href="https://github.com/FermataSoft" target="_blank" rel="noopener noreferrer">
      <IconGitHub></IconGitHub>
    </a>
    <a href="https://t.me/makewonder" target="_blank" rel="noopener noreferrer">
      <IconTelegram></IconTelegram>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  a {
    width: 48px;
    height: 48px;
    color: $secondary;
    position: relative;

    @include breakpoint(xs) {
      width: 36px;
      height: 36px;
    }

    &:hover {
      color: $on-surface;
    }
    
    @keyframes hover-effect {
      0% {
        transform: translate(0, 0px);
      }

      50% {
        transform: translate(0, -2px);
      }

      100% {
        transform: translate(0, 0px);
      }
    }

    img,
    svg {
      width: 100%;
      height: auto;
    }

    &:hover {
      img,
      svg {
        animation: hover-effect ease-out 0.4s;
      }
    }
  }
}
</style>
