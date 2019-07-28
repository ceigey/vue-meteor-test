<template>
  <div>
    <header>
      <h1>Vue Stack Test</h1>
    </header>
    <div id="content">
      <p>
        {{ initMessage }}
      </p>
      <p>
        Testing, one, two, three, do you read me?
      </p>
    </div>
  </div>
</template>

<script>
// @ts-check
export default {
  data() {
    return {
      initMessage: 'Hello, World!'
    }
  }
}
</script>

<style>

</style>