const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { google } = require("googleapis");
const axios = require("axios"); // For making API requests
require("dotenv").config();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// ✅ Google Sheets Configuration
const CREDENTIALS_PATH = path.join(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS);
const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_PATH,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = "18tGQd8uX6RUrlrKO4ShQxZNwvTzLTNvbRMH51EicB8Q";


const CRM_API_URL = "https://register.cronberry.com/api/campaign/register-audience-data";
const PROJECT_KEY = process.env.PROJECT_KEY;

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// ✅ Form Submission Route
app.post("/submit-form", async (req, res) => {
  const { name, email, phone, school, course, class: studentClass } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "❌ Name, email, and phone are required!" });
  }

  try {
    // ✅ Step 1: Save to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "RAW",
      resource: { values: [[name, email, phone, school, course, studentClass]] },
    });

    console.log("✅ Form data saved to Google Sheets!");

    
    const crmData = {
      projectKey: PROJECT_KEY,
      
      audienceId: "_id(number)",
      name: name || "",
      email: email || "",
      mobile: phone || "",
      paramList: [
        { paramKey: "school_name", paramValue: school || "" },
        { paramKey: "course", paramValue: course || "" },
        { paramKey: "current_class", paramValue: studentClass || "" },
      ],
    };

    const crmResponse = await axios.post(CRM_API_URL, crmData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("✅ Data sent to Cronberry CRM:", crmResponse.data);

    res.status(200).json({ message: "✅ Data saved successfully to Google Sheets & CRM!" });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ message: "❌ Failed to save form data.", error: error.message });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
