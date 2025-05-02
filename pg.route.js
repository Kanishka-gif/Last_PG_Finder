const express = require('express');
const { addPG , getAllPGs, uploadimage} = require('../../controllers/auth/pgControllers');
const router = express.Router();



// Add PG
router.post("/add", addPG);
router.get("/", getAllPGs);
router.post("/upload", uploadimage )



// Handle file upload

  

module.exports = router;


