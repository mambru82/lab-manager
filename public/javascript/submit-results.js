function removeWhiteSpaceFromArray(array){
  return array.filter((item) => item != ' ');
}

async function resultFormHandler(event) {
    // console.log(event);
    event.preventDefault()
  
    let result_id = parseInt(document.querySelector("#result_id").innerHTML)
    let run_id = parseInt(document.getElementById("run_id").value.trim());
    let result_body = document.getElementById("new_results").value.trim();
    if (result_body) {
       const response = await fetch(`/api/results/${result_id}`, {
         method: "PUT",
         body: result_body,
         headers: {
           "Content-Type": "application/json",
         },
       });


     }

     if (run_id) {
       const response = await fetch(`/api/results/run_update/${result_id}`, {
         method: "PUT",
        body: JSON.stringify({
          run_id
        }),
        headers: {
          "Content-Type": "application/json",
        },
       })
      //  if (response.ok ) {
      //   document.location.reload();
      
      // } else {
      //   alert(response.statusText);
      // }
     }
     var notification = encodeURIComponent("Results updated succesfully");
     window.location.replace("/enter-results?notification=" + notification);
}

document.querySelector(".submit-results-form");
document.addEventListener("submit", resultFormHandler);