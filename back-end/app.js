var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require("cors");
app.use(cors());

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const causeRouter = require("./routes/causes");

mongoose
  .connect("mongodb://localhost/fund4good", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB database connection established successfully!`);
  })
  .catch((err) => console.error("Could not connect to database!", err));
const db = mongoose.connection;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/cause", causeRouter);

module.exports = app;
