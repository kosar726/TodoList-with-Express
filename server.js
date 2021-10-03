const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
require("./utils/database");
const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRouter = require("./routes/index");
const errorConterller = require("./controllers/error")

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
//End of middleware

//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS


//Statics
setStatics(app);

//Routes
app.use(indexRouter);
app.use("/admin", adminRoutes);

//End of routes
app.use(errorConterller.error);

app.listen(3000, () => console.log(`Server is running.`));