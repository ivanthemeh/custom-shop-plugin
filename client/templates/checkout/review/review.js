import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

/**
 * review status
 * trigger checkoutPayment step on template checkoutReview render
 */

Template.checkoutReviewCustomShop.onRendered(function () {
  Meteor.call("workflow/pushCartWorkflow", "coreCartWorkflow", "checkoutReview");
});
