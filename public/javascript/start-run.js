async function startRunFormHandler(event) {   
    tech_id = document.getElementById("tech_name").value.trim();
    assay_id = document.getElementById("assay_name").value.trim();
    console.log(tech_id, assay_id)
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

document.querySelector(".start-run-form");
document.addEventListener("submit", startRunFormHandler);