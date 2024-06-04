require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/notFound");

const authRoute = require("./routers/auth-route");

const cre = `░█▀▀░█▀▄░█▀▀░█▀█░▀█▀░█▀▀░█▀▄░░░█▀▄░█░█
░█░░░█▀▄░█▀▀░█▀█░░█░░█▀▀░█░█░░░█▀▄░░█░
░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀░░░░▀▀░░░▀░`;
const str = `░█▀▀░▀█▀░█▀▄░█▀▀░█▀█░█▄█░▀█▀░█░░░█░█
░▀▀█░░█░░█▀▄░█▀▀░█▀█░█░█░░█░░█░░░░█░
░▀▀▀░▀▀▀░▀░▀░▀░░░▀░▀░▀░▀░▀▀▀░▀▀▀░░▀░`;
const line = `░▀▄░░▀▄░░▀▄░░▀▄░░▀▄░░░▄▀░░▄▀░░▄▀░░▄▀░░▄▀
░░▄▀░░▄▀░░▄▀░░▄▀░░▄▀░▀▄░░▀▄░░▀▄░░▀▄░░▀▄░
░▀░░░▀░░░▀░░░▀░░░▀░░░░░▀░░░▀░░░▀░░░▀░░░▀`;

app.use(cors());
app.use(express.json());


app.use("/auth", authRoute);
app.use("*", notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(line);
  console.log(cre);
  console.log(str);
  console.log(line);
  console.log("----------------------------------------");
  console.log("  Server Run On" + " http://localhost:" + port);
  console.log("----------------------------------------");
});
