async function resultFormHandler(event) {
    // console.log(event);
    event.preventDefault()
  
    let result_id = parseInt(document.querySelector("#result_id").innerHTML)
    let runId = parseInt(document.getElementById("run_id").value.trim());
    console.log(run_id);
    let result_body = document.getElementById("new_results").value.trim();
    console.log(result_id);
    console.log(result_body);
    let submitObj = {
      run_id = runId,
      result_body
    }
     if (result_body) {
       const response = await fetch(`/api/results/${result_id}`, {
         method: "PUT",
         body: submitObj,
         headers: {
           "Content-Type": "application/json",
         },
       });

  
       if (response.ok ) {
         document.location.reload();
       
       } else {
         alert(response.statusText);
       }
     }
     var notification = encodeURIComponent("Results updated succesfully");
     window.location.replace("/enter-results?notification=" + notification);
}

document.querySelector(".submit-results-form");
document.addEventListener("submit", resultFormHandler);