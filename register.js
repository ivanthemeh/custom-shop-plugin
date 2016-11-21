import { Reaction } from "/server/api";

// Register package as ReactionCommerce package
Reaction.registerPackage({
  label: "Bees Knees",
  name: "beesknees",
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
      layout: "coreLayoutBeesknees",
      workflow: "coreWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "productsLanding",
        layoutHeader: "customLayoutHeader",
        layoutFooter: "layoutFooter",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "dashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    },
    {
      layout: "coreLayoutBeesknees",
      workflow: "coreProductWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "customProductDetail",
        layoutHeader: "customLayoutHeader",
        layoutFooter: "",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "productDetailDashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    },
    {
      layout: "coreLayoutBeesknees",
      workflow: "coreProductWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "customProductDetailSimple",
        layoutHeader: "customLayoutHeader",
        layoutFooter: "",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "productDetailDashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    }
  ]
});
