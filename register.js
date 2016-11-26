import { Reaction } from "/server/api";

// Register package as ReactionCommerce package
Reaction.registerPackage({
  label: "meemtees",
  name: "meemtees",
  icon: "fa fa-vine",
  autoEnable: true,
  registry: [
    {
      route: "/about",
      name: "about",
      template: "aboutUs",
      workflow: "coreWorkflow"
    },
    {
      route: "/contact",
      name: "contact",
      template: "contactUs",
      workflow: "coreWorkflow"
    }
  ],
  layout: [
    {
      layout: "coreLayoutCustomShop",
      workflow: "coreWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "productsLanding",
        layoutHeader: "layoutHeaderCustomShop",
        layoutFooter: "layoutFooterCustomShop",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "dashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    },
    {
      layout: "coreLayoutCustomShop",
      workflow: "coreProductWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "customProductDetail",
        layoutHeader: "layoutHeaderCustomShop",
        layoutFooter: "layoutFooterCustomShop",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "productDetailDashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    },
    {
      layout: "coreLayoutCustomShop",
      workflow: "coreProductWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "customProductDetailSimple",
        layoutHeader: "layoutHeaderCustomShop",
        layoutFooter: "layoutFooterCustomShop",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "productDetailDashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    }
  ]
});
