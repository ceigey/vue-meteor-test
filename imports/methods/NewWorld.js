import { Meteor } from 'meteor/meteor';
import World from '../collections/World';

Meteor.methods({
  newWorld({ name }) {
    return World.insert({
      name,
      version: 'v1',
      created: new Date(),
      updated: new Date(),
    });
  }
});