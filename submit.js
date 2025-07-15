const employeeData = JSON.parse(sessionStorage.getItem("employeeData"));
const pretestScore = sessionStorage.getItem("pretestScore");
const posttestScore = sessionStorage.getItem("posttestScore");
const remarks = sessionStorage.getItem("remarks") || "";

// Combine all data into one object
const data = {
  ...employeeData,
  pretestScore,
  posttestScore,
  remarks
};

// Convert to FormData for CORS-safe POST
const form = new FormData();
form.append("payload", JSON.stringify(data));

// Send to Google Apps Script Web App
fetch("https://script.google.com/macros/s/AKfycbx4VMPtV9cDx7NCe_Y-DgIjCWIuBptS5mxPPlC0yyQWxMMXmq2ABLg8C8b4Ks-fZ1ACjQ/exec", {
  method: "POST",
  body: form
})
.then(res => res.text())
.then(response => {
  console.log("✅ Server said:", response);
})
.catch(error => {
  console.error("❌ Error sending data:", error);
});
