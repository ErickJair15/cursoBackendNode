const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hola soy un usuario");
});

module.exports = router;
