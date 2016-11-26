import { Mongo } from "meteor/mongo";
import * as Schemas from "./schemas/schemas";

/**
* Catagories Collection
*/
export const Catagories = new Mongo.Collection("Catagories");

Catagories.attachSchema(Schemas.Catagory);
