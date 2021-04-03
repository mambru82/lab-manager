function addListeners() {
  var butts = document.getElementsByClassName("btn-patient-info");
  console.log("========");
  console.log(butts[0]);
  console.log(butts[1].value);
  console.log(butts.length);
  for (var i = 0; i < butts.length; i++) {
    console.log(butts[i]);
    butts[i].addEventListener("click", function () {
      alert("This is button "+this.id);
    });
  }
}

addListeners();