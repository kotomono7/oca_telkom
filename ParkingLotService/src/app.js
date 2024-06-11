const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

// routes
const mainRoutes = require("./routes/main.route");
const parkingLotRoutes = require("./routes/parking-lots.route");

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use("/", mainRoutes);
app.use("/lots", parkingLotRoutes);

app.listen(port, () => {
    console.log(`Server started at -> http://localhost:${port}`);
});

module.exports = app;