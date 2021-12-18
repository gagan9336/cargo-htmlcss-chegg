function validateForm() {
    var x = document.forms["myForm"]["myInput"].value;
    if (x == "") {
      alert("Enter The Track Number!");
      return false;
    }
  }