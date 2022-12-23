const express = require('express');
const { getFamilies, createFamily, updateFamily, deleteFamily, getFamily, familyAssets } = require("../controllers/familyController.js");

const router = express.Router();

//get all
router.get("/", getFamilies);

//get family assets
router.get("/assets", familyAssets);

//create
router.post("/",  createFamily);

//update
router.put("/:id", updateFamily);

//delete
router.delete("/:id", deleteFamily);

// get one
router.get("/:id", getFamily);

module.exports = router