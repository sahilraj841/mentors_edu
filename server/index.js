const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { google } = require("googleapis");
const axios = require("axios"); // For making API requests
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

const transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS
  }
});
app.post("/send-email", async(req,res)=>{
  const{email, formData}=req.body;
  const mailOptions={
    from:email,
    to:"sahilraj841@gmail.com",
    subject:"New Consultant Application",
    html: `
      <h2>New Consultant Application</h2>
      <p><strong>Member Type:</strong> ${formData.memberType}</p>
      <p><strong>Applicant Name:</strong> ${formData.applicantName}</p>
      <p><strong>WhatsApp Number:</strong> ${formData.whatsappNumber}</p>
      <p><strong>Other Number:</strong> ${formData.otherNumber}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Experience Details:</strong> ${formData.experienceDetails}</p>
      <p><strong>City:</strong> ${formData.city}</p>
      <p><strong>State:</strong> ${formData.state}</p>
      <p><strong>Pincode:</strong> ${formData.pincode}</p>
      <p><strong>Aadhar Card:</strong> ${formData.adharCard}</p>
      <p><strong>PAN Card:</strong> ${formData.panCard}</p>
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
})

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
  const { name, email, phone,  course, class: studentClass, school } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "❌ Name, email, and phone are required!" });
  }

  try {
    // ✅ Step 1: Save to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "RAW",
      resource: { values: [[name, email, phone,  course, studentClass, school]] },
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
