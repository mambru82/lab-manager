

async function loginFormHandler(event) {
  event.preventDefault();

  //>>> =====================================
  //>>> DELETE- ONLY FOR TESTING
  // document.location.replace("/run-metrics");
  // return;
  //>>> =====================================

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/techs/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/run-metrics");
    } else {
      if (response.status === 400) {
        // console.log(response)
        var error = document.getElementById("error-password")
        // Changing HTML to draw attention
        error.innerHTML = "<span style='color: red;'>"+
                          "Incorrect password. Please try again!</span>"
      }

      if (response.status === 401) {
        // console.log(response)
        var error = document.getElementById("error-username")
        // Changing HTML to draw attention
        error.innerHTML = "<span style='color: red;'>"+
                          "Incorrect username. Please try again!</span>"
      }
    }
  }
}


document.querySelector(".login-form");
document.addEventListener("submit", loginFormHandler);