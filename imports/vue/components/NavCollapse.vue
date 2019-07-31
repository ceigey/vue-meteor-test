<template>
  <button
    class="nav-collapse"
    @click="$store.dispatch('nav/toggleNav')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .nav-collapse {
    border-color: #00000000;
    border-style: solid;
    border-width: 4px;
    color: #28a745;
    width: 100%;
    background-color: #000;
  }
</style>