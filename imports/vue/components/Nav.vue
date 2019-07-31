<template>
  <nav v-if="showNav" class="bg-dark text-light wv-nav wv-big">
    <slot />
  </nav>
  <nav v-else class="bg-light text-light wv-nav wv-small">
    <slot />
  </nav>
</template>

<script>
export default {
  computed: {
    showNav() {
      return this.$store.state.nav.showNav;
    }
  }
}
</script>

<style lang="scss" scoped>
  .wv-nav {
    transition: width 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
  }

  .wv-big {
    width: 200px;
  }

  .wv-small {
    width: 80px;
  }
</style>