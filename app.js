const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  const resultantDate = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${resultantDate.getDate()}/${
      resultantDate.getMonth() + 1
    }/${resultantDate.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
