

async function loginFormHandler(event) {
  event.preventDefault();

  //>>> =====================================
  //>>> DELETE- ONLY FOR TESTING
  // document.location.replace("/tech-main");
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
      document.location.replace("/tech-main");
    } else {
      alert(response.statusText);
    }
  }
}


document.querySelector(".login-form");
document.addEventListener("submit", loginFormHandler);