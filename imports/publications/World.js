import { Meteor } from 'meteor/meteor';
import World from '../collections/World';

Meteor.publish('World', function () {
  return World.find({});
});