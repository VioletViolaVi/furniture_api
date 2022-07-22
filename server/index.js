const importedExpressModule = require("express");
const instanceOfExpress = importedExpressModule();
const localHostPort = 3000;
const allFurniture = require("./furnitureData");

// uses get method
instanceOfExpress.get("/", (req, res) => {
  res.send("Welcome to the server furniture API!");
});

instanceOfExpress.get("/fullFurnitureArr", (req, res) => {
  res.send(allFurniture);
});

// gets only kitchen furniture
instanceOfExpress.get("/kitchenItems", (req, res) => {
  let kitchenFurniture = [];

  allFurniture.forEach((singleFurnitureObj) => {
    if (singleFurnitureObj.room === "kitchen".toLowerCase()) {
      kitchenFurniture.push(singleFurnitureObj);
    }
  });

  res.send(kitchenFurniture);
});

// gets only bedroom furniture
instanceOfExpress.get("/bedroomItems", (req, res) => {
  let bedroomFurniture = [];

  allFurniture.forEach((singleFurnitureObj) => {
    if (singleFurnitureObj.room === "bedroom".toLowerCase()) {
      bedroomFurniture.push(singleFurnitureObj);
    }
  });

  res.send(bedroomFurniture);
});

// gets only bathroom furniture
instanceOfExpress.get("/bathroomItems", (req, res) => {
  let bathroomFurniture = [];

  allFurniture.forEach((singleFurnitureObj) => {
    if (singleFurnitureObj.room === "bathroom".toLowerCase()) {
      bathroomFurniture.push(singleFurnitureObj);
    }
  });

  res.send(bathroomFurniture);
});

instanceOfExpress.listen(
  localHostPort,
  console.log(`listening on port 3000 ;) ...`)
);
