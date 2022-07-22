const importedExpressModule = require("express");
const instanceOfExpress = importedExpressModule();
const localHostPort = 4000;
const furnitureArr = require("./furnitureData");

// uses get method
instanceOfExpress.get("/", (req, res) => {
  res.send("Welcome to the server furniture API!");
});

// get furniture objs
instanceOfExpress.get("/entireFurnitureArr", (req, res) => {
  res.send(furnitureArr);
});

// handles id of furniture
instanceOfExpress.get("/entireFurnitureArr/:id", (req, res) => {
  /*
  console.log(
    "furnitureArr[req.params.id] ===> ",
    furnitureArr[indexNum].furnitureName
  );
  console.log("furnitureArr.length: ", furnitureArr.length); => 9
  console.log("req.params.id: ", req.params.id);
  console.log("indexNum: ", indexNum);  
  */

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

// tells instance of express to listen to json bodies on post requests
// this is middleware needed for post request & to read req.body
instanceOfExpress.use(importedExpressModule.json());

// this is about setting up the response to the POST request made in postman
// create new furniture objs
instanceOfExpress.post("/entireFurnitureArr", (req, res) => {
  // empty obj for new furniture to go in
  const emptyObj = req.body;
  // assigning an key value pair
  emptyObj.id = furnitureArr.length + 1;
  // pushing newly built key value pair into arr
  furnitureArr.push(emptyObj);

  /*
  console.log("req: ", req);
  console.log("req.body: ", req.body);
  console.log("furnitureArr: ", furnitureArr);
  */

  res.send("Post request has been sent");
});

instanceOfExpress.put("/entireFurnitureArr/:id", (req, res) => {
  /*
  console.log("req.params: ", req.params);
  console.log("req.params.id: ", req.params.id);
  console.log(typeof req.params.id);
  */

  // gets string value for id key in obj => {"id":<string>}
  const idOfObj = req.params.id;
  // changes string to number
  const numVerOfId = parseInt(idOfObj) - 1;

  /*
  console.log("req.body: ", req.body);
  console.log("req.body.furnitureName: ", req.body.furnitureName);
  console.log("req.body: ", req.body);  
  */

  furnitureArr[numVerOfId].furnitureName = req.body.furnitureName;
  furnitureArr[numVerOfId].room = req.body.room;

  res.send("Put request has been sent ");
});

instanceOfExpress.listen(
  localHostPort,
  console.log(`listening on port 4000 ;) ...`)
);
