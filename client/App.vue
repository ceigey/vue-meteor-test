<template>
  <div>
    <header class="test-header">
      <h1>Vue Stack Test</h1>
    </header>
    <div id="content">
      <p>
        {{ initMessage }}
      </p>
      <p>
        Testing, one, two, three, do you read me?
      </p>
      <p>
        Test button:
        <button
          class="test-button"
          @click="increment"
        >
          Count: {{ count }}
        </button>
      </p>
    </div>
    <div id="bootstrap-test">
      <b-button
        variant="primary"
        class="test-b-button"
        @click="increment"
        v-b-tooltip.hover
        :title="countTooltip" 
      >
        Hover over me!
      </b-button>
      <b-button
        variant="primary"
        @click="increment"
        v-b-tooltip.hover
        :title="countTooltip" 
      >
        Hover over me!
      </b-button>

    </div>
  </div>
</template>

<script>
// @ts-check
export default {
  data() {
    return {
      initMessage: 'Hello, World!',
      count: 0
    }
  },
  computed: {
    countTooltip () {
      return `Count: ${this.count}`;
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>

<style lang="scss">
  /* @import '../imports/scss/themes/custom.scss'; */
  @import '../imports/scss/symlinks/bootstrap/bootstrap.scss';
  @import '../imports/scss/symlinks/bootstrap-vue/index.scss';
  @import '../imports/scss/button/filled';
  @import '../imports/scss/header/test';

  .test-button {
    @include button-filled(#008844);
  }

  .test-header {
    @include header-test(#6655dd, true);
  }

  .test-b-button {
    $bg-color: #6655dd;
    background-color: $bg-color;
    border-color: #00000000;
    &:hover {
      border-color: #00000000;
      background-color: lighten($bg-color, 10%);
    }
    &:active {
      border-color: #00000000;
      background-color: darken($bg-color, 10%) !important;
    }
    &:focus {
      border-color: #00000000;
      box-shadow: 0px 0px 0px 3px transparentize(lighten($bg-color, 0.5), 0.5);
    }
  }
</style>