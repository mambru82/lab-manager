async function signupFormHandler(event) {
  event.preventDefault();

  const firstname = document.querySelector("#firstname-signup").value.trim();
  const lastname = document.querySelector("#lastname-signup").value.trim();
  const supervisor = document.querySelector("#supervisor-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (firstname && lastname && supervisor && username && password ) {
    const response = await fetch("/api/techs", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form");
document.addEventListener("submit", signupFormHandler);

