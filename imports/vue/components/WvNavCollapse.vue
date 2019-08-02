<template>
  <button
    class="nav-collapse"
    @click="click"
    title="Toggle the full nav"
    v-tippy="{ placement: 'right' }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
    }
  }
}
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