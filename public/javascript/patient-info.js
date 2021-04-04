function addListeners() {
  var butts = document.getElementsByClassName("btn-patient-info");
  for (var i = 0; i < butts.length; i++) {
    butts[i].addEventListener("click", function () {
      //alert("This is button " + this.value);
      //console.log("/patients?patient_id=" + this.value);
      //window.location.replace("/patients?patient_id=" + this.value);
      console.log("/patients/" + this.value);
      window.location.replace("/patients/" + this.value);
    });
  }
}

addListeners();