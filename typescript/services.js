var Contact = /** @class */ (function () {
    function Contact(name, email, mobile, landline, website, address) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
    return Contact;
}());
var counter = 0;
var list = [];
var variable = "eachContactSummary";
var activeContact;
var newcontact = new Contact("Chandermani Arora", "chandermani@technovert.com", "+91 9292929292", "040301231211", "http://www.technovert.com", "123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Sashi Pagadala", "sashi@technovert.com", "+91 9985528844", "040301231211", "http://www.technovert.com", "123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Praveen Battula", "praveen@technovert.com", "+91 9985016232", "040301231211", "http://www.technovert.com", "123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Vijay Yalamanchili", "vijay@technovert.com", "+91 9885071216", "040301231211", "http://www.technovert.com", "123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var emptycontact = new Contact("", "", "", "", "", "");
function load() {
    for (var i = 0; i < list.length; i++) {
        displaySummary(list[i], i);
    }
}
function displaySummary(contact, i) {
    var div = document.createElement("div");
    var summary = document.getElementById("summary");
    div.className = variable;
    div.id = i;
    div.setAttribute('onclick', 'displayDetails(this.id)');
    div.innerHTML = "<h1 class='Name'>" + contact.name + "</h1><p class='Mail'>" + contact.email + "</p><p class='Mobile'>" + contact.mobile + "</p>";
    summary.appendChild(div);
}
function displayDetails(id) {
    var idId = document.getElementById(id);
    var addDetailsId = document.getElementById('addDetails');
    idId.className = variable + " active";
    activeContact = id;
    document.getElementsByClassName('contactInfo')[0].style.display = "block";
    addDetailsId.style.display = "none";
    var i = id;
    for (var j in list) {
        if (j != i && list[j].name != "") {
            var variableJ = document.getElementById(j);
            variableJ.className = variable;
        }
    }
    counter = i;
    document.getElementById("detailedName").innerHTML = list[counter].name;
    document.getElementById("detailedEmail").innerHTML = list[counter].email;
    document.getElementById("detailedMobile").innerHTML = list[counter].mobile;
    document.getElementById("detailedLandline").innerHTML = list[counter].landline;
    document.getElementById("detailedWebsite").innerHTML = list[counter].website;
    document.getElementById("detailedAddress").innerHTML = list[counter].address;
}
// function deleteDetails() : void {
//     let delname = (document.getElementById('detailedName') as HTMLElement).textContent;
//     if(confirm("Are you sure you want to delete "+delname+"'s details")==true){
//         for(let i=0;i<list.length;i++){
//             if(list[i].name==delname){
//                 (document.getElementById(variable+i) as HTMLElement).innerHTML = "";
//                 (document.getElementById(variable+i) as HTMLInputElement).remove();
//                 (document.getElementsByClassName('contactInfo')[0] as HTMLInputElement).style.display="none";
//                 list[i].name="";
//             }
//         }
//     }
// }
function deleteDetails() {
    var delname = document.getElementById('detailedName').textContent;
    if (confirm("Are you sure you want to delete " + delname + "'s details") == true) {
        document.getElementById(activeContact).innerHTML = "";
        document.getElementById(activeContact).remove();
        document.getElementsByClassName('contactInfo')[0].style.display = "none";
        list[activeContact] = emptycontact;
    }
}
function openForm() {
    document.getElementById('newName').value = "";
    document.getElementById('newEmail').value = "";
    document.getElementById('newMobile').value = "";
    document.getElementById('newLandline').value = "";
    document.getElementById('newWebsite').value = "";
    document.getElementById('newAddress').value = "";
    document.getElementById('addDetails').style.display = "block";
    document.getElementsByClassName('contactInfo')[0].style.display = "none";
    for (var j in list) {
        document.getElementById(j).className = variable;
    }
}
function createContact() {
    if (confirm("Are you sure you want to new contact details")) {
        var name = document.getElementById('newName').value;
        var email = document.getElementById('newEmail').value;
        var mobile = document.getElementById('newMobile').value;
        var landline = document.getElementById('newLandline').value;
        var website = document.getElementById('newWebsite').value;
        var address = document.getElementById('newAddress').value;
        var contact = new Contact(name, email, mobile, landline, website, address);
        list.push(contact);
        displaySummary(contact, list.length - 1);
        document.getElementById("createForm").reset();
        displayDetails(list.length - 1);
    }
}
function editDetails() {
    document.getElementById('addDetails').style.display = "block";
    document.getElementsByClassName('contactInfo')[0].style.display = "none";
    document.getElementById('createButton').value = 'Edit';
    document.getElementById('createButton').setAttribute('onclick', 'editContact()');
    document.getElementById('newName').value = document.getElementById('detailedName').textContent;
    document.getElementById('newEmail').value = document.getElementById('detailedEmail').textContent;
    document.getElementById('newMobile').value = document.getElementById('detailedMobile').textContent;
    document.getElementById('newLandline').value = document.getElementById('detailedLandline').textContent;
    document.getElementById('newWebsite').value = document.getElementById('detailedWebsite').textContent;
    document.getElementById('newAddress').value = document.getElementById('detailedAddress').textContent;
}
function editContact() {
    if (confirm("Are you sure you want to edit " + list[counter].name + "'s details")) {
        list[counter].name = document.getElementById('newName').value;
        list[counter].email = document.getElementById('newEmail').value;
        list[counter].mobile = document.getElementById('newMobile').value;
        list[counter].landline = document.getElementById('newLandline').value;
        list[counter].website = document.getElementById('newWebsite').value;
        list[counter].address = document.getElementById('newAddress').value;
        document.getElementById(counter).getElementsByClassName('Name')[0].innerHTML = list[counter].name;
        document.getElementById(counter).getElementsByClassName('Mail')[0].innerHTML = list[counter].email;
        document.getElementById(counter).getElementsByClassName('Mobile')[0].innerHTML = list[counter].mobile;
        displayDetails(counter);
    }
}
