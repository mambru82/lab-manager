function addPatientsListeners() {
    var buttons = document.getElementsByClassName("btn-patient-info");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        //alert("This is button " + this.value);
        //console.log("/patients?patient_id=" + this.value);
        //window.location.replace("/patients?patient_id=" + this.value);
        window.location.replace("/patients/" + this.value);
      });
    }
  }
  
  addPatientsListeners();