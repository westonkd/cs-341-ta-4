const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Temples API",
    description: "An API for temples",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger/swagger-output.json";
const endpointsFiles = ["./index.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
