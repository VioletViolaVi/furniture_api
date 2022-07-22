const importedExpressModule = require("express");
const instanceOfExpress = importedExpressModule();
const localHostPort = 3000;
const allFurniture = require("./furnitureData");

// uses get method
instanceOfExpress.get("/", (req, res) => {
  res.send("Welcome to the furniture API!");
});

instanceOfExpress.get("/fullFurnitureArr", (req, res) => {
  res.send(allFurniture);
});

instanceOfExpress.listen(
  localHostPort,
  console.log(`listening on port 3000 ;) ...`)
);
