const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const mapController = require("../controllers/map.controller");
const { query } = require("express-validator");

router.get(
  "/get-coordinates",
  authMiddleware.authUser,
  query("address").isString().isLength({ min: 3 }),
  mapController.getCordinates
);

module.exports = router;
