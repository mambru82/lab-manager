async function accessionFormHandler(event) {
    console.log(event);
    
    patient_id = document.getElementById("patient").value.trim();
    seq_name = document.querySelector("#seq_name").value.trim();
     if (seq_name) {
       const response = await fetch("/api/results", {
         method: "POST",
         body: JSON.stringify({
           patient_id,
           seq_name,
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
     var notification = encodeURIComponent("Accession Case created succesfully");
     window.location.replace("/accession-case?notification=" + notification);
}

document.querySelector(".accession-form");
document.addEventListener("submit", accessionFormHandler);
