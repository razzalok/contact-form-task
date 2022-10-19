require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// routes
const userRoutes = require("./routes/user");
const contactRouter = require("./routes/contactRoutes");

// cors
var cors = require("cors");

// express app
const app = express();

// middleware
var cors = require("cors");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/user/", userRoutes);
app.use("/api/contact/", contactRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("connected to db & listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
