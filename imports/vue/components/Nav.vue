<template>
  <nav class="bg-dark text-light wv-nav">
    <slot></slot>
  </nav>
</template>

<style lang="scss" scoped>
  .wv-nav {
    transition: width 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
  }
</style>