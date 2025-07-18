function submitFinalData() {
  const data = {
    name: sessionStorage.getItem("name"),
    date: sessionStorage.getItem("date"),
    employeeId: sessionStorage.getItem("employeeId"),
    department: sessionStorage.getItem("department"),
    email: sessionStorage.getItem("email"),
    pretestScore: sessionStorage.getItem("pretestScore"),
    posttestScore: sessionStorage.getItem("posttestScore"),
    feedbackData: JSON.parse(sessionStorage.getItem("feedbackData")),
    remarks: sessionStorage.getItem("remarks")
  };

  return fetch("https://script.google.com/macros/s/AKfycbwQrJAq2YAIQQmibJ1PuU0_eI6V_ctgJVL4paIdJZuuV8VaMo8Rry8Y4IxWQMDX6VbG/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `payload=${encodeURIComponent(JSON.stringify(data))}`
  })
  .then(res => res.text())
  .then(result => {
    console.log("Data submitted:", result);
    if (!result.includes("Success")) {
      console.error("Error from server:", result);
      throw new Error(result);
    }
    return true;
  })
  .catch(err => {
    console.error("Submission error:", err);
    alert("Error submitting data. Please try again.");
    throw err;
  });
}
