<template>
  <b-container>
    <h1 title="This is the Welcome header" v-tippy="{ theme: 'light' }">
      Welcome to <strong class="text-success">World</strong>Vue
    </h1>
    <p>
      This is the #1 site for building intricate
      and positivelyTolkien-Martin-esque fantasy worlds,
      at least using Vue and Meteor.
    </p>
    <p>
      This is a long running piece of text,
      being used to figure out how exactly the <strong>&lt;b-container /&gt;</strong>
      element works in terms of padding and so on so forth.
      I'm not sure if I'm meant to just chuck things directly into the container,
      or if I'm meant to use the grid system. In any case, it seems to be working OK.
      But YMMV.
    </p>
    <p>
      Click on a world on the sidebar to begin!
    </p>
    <p>
      <test-event-bubble @click="log($event)" />
    </p>
  </b-container>
</template>

<script>
import TestEventBubble from './TestEventBubble';
export default {
  components: {
    TestEventBubble
  },
  methods: {
    log(anything) {
      console.log(anything);
    }
  }
}
</script>
