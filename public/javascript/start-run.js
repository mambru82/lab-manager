//const sequelize = require("../config/connection");

async function startRunFormHandler(event) {
  tech_id = document.getElementById("tech_name").value.trim();
  assay_id = document.getElementById("assay_name").value.trim();
  console.log(tech_id, assay_id);
  if (tech_id) {
    const response = await fetch("/api/run", {
      method: "POST",
      body: JSON.stringify({
        assay_id,
        tech_id,
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
  var notification = encodeURIComponent("Run initiated!");
  window.location.replace("/start-run?notification=" + notification);
}

async function techChangeValue(event) {
  const tech_id = document.getElementById("tech_name").value.trim();
  const assayName = document.getElementById("assay_name");

  const response = await fetch(`/start-run/${tech_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      for (var i = assayName.options.length-1; i>=0; i--) {
        assayName.options[i] = null;
      }
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        const option = document.createElement("option");
        option.text = `${data[i].id} ${data[i].assay_name} ${data[i].analyte}`;
        option.value = `${data[i].id}`;
        assayName.add(option, i);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

document.querySelector(".start-run-form");
document.addEventListener("submit", startRunFormHandler);

var techName = document.getElementById("tech_name");
techName.addEventListener("change", techChangeValue);
