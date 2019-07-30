<template>
  <div class="vbr-navbar bg-light">
    <slot name="links"></slot>
  </div>
</template>

<style lang="scss" scoped>
  .vbr-navbar {
    $width: 200px;
    /* position: absolute; */
    height: 80vh;
    width: $width;
    transition: 0.2 ease-in-out;
    li {
      margin: 0;
    }
  }
</style>