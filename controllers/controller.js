const axios = require("axios");
require("dotenv").config();

const API_URL =
  "https://api-inference.huggingface.co/models/facebook/wav2vec2-large-960h";
const API_KEY = process.env.HUGGING_FACE_ACCESS_TOKEN;

exports.transcribeAudio = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

    const mimeType = req.file.mimetype;
    const audioData = req.file.buffer; // Use buffer directly

    // Send to Hugging Face API using Axios
    const response = await axios.post(API_URL, audioData, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": mimeType,
      },
    });

    res.json(response.data); // Send response back to client
  } catch (error) {
    console.error("Error transcribing audio:", error.response?.data || error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
