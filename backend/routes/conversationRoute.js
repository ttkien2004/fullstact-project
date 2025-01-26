const express = require("express");
const { requireAuth } = require("../middleware/requireAuth");
const { getConverse } = require("../controllers/converseController");

const router = express.Router();

router.use(requireAuth);

router.get("/getConverses", getConverse);

module.exports = router;
