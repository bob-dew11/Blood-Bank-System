const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/config");
const path = require("path");

//config
dotenv.config();

//connection
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/inventory", require("./routes/inventoryRoute"));
app.use("/api/v1/analytics", require("./routes/analyticsRoute"));
app.use("/api/v1/admin", require("./routes/adminRoute"));

//Static Folder
app.use(express.static(path.join(__dirname, "./client/build")));

//Statics Route
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} on PORT ${process.env.PORT}`
      .bgCyan.white
  );
});
