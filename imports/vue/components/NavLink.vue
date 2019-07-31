<template>
  <router-link :to="to" v-if="isCurrent" class="wv-nav-link bg-success">
    <slot name="icon"></slot>
    <span v-if="full">&nbsp;</span>
    <slot name="text" v-if="full">
      <slot />
    </slot>
  </router-link>
  <router-link :to="to" v-else class="wv-nav-link inactive-bg">
    <slot name="icon"></slot>
    <span v-if="full">&nbsp;</span>
    <slot name="text" v-if="full">
      <slot />
    </slot>
  </router-link>
</template>

<script>
// @ts-check
export default {
  props: {
    to: String,
    current: String,
    full: Boolean
  },
  computed: {
    isCurrent() {
      return this.to === this.current;
    }
  }
}
</script>

<style lang="scss" scoped>
  .wv-nav-link {
    transition: 0.1s ease-in-out;
    color: #ffffff;
    border-color: #00000000;
    border-style: solid;
    border-width: 4px;
    font-size: 1.3em;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
      text-decoration: none;
    }
    &:focus {
      border-color: transparentize(lighten(#28a745, 10%), 0.5);
      outline: none;
    }
  }

  .inactive-bg {
    background-color: #00000055;
    &:hover {
      background-color: #00000088;
    }
    &:focus {
      background-color: #00000088;
    }
    &:active {
      background-color: #000000bb;
    }
  }
</style>
