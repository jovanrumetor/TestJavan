const express = require('express');
const { getAssets, createAsset, updateAsset, deleteAsset, getAsset } = require("../controllers/assetController.js");

const router = express.Router();

//get all
router.get("/", getAssets);

//create
router.post("/:id",  createAsset);

//update
router.put("/:id", updateAsset);

//delete
router.delete("/:id", deleteAsset);

// get one
router.get("/:id", getAsset);

module.exports = router