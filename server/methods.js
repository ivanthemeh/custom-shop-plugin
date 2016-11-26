import { Catagories } from '../lib/collections';

Meteor.methods({
  "emptyCatagories"() {
    Catagories.remove({});
    return true;
  }
});
