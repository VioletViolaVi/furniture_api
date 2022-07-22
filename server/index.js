const importedExpressModule = require("express");
const instanceOfExpress = importedExpressModule();
const localHostPort = 4000;
const furnitureArr = require("./furnitureData");

// uses get method
instanceOfExpress.get("/", (req, res) => {
  res.send("Welcome to the server furniture API!");
});

instanceOfExpress.get("/fullFurnitureArr", (req, res) => {
  res.send(furnitureArr);
});

// handles id of furniture
instanceOfExpress.get("/fullFurnitureArr/:id", (req, res) => {
  //   console.log(
  //     "furnitureArr[req.params.id] ===> ",
  //     furnitureArr[indexNum].furnitureName
  //   );
  //   console.log("furnitureArr.length: ", furnitureArr.length); => 9
  //   console.log("req.params.id: ", req.params.id);
  //   console.log("indexNum: ", indexNum);

  // holds num from req.params:{id:<num>}
  const idFromParams = req.params.id;

  // num for indexing arr
  const indexNum = idFromParams - 1;

  // disallows zero in path
  if (indexNum === -1) {
    res.send("Out of range. Please choose between 1 and 9");
    return;
  }

  // only allows length of
  if (indexNum < furnitureArr.length) {
    res.send(furnitureArr[indexNum]);
    return;
  } else {
    res.send("Out of range. Please choose between 1 and 9");
    return;
  }
});

// gets only kitchen furniture
instanceOfExpress.get("/kitchenItems", (req, res) => {
  let kitchenFurniture = [];

  furnitureArr.forEach((singleFurnitureObj) => {
    if (singleFurnitureObj.room === "kitchen".toLowerCase()) {
      kitchenFurniture.push(singleFurnitureObj);
    }
  });

  res.send(kitchenFurniture);
});

// gets only bedroom furniture
instanceOfExpress.get("/bedroomItems", (req, res) => {
  let bedroomFurniture = [];

  furnitureArr.forEach((singleFurnitureObj) => {
    if (singleFurnitureObj.room === "bedroom".toLowerCase()) {
      bedroomFurniture.push(singleFurnitureObj);
    }
  });

  res.send(bedroomFurniture);
});

// gets only bathroom furniture
instanceOfExpress.get("/bathroomItems", (req, res) => {
  let bathroomFurniture = [];

  furnitureArr.forEach((singleFurnitureObj) => {
    if (singleFurnitureObj.room === "bathroom".toLowerCase()) {
      bathroomFurniture.push(singleFurnitureObj);
    }
  });

  res.send(bathroomFurniture);
});

instanceOfExpress.listen(
  localHostPort,
  console.log(`listening on port 4000 ;) ...`)
);
