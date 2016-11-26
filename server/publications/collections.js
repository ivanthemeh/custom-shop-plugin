import { Catagories } from "../../lib/collections";

Meteor.publish('Catagories', function () {
  return Catagories.find();
});
