<template>
  <div>
    <h1>
      Worlds
    </h1>
    <b-button-group>
      <b-button
        v-for="world in WorldCursor"
        :key="world._id"
        @click="selectWorld(world._id)"
        :pressed="world._id === selectedWorld"
        variant="light"
      >
        {{ world.name }}
      </b-button>
    </b-button-group>

    <b-input-group prepend="New Name" > <!-- class="mt-3" -->
      <b-form-input v-model="newName"></b-form-input>
      <b-input-group-append>
        <b-button
          :disabled="!Boolean(selectedWorld)"
          @click="renameWorld"
          variant="primary"
        >
          Update
        </b-button>
      </b-input-group-append>
    </b-input-group>

    <b-input-group prepend="New World" > <!-- class="mt-3" -->
      <b-form-input v-model="newWorldName"></b-form-input>
      <b-input-group-append>
        <b-button @click="newWorld" variant="warning">Add</b-button>
      </b-input-group-append>
    </b-input-group>

    {{ selectedWorld }}
    
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import World from '../imports/collections/World';
// @ts-check
export default {
  data() {
    return {
      newName: '',
      selectedWorld: '',
      worlds: [],
      newWorldName: '',
    }
  },
  methods: {
    selectWorld(id) {
      if (id === this.selectedWorld) {
        this.selectedWorld = '';
      } else {
        this.selectedWorld = id;
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

<style>

</style>