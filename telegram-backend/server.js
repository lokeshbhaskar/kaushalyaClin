import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // If using Node 18+, you can omit this and use global fetch

const app = express();
app.use(cors());
app.use(express.json());
import dotenv from 'dotenv';
dotenv.config();


// Load your bot token and chat ID from environment variables
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Endpoint to receive appointment data and send Telegram message
app.post("/send-appointment", async (req, res) => {
  const { name, address, date } = req.body;

  if (!name || !address || !date) {
    return res
      .status(400)
      .json({ error: "Missing fields: name, address and date are required." });
  }

  const message = `
📅 *New Appointment Booked!*
👤 Name: ${name}
🏠 Address: ${address}
📆 Date: ${new Date(date).toDateString()}
`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      return res
        .status(500)
        .json({ error: "Telegram API error", details: data });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
