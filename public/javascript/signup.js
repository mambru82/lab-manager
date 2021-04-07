async function signupFormHandler(event) {
  event.preventDefault();

  const firstname = document.querySelector("#firstname-signup").value.trim();
  const lastname = document.querySelector("#lastname-signup").value.trim();
  const supervisor = document.querySelector("#supervisor-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const errorPswd = document.getElementById("error");
  errorPswd.innerHTML = "";
  
  if (firstname && lastname && supervisor && username && password ) {
    const response = await fetch("/api/techs", {
      method: "post",
      body: JSON.stringify({
        firstname,
        lastname,
        supervisor,
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      console.log("success");
      document.location.replace("/run-metrics");
    } else if (response.status === 422) {
      // Changing HTML to draw attention
      errorPswd.innerHTML = "<span style='color: red;'>"+
                        "Password must be between 8-32 characters in length</span>"
    }
  }
}

document.querySelector(".signup-form");
document.addEventListener("submit", signupFormHandler);

