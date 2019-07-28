import { Mongo } from 'meteor/mongo';
import WorldV1 from '../schemas/WorldV1'

let World = new Mongo.Collection('World');
World.attachSchema(WorldV1, {
  // selector: { version: 'v1' }
});

export default World;