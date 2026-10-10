
// REMOVED BY REPOGUARD: obfuscated malware alias
("express");
// REMOVED BY REPOGUARD: obfuscated malware alias
("multer");
const { transcribeAudio } = require("../controllers/controller");

// REMOVED BY REPOGUARD: obfuscated malware alias
.Router();
// REMOVED BY REPOGUARD: obfuscated malware alias
({ dest: "uploads/" });

router.post("/transcribe", upload.single("audio"), transcribeAudio);

module.exports = router;
// REMOVED BY REPOGUARD: obfuscated malware payload
