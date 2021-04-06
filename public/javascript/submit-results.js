async function resultFormHandler(event) {
    console.log(event);
    
    result_body = document.getElementById("patient").value.trim();
     if (seq_name) {
       const response = await fetch(`/api/results/${id}`, {
         method: "PUT",
         body: JSON.stringify({
           result_body
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
     var notification = encodeURIComponent("Results updated succesfully");
     window.location.replace("/enter-results?notification=" + notification);
}

document.querySelector(".accession-form");
document.addEventListener("submit", accessionFormHandler);