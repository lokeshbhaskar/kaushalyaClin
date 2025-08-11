import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

 

app.post("/send-appointment", async (req, res) => {
  const { name, address, date } = req.body;

  if (!name || !address || !date) {
    return res.status(400).json({ error: "Missing fields" });
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
      return res.status(500).json({ error: "Telegram API error", details: data });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
