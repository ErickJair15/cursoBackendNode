const express = require("express");
const app = express();
const port = 3000;
const routerApi = require("./routes");
const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/error.handler");
const cors = require("cors");

//MIDDLEWARE PARA RECIBIR INFORMACION DE TIPO JSON
app.use(express.json());
const whitelist = ["http://localhost:8080"];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido"))
    }
  }
}
app.use(cors(options))

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});


app.listen(port, () => {
  console.log("Mi port is: " + port);
});
