function requires(text) {
    if (text == "") {
        return false;
    }
    else {
        return true;
    }
}
function validateName() {
    var name = document.getElementById('newName').value;
    var validname = /^[a-zA-Z\s]{4,256}$/;
    if (requires(name)) {
        if (name.match(validname)) {
            document.getElementById('nameError').innerHTML = "&nbsp;";
            return true;
        }
        else {
            document.getElementById('nameError').innerHTML = "Enter valid Name";
            return false;
        }
    }
    else {
        document.getElementById('nameError').innerHTML = "Name is required";
        return false;
    }
}
function validateEmail() {
    var email = document.getElementById("newEmail").value;
    var mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{2,}$/;
    if (requires(email)) {
        if (email.match(mail)) {
            document.getElementById('emailError').innerHTML = "&nbsp;";
            return true;
        }
        else {
            document.getElementById('emailError').innerHTML = "Enter valid Email";
            return false;
        }
    }
    else {
        document.getElementById("emailError").innerHTML = "Please enter Email";
        return false;
    }
}
function validateMobile() {
    var mobile = document.getElementById('newMobile').value;
    var valid = /^[\+]+[0-9]{2,3}[\s]?[0-9]{3}[\s]?[0-9]{5,7}$/;
    if (requires(mobile)) {
        if (mobile.match(valid)) {
            document.getElementById('mobileError').innerHTML = "&nbsp;";
            return true;
        }
        else {
            document.getElementById('mobileError').innerHTML = "Enter valid Mobile Number";
            return false;
        }
    }
    else {
        document.getElementById('mobileError').innerHTML = "Mobile Number is required";
        return false;
    }
}
function validateLandline() {
    var landline = document.getElementById('newLandline').value;
    var valid = /^[0][0-9]{2,3}[\s]?[0-9]{3,4}[\s]?[0-9]{4}$/;
    if (requires(landline)) {
        if (landline.match(valid)) {
            document.getElementById('landlineError').innerHTML = "&nbsp;";
            return true;
        }
        else {
            document.getElementById('landlineError').innerHTML = "Enter valid Telephone Number";
            return false;
        }
    }
    else {
        document.getElementById('landlineError').innerHTML = "Telephone Number is required";
        return false;
    }
}
function validateWebsite() {
    var website = document.getElementById('newWebsite').value;
    var valid = /^([https|http]:)?\/?\/?(www.)+[a-zA-Z0-9#!:?+=&%!.\-\/]+\.([a-zA-Z]+){2,}$/;
    if (requires(website)) {
        if (website.match(valid)) {
            document.getElementById('websiteError').innerHTML = "&nbsp;";
            return true;
        }
        else {
            document.getElementById('websiteError').innerHTML = "Enter valid Website";
            return false;
        }
    }
    else {
        document.getElementById('websiteError').innerHTML = "Website is required";
        return false;
    }
}
function validateAddress() {
    var address = document.getElementById('newAddress').value;
    if (requires(address)) {
        document.getElementById('addressError').innerHTML = "&nbsp;";
        return true;
    }
    else {
        document.getElementById('addressError').innerHTML = "Address is required";
        return false;
    }
}
function validateForm() {
    var name = validateName();
    var email = validateEmail();
    var mobile = validateMobile();
    var landline = validateLandline();
    var website = validateWebsite();
    var address = validateAddress();
    return (name && email && mobile && landline && website && address);
}
