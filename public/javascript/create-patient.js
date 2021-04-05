async function createPatientFormHandler(event) {
  first_name = document.getElementById("first_name").value.trim();
  last_name = document.getElementById("last_name").value.trim();
  dob = document.getElementById("dob").value.trim();
  if (first_name && last_name && dob) {
    const response = await fetch("/api/patient", {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        dob,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  var notification = encodeURIComponent("New patient created succesfully");
  window.location.replace("/create-patient?notification=" + notification);
}

document.querySelector(".create-patient-form");
document.addEventListener("submit", createPatientFormHandler);
