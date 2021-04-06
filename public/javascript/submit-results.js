async function resultFormHandler(event) {
    // console.log(event);
    
    result_body = document.querySelector("#new_results").value.trim();
    console.log(result_body);
    //  if (result_body) {
    //    const response = await fetch(`/api/results/${id}`, {
    //      method: "PUT",
    //      body: JSON.stringify({
    //        result_body
    //      }),
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //    });

    //    if (response.ok) {
    //      document.location.reload();
    //    } else {
    //      alert(response.statusText);
    //    }
    //  }
    //  var notification = encodeURIComponent("Results updated succesfully");
    //  window.location.replace("/enter-results?notification=" + notification);
}

document.querySelector(".submit-results-form");
document.addEventListener("submit", resultFormHandler);