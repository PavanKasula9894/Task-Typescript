
function requires(text : string){
    if(text==""){
        return false;
    }
    else{
        return true;
    }
} 

function validateName(){
    let name = (document.getElementById('newName') as HTMLInputElement).value;
    const validname =/^[a-zA-Z\s]{4,256}$/;
    if(requires(name)){
        if(name.match(validname)){
            (document.getElementById('nameError') as HTMLElement).innerHTML="&nbsp;";
            return true;
        }
        else{
            (document.getElementById('nameError') as HTMLElement).innerHTML="Enter valid Name";
            return false;
        }
    }
    else{
        (document.getElementById('nameError') as HTMLElement).innerHTML="Name is required";
        return false;
    }
}
function validateEmail(){
    let email = (document.getElementById("newEmail") as HTMLInputElement).value;
    const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{2,}$/;
    if(requires(email)){
        if(email.match(mail)){
            (document.getElementById('emailError') as HTMLElement).innerHTML="&nbsp;";
            return true;
        }
        else{
            (document.getElementById('emailError') as HTMLElement).innerHTML="Enter valid Email";
            return false;
        }
    }
    else{
        (document.getElementById("emailError") as HTMLElement).innerHTML = "Please enter Email";
        return false;
    }
}
function validateMobile(){
    let mobile = (document.getElementById('newMobile') as HTMLInputElement).value;
    const valid =/^[\+]+[0-9]{2,3}[\s]?[0-9]{3}[\s]?[0-9]{5,7}$/;
    if(requires(mobile)){
        if(mobile.match(valid)){
            (document.getElementById('mobileError') as HTMLElement).innerHTML="&nbsp;";
            return true;
        }
        else{
            (document.getElementById('mobileError') as HTMLElement).innerHTML="Enter valid Mobile Number";
            return false;
        }
    }
    else{
        (document.getElementById('mobileError') as HTMLElement).innerHTML="Mobile Number is required";
        return false;
    }
}
function validateLandline(){
    let landline = (document.getElementById('newLandline') as HTMLInputElement).value;
    const valid =/^[0][0-9]{2,3}[\s]?[0-9]{3,4}[\s]?[0-9]{4}$/;
    if(requires(landline)){
        if(landline.match(valid)){
            (document.getElementById('landlineError') as HTMLElement).innerHTML="&nbsp;";
            return true;
        }
        else{
            (document.getElementById('landlineError') as HTMLElement).innerHTML="Enter valid Telephone Number";
            return false;
        }
    }
    else{
        (document.getElementById('landlineError') as HTMLElement).innerHTML="Telephone Number is required";
        return false;
    }
}
function validateWebsite(){
    let website = (document.getElementById('newWebsite') as HTMLInputElement).value;
    const valid =/^([https|http]:)?\/?\/?(www.)+[a-zA-Z0-9#!:?+=&%!.\-\/]+\.([a-zA-Z]+){2,}$/;
    if(requires(website)){
        if(website.match(valid)){
            (document.getElementById('websiteError') as HTMLElement).innerHTML="&nbsp;";
            return true;
        }
        else{
            (document.getElementById('websiteError') as HTMLElement).innerHTML="Enter valid Website";
            return false;
        }
    }
    else{
        (document.getElementById('websiteError') as HTMLElement).innerHTML="Website is required";
        return false;
    }
}
function validateAddress(){
    let address = (document.getElementById('newAddress') as HTMLInputElement).value;
    if(requires(address)){
        (document.getElementById('addressError') as HTMLElement).innerHTML="&nbsp;";
        return true;
    }
    else{
        (document.getElementById('addressError') as HTMLElement).innerHTML="Address is required";
        return false;
    }
}
function validateForm(){
    let name = validateName();
    let email = validateEmail();
    let mobile = validateMobile();
    let landline = validateLandline();
    let website = validateWebsite();
    let address = validateAddress();
    return(name && email && mobile && landline && website && address);    
}