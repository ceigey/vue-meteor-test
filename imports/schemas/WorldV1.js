import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  version: {
    type: String,
    allowedValues: ['v1']
  },
  name: {
    type: String,
    optional: false
  },
  regions: {
    type: Array,
    optional: true
  },
  'regions.$': Object,
  'regions.$.name': String,
  'regions.$.desc': String,
  species: {
    type: Array,
    optional: true
  },
  'species.$': Object,
  'species.$.name': String,
  'species.$.desc': String,
  'species.$.lifespan': String,
  languages: {
    type: Array,
    optional: true
  },
  'languages.$': Object,
  'languages.$.name': String,
  'languages.$.desc': String,
  created: Date,
  updated: Date,
});