import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import { options } from "./swagger.js";
import AuthRoute from "./router/authRoute.js";
import QuizRoute from "./router/quizRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

/** import connection file */
import connect from "./database/conn.js";
import path from "path";
import { dirname } from "./utils.js";

const app = express();

app.use(express.static(path.join(dirname, "public")));

/** app middlewares */
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Credentials",
    ],
    credentials: true,
    exposedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Credentials",
    ],
  })
);
app.use(express.json());
config();

/** appliation port */
const port = process.env.PORT || 8080;

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/docs", (req, res) => {
  console.log(path.join(dirname, "public/docs/index.html"));
  return res.render("./docs/index.html");
});

/** routes */
app.use("/api/users", AuthRoute); /** users apis */
app.use("/api", QuizRoute); /** quiz apis */

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

/** start server only when we have valid connection */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection");
  });
