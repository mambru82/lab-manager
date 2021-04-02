/*
async function newFormHandler(event) {
    event.preventDefault();
    
    console.log(">>> ABOUT TO REQUEST PATIENT LIST");
    
    const response = await fetch(`/api/patient`, {
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

document.querySelector('.btn-show-patients').addEventListener('submit', newFormHandler);
*/
