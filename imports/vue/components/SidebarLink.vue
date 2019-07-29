<template>
  <b-dropdown-item :to="to" class="padded-link" :active="active">
    <span class="link-style"><slot></slot></span>
  </b-dropdown-item>
</template>

<script>
// @ts-check
export default {
  props: {
    to: String,
    current: String,
    linkClasses: String
  },
  computed: {
    active() {
      return this.to === this.current;
    }
  }
}
</script>

<style lang="scss" scoped>
  .link-style {
    font-size: 1.5em;
  }
</style>
