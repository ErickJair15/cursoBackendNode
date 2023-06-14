const express = require("express");
const router = express.Router();
const faker = require("@faker-js/faker");

router.get('/', (req, res) => {
  res.send("Hola soy un usuario");
});

module.exports = router;
