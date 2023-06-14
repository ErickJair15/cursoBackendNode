const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send("categorias")
})

module.exports = router;
