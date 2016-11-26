import {Packages, Shops} from "/lib/collections";
import {Hooks, Reaction, Logger} from "/server/api";
import {check} from "meteor/check";
import { Catagories } from "../lib/collections";
import { Products } from "/lib/collections";

function modifyCheckoutWorkflow() {
  // Replace checkoutReview with our custom Template
  Logger.info("::: Modifying checkout workflow");
  Packages.update({
    name: "reaction-checkout",
    layout: {
      $elemMatch: {
        template: "checkoutReview"
      }
    }
  }, {
    $set: {
      "layout.$.template": "checkoutReviewCustomShop",
      "layout.$.label": "Review Order"
    }
  });
}

function addRolesToVisitors() {
  // Add the about permission to all default roles since it's available to all
  Logger.info("::: Adding about route permissions to default roles");
  const shop = Shops.findOne(Reaction.getShopId());
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "about" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "about" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "contact" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "contact" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "tag" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "tag" }
  });
}

function changeLayouts(shopId, newLayout) {
  check(shopId, String);
  check(newLayout, String);
  Logger.info(`::: changing all layouts to ${newLayout}`);
  let shop = Shops.findOne(shopId);
  for (let i = 0; i < shop.layout.length; i++) {
    shop.layout[i].layout = newLayout;
  }
  return Shops.update(shopId, {
    $set: {layout: shop.layout}
  });
}

/**
 * Hook to make additional configuration changes
 */
Hooks.Events.add("afterCoreInit", () => {
  modifyCheckoutWorkflow();
  addRolesToVisitors();
  changeLayouts(Reaction.getShopId(), "coreLayoutCustomShop");

  // fixing the customLayoutHeader not being added properly
  let shop = Shops.find().fetch()[0];
  let layouts = shop.layout,
  tempArr = [];
  layouts.forEach(function(e,i){
    if (e.structure) {
      if (e.structure.layoutHeader === "layoutHeader") {
        e.structure.layoutHeader = "layoutHeaderCustomShop";
      }
      if (e.structure.layoutHeader === "checkoutHeader") {
        e.structure.layoutHeader = "layoutHeaderCustomShop";
      }
      if (e.structure.layoutFooter === "layoutFooter" || e.structure.layoutFooter === undefined) {
        e.structure.layoutFooter = "layoutFooterCustomShop";
      }
    }
    tempArr.push(e);
  });
  cursor = Shops.update(shop._id, {
    $set: {layout: tempArr}
  });
  Logger.info("::: Site custom header and footer set");

  // setting up the catagories for menuCatagories
  Meteor.call("emptyCatagories", function(error, result){
    if(error){
      console.log("error", error);
    } else {
      Logger.info("::: Catagories collection emptied");
    }
  });

  let catagories = [],
  products = Products.find({metafields: {$elemMatch: {key:'Catagory'}}}).fetch();

  products.forEach(function(e,i){
    if (e.metafields) {
      e.metafields.forEach(function(e,i){
        if (e.key === "Catagory") {
          catagories.push(e.value);
        }
      });
    }
    // if (e.hashtags) {
    //   e.hashtags.forEach(function(e,i){
    //     metaArrTags.push(e);
    //   });
    // }
  });

  _.uniq(catagories).forEach(function(e,i){
    let catagory = {
      "name": e,
      "slug": e.toLowerCase(),
      "isTopLevel": true
    }
    Catagories.insert(catagory);
  });
  Logger.info("::: Catagories collection for menu built");



});
