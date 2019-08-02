<template>
  <router-link
    :to="to"
    :class="isCurrentLinkStyle"
    :title="to"
    v-tippy="{ placement: 'right' }"
  >
    <slot name="icon"></slot>
    <span :class="isCurrentTextStyle">
      &nbsp;
      <slot name="text">
        <slot />
      </slot>
    </span>
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
    },
    isCurrentLinkStyle() {
      if (this.isCurrent) {
        return 'wv-nav-link bg-success';
      } else {
        return 'wv-nav-link inactive-bg';
      }
    },
    isCurrentTextStyle() {
      if (this.full) {
        return 'nav-text opaque-text';
      } else {
        return 'nav-text transparent-text';
      }
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

  .nav-text {
    transition: opacity 0.2s ease-in-out;
  }

  .opaque-text {
    opacity: 1;
  }

  .transparent-text {
    opacity: 0;
  }
</style>
