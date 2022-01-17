import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  info: {
    title: "REST API for my App", // Title of the documentation
    version: "1.0.0", // Version of the app
    description: "This is the REST API for my product", // short description of the app
  },
  host: "https://localhost:3000", // the host or url of the app
  basePath: "/api/v1", // the basepath of your endpoint
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  explorer: true,

  // path to the API docs
  apis: ["**/routes.js"],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

const documentationMiddleware = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default documentationMiddleware;
