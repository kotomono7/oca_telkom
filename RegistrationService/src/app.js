const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

// routes
const mainRoutes = require("./routes/main.route");
const itemRoutes = require("./routes/items.route");
const reportRoutes = require("./routes/reports.route");
const parkingRoutes = require("./routes/parkings.route");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/", mainRoutes);
app.use("/items", itemRoutes);
app.use("/report", reportRoutes);
app.use("/parking", parkingRoutes);

app.listen(port, () => {
    console.log(`Server started at -> http://localhost:${port}`);
});

module.exports = app;