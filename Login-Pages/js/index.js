function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      for (i < x; i++;){
        if (x[i]!="@"){
          document.writeln("wrong format")
        }
      }
      return false;
    }

  }