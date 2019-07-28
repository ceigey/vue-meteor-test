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
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>

<style lang="scss">
  @import '../imports/scss/button/filled';
  @import '../imports/scss/header/test';

  .test-button {
    @include button-filled(#008844);
  }

  .test-header {
    @include header-test(#6655dd, true);
  }
</style>