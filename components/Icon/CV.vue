<template>
  <svg class="icon" viewBox="0 0 252.85 305.7">
    <rect
      class="icon__stroke"
      x="10"
      y="10"
      width="232.85"
      height="285.7"
      rx="32"
      ry="32"
    />
    <g>
      <circle class="icon__fill" cx="87.64" cy="75.74" r="27.57" />
      <path
        class="icon__fill"
        d="m87.64,103.28c-27.94,0-50.58,22.65-50.58,50.59h101.17c0-27.94-22.65-50.59-50.59-50.59Z"
      />
    </g>
    <line class="icon__stroke" x1="170.17" y1="97.28" x2="208.47" y2="97.28" />
    <line class="icon__stroke" x1="170.17" y1="144.78" x2="208.47" y2="144.78" />
    <line class="icon__stroke" x1="46.05" y1="192.28" x2="208.47" y2="192.28" />
    <line class="icon__stroke" x1="45.22" y1="239.79" x2="207.63" y2="239.79" />
  </svg>
  <slot></slot>
</template>

<style lang="scss" scoped>
.icon {
  height: 50px;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

.icon__fill {
  fill: $secondary;
}

.icon__stroke {
  stroke: $secondary;
  fill: none;
  stroke-width: 20px;
}

.icon__stroke {
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
