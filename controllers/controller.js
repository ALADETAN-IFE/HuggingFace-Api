const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config()

const API_URL =
  "https://api-inference.huggingface.co/models/facebook/wav2vec2-large-960h";
const API_KEY = process.env.HUGGING_FACE_ACCESS_TOKEN;

exports.transcribeAudio = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

     // Extract the correct MIME type (e.g., audio/mpeg, audio/mp3, etc.)
     const mimeType = req.file.mimetype;

     // Read the uploaded audio file
     const audioData = fs.readFileSync(req.file.path);
 
     // Send to Hugging Face API
     const response = await fetch(API_URL, {
       method: "POST",
       headers: {
         Authorization: `Bearer ${API_KEY}`,
         "Content-Type": mimeType, // Use detected MIME type
       },
       body: audioData,
     });

    const result = await response.json();

    // Return result to client
    res.json(result);
  } catch (error) {
    console.error("Error transcribing audio:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
