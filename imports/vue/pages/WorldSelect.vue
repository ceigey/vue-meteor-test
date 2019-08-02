<template>
  <b-container class="overflow-auto">
    <div class="new-world">
      <b-button
        variant="primary"
        to="/world-new"
      >
        New World
      </b-button>
    </div>
    <div class="heading">
      <h1>Your Worlds</h1>
    </div>
    <br />
    <div class="world-list">
      <b-card
        v-for="world in WorldCursor"
        :key="world._id"
        class="shadow-sm world-card"
      >
        <h2>{{ world.name }}</h2>
        <p>
          Updated: {{ world.updated }}
          <br />
          Created: {{ world.created }}
        </p>
      </b-card>
    </div>
    <br />
  </b-container>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import World from '#/imports/collections/World';
// @ts-check
export default {
  data() {
    return {
      newName: '',
      selectedWorld: '',
      selectedWorldMeta: {},
      worlds: [],
      newWorldName: '',
    }
  },
  methods: {
    selectWorld(id, meta = {}) {
      if (id === this.selectedWorld) {
        this.selectedWorld = '';
        this.selectedWorldMeta = {};
      } else {
        this.selectedWorld = id;
        this.selectedWorldMeta = meta;
      }
    },
    renameWorld() {
      Meteor.call('renameWorld', {
        id: this.selectedWorld,
        name: this.newName
      }, (error, result) => {
        if (result) {
          this.newName = '';
        }
      });
    },
    newWorld() {
      Meteor.call('newWorld', {
        name: this.newWorldName
      }, (error, result) => {
        if (result) {
          this.newWorldName = '';
        } 
      });
    }
  },
  meteor: {
    $subscribe: {
      World: []
    },
    WorldCursor() {
      return World.find({}, {
        sort: { updated: -1 }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .new-world {
    /* height: 3em; */
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .world-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .world-card {
    width: 350px;
    height: 300px;
    margin: 15px;
    border-radius: 15px;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0px 5px 25px 0px #00000033 !important;
    }
  }

</style>

