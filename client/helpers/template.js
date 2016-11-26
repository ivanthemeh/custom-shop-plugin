Handlebars.registerHelper('limit', function (arr, limit) {
  var groups = [], i;

  for (i = 0; i < arr.fetch().length; i += limit) {
      groups.push(arr.fetch().slice(i, i + limit));
  }

  return groups;
});

Handlebars.registerHelper("addActive", function(index){
  return index === 0 ? "active" : "";
});

Handlebars.registerHelper("indexPlusOne", function(index){
  return index + 1;
});

Handlebars.registerHelper("isActiveRoute", function(route){
  return ReactionRouter.getRouteName() === route ? "active" : "";
});
