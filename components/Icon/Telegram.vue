<template>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="-3 -3 71 71"
    fill="currentColor"
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="50%"
        y2="99.2583404%"
        id="linearGradient-1"
      >
        <stop stop-color="#2AABEE" offset="0%"></stop>
        <stop stop-color="#229ED9" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="Artboard">
      <circle
        class="icon__background"
        cx="32"
        cy="32"
        r="32"
        fill="transparent"
        stroke="currentColor"
        stroke-width="6px"
        stroke-location="inside"
      />
      <path
        class="icon__foreground"
        d="M14.49,31.66q14-6.09,18.66-8c8.88-3.69,10.73-4.33,11.93-4.36a2.15,2.15,0,0,1,1.24.38,1.3,1.3,0,0,1,.46.86,6,6,0,0,1,0,1.26c-.48,5.06-2.56,17.34-3.62,23-.45,2.4-1.33,3.2-2.19,3.28-1.86.17-3.27-1.23-5.07-2.41-2.82-1.84-4.41-3-7.14-4.8-3.16-2.08-1.11-3.22.69-5.09.47-.49,8.66-7.94,8.82-8.61a.69.69,0,0,0-.15-.57.73.73,0,0,0-.67-.06q-.42.09-13.49,8.92a6.16,6.16,0,0,1-3.47,1.28,23.27,23.27,0,0,1-5-1.18c-2-.65-3.59-1-3.46-2.1C12.18,32.85,13,32.26,14.49,31.66Z"
      />
    </g>
  </svg>
</template>

<style scoped>
@include device(screen) {
  .icon:hover {
    .icon__background {
      fill: url(#linearGradient-1);
      stroke: url(#linearGradient-1);
    }

    .icon__foreground {
      fill: #ffffff;
    }
  }
}
</style>
