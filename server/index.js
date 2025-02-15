const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { google } = require("googleapis");
require ("dotenv").config();
const app = express();
const PORT = 5001;

 
// Middleware check
app.use(cors());
app.use(bodyParser.json());

const CREDENTIALS_PATH = path.join(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS);

const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_PATH,
  scopes: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"],
});

// Google Sheets API client check
const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = "18tGQd8uX6RUrlrKO4ShQxZNwvTzLTNvbRMH51EicB8Q";

// Add a simple GET route for testing
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// Existing POST route for form submission
app.post("/submit-form", async (req, res) => {
    console.log("Received:",req.body);
  const formData = req.body;

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "RAW",
      resource: {
        values: [[formData.name, formData.email, formData.phone, formData.course, formData.class, formData.school]],
      },
    });

    res.status(200).json({ message: "✅ Form data saved successfully!" });
  } catch (error) {
    console.error("❌ Error updating sheet file:", error);
    res.status(500).json({ message: "❌ Failed to save form data." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
