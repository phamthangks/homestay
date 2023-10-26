function validateForm() {
    let names = document.myForm.myName.value;
    let emails = document.myForm.myEmail.value;
    let rooms = document.myForm.myRoom.value;
    let phones =document.myForm.myPhone.value;
    let mess = document.myForm.myMess.value;
    let phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/;
    let errors = [];
    
    if ( names === "" ) {
        errors.push("Name is error");
        document.getElementById("myName").style.border="2px solid red";
    }
    else{
        document.getElementById("myName").style.border="2px solid green";
    }

    if ( emails === ""  ) {
        errors.push("Email is error");
        document.getElementById("myEmail").style.border="2px solid red";
    }
    else{
        document.getElementById("myEmail").style.border="2px solid green";
    }

    if ( isNaN(rooms) || rooms === "" || rooms <= 0 ) {
        errors.push("Room number is error");
        document.getElementById("myRoom").style.border="2px solid red";
    } 
    else{
        document.getElementById("myRoom").style.border="2px solid green";
    }
    
    if ( phones === "" || !phoneRegex.test(phones) ) {
        errors.push("Phone number is error");
        document.getElementById("myPhone").style.border="2px solid red";
    }
    else{
        document.getElementById("myPhone").style.border="2px solid green";
    }

    if ( mess === "" ) {
        errors.push("Message is error");
        document.getElementById("myMess").style.border="2px solid red";
    }
    else{
        document.getElementById("myMess").style.border="2px solid green";
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