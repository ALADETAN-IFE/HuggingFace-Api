const express = require("express");
const multer = require("multer");
const { transcribeAudio } = require("../controllers/controller");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/transcribe", upload.single("audio"), transcribeAudio);

module.exports = router;
