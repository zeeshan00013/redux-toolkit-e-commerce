const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");

//files import
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoute.js");
const { middleWare } = require("./middlewares/errorMiddleware.js");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes import
app.use("/api/v1/auth", authRoutes);

//middle ware
app.use(middleWare);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(
    `server is running ${process.env.DEV_MODE} on port ${PORT}`.rainbow
  );
});
