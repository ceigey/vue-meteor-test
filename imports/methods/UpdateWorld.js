import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import World from '../collections/World';

export let renameWorld = new ValidatedMethod({
  name: 'renameWorld',
  validate: new SimpleSchema({
    id: String,
    name: String
  }).validator(),
  run({ id, name }) {
    World.update(id, { $set: {
      name,
      updated: new Date() 
    }});
    return true;
  }
});