function validateForm() {
    let places = document.myForm.place.value;
    let rooms = document.myForm.room.value;
    let guests = document.myForm.guest.value;
    let dateinc =document.myForm.datein.value;
    let dateoutc =document.myForm.dateout.value;
    let errors = [];

    if ( places === "" ) {
        errors.push("Place name is error");
        document.getElementById("place").style.border="2px solid red";
    }
    else{
        document.getElementById("place").style.border="2px solid green";
    }

    if ( dateinc === ""  ) {
        errors.push("Check-in date is error");
        document.getElementById("datein").style.border="2px solid red";
    }
    else{
        document.getElementById("datein").style.border="2px solid green";
    }

    if ( dateoutc === ""  ) {
        errors.push("Check-out date is error");
        document.getElementById("dateout").style.border="2px solid red";
    }
    else{
        document.getElementById("dateout").style.border="2px solid green";
    }

    if (isNaN(rooms) || rooms === "" || rooms <= 0 ) {
        errors.push("Number of room is error");
        document.getElementById("room").style.border="2px solid red";
    }
    else{
        document.getElementById("room").style.border="2px solid green";
    }

    if (isNaN(guests) || guests === "" || guests < 0 ) {
        errors.push("Number of guest is error");
        document.getElementById("guest").style.border="2px solid red";
    }
    else{
        document.getElementById("guest").style.border="2px solid green";
    }

  
    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }
    else{
        alert("Successfully registed!!!")
    }

    return true;
}

function reportErrors(errors) {
    let errorOut = "ERROR:\n";
    for (let i = 0; i < errors.length; i++) {
        errorOut += errors[i] + "\n";
    }
    alert(errorOut);
}