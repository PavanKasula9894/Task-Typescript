

class Contact implements ContactModel{
    name:string ;
    email:string;
    mobile:string ;
    landline :string;
    website:string;
    address:string;
    constructor(name:string,email :string, mobile :string ,landline :string , website :string,address:string){
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.landline=landline;
        this.website=website;
        this.address=address;
    }
}


let counter=0;
let list : Contact[] = [];
let variable = "eachContactSummary";
let activeContact : any;
var newcontact = new Contact("Chandermani Arora","chandermani@technovert.com","+91 9292929292","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Sashi Pagadala","sashi@technovert.com","+91 9985528844","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Praveen Battula","praveen@technovert.com","+91 9985016232","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Vijay Yalamanchili","vijay@technovert.com","+91 9885071216","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var emptycontact = new Contact("","","","","","");

function load() : void{
    for(let i=0;i<list.length;i++){
        displaySummary(list[i],i);
    }
}

function displaySummary(contact:Contact , i : number) : void{
    let div = document.createElement("div");
    const summary:any = document.getElementById("summary");
    div.className = variable;
    div.id=i as unknown as string;
    div.setAttribute('onclick','displayDetails(this.id)');
    div.innerHTML="<h1 class='Name'>"+contact.name+"</h1><p class='Mail'>"+contact.email+"</p><p class='Mobile'>"+contact.mobile+"</p>"
    summary.appendChild(div);
}



function displayDetails (id : string) {
   const idId  = <HTMLElement>document.getElementById(id);
   const addDetailsId =  <HTMLElement>document.getElementById('addDetails');
   idId.className=variable+" active";
   activeContact=id;
   (document.getElementsByClassName('contactInfo')[0] as HTMLInputElement).style.display="block";
   addDetailsId.style.display="none";
   var i = id;
   for(let j in list){
       if(j!=i && list[j].name!=""){
            const variableJ  =  <HTMLElement>document.getElementById(j); 
          variableJ.className=variable;
        }
    }
    counter = i as unknown as number;
    (document.getElementById("detailedName") as HTMLElement).innerHTML = list[counter].name;
    (document.getElementById("detailedEmail") as HTMLElement).innerHTML = list[counter].email;
    (document.getElementById("detailedMobile") as HTMLElement).innerHTML = list[counter].mobile;
    (document.getElementById("detailedLandline") as HTMLElement).innerHTML = list[counter].landline;
    (document.getElementById("detailedWebsite") as HTMLElement).innerHTML = list[counter].website;
    (document.getElementById("detailedAddress") as HTMLElement).innerHTML = list[counter].address;
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
function deleteDetails(){
    let delname= (document.getElementById('detailedName') as HTMLElement).textContent;
    if(confirm("Are you sure you want to delete "+delname+"'s details")==true){
        (document.getElementById(activeContact ) as HTMLElement).innerHTML="";
        (document.getElementById(activeContact) as HTMLInputElement).remove();
        (document.getElementsByClassName('contactInfo')[0] as HTMLInputElement).style.display="none";
        list[activeContact as unknown as number] = emptycontact ;
    }
}

function openForm() : void {
    (document.getElementById('newName') as HTMLInputElement).value="";
    (document.getElementById('newEmail') as HTMLInputElement).value="";
    (document.getElementById('newMobile') as HTMLInputElement).value="";
    (document.getElementById('newLandline') as HTMLInputElement).value="";
    (document.getElementById('newWebsite') as HTMLInputElement).value="";
    (document.getElementById('newAddress') as HTMLInputElement).value="";
    (document.getElementById('addDetails') as HTMLInputElement).style.display="block";
    (document.getElementsByClassName('contactInfo')[0] as HTMLInputElement).style.display="none";
    for(let j in list){
        (document.getElementById(j) as HTMLInputElement).className=variable;
    }
}

function createContact(){
    if(confirm("Are you sure you want to new contact details")){
        var name:string = (document.getElementById('newName') as HTMLInputElement).value;
        var email:string = (document.getElementById('newEmail') as HTMLInputElement).value;
        var mobile:string = (document.getElementById('newMobile') as HTMLInputElement).value;
        var landline :string  = (document.getElementById('newLandline') as HTMLInputElement).value;
        var website :string = (document.getElementById('newWebsite') as HTMLInputElement).value;
        var address :string = (document.getElementById('newAddress') as HTMLInputElement).value;
        var contact = new Contact(name,email,mobile,landline,website,address);
        list.push(contact);
        displaySummary(contact,list.length-1);
        (document.getElementById("createForm") as HTMLFormElement).reset();
        displayDetails((list.length-1 as unknown as string));
    }
}

function editDetails() : void {
    (document.getElementById('addDetails') as HTMLInputElement).style.display="block";
    (document.getElementsByClassName('contactInfo')[0] as HTMLElement).style.display="none";
    (document.getElementById('createButton') as HTMLInputElement).value='Edit';
    (document.getElementById('createButton') as HTMLInputElement).setAttribute('onclick','editContact()');
    (document.getElementById('newName') as HTMLInputElement).value =<string> (document.getElementById('detailedName') as HTMLElement).textContent;
    (document.getElementById('newEmail') as HTMLInputElement).value =<string> (document.getElementById('detailedEmail') as HTMLElement).textContent;
    (document.getElementById('newMobile') as HTMLInputElement).value =<string> (document.getElementById('detailedMobile') as HTMLElement).textContent;
    (document.getElementById('newLandline') as HTMLInputElement).value =<string> (document.getElementById('detailedLandline') as HTMLElement).textContent;
    (document.getElementById('newWebsite') as HTMLInputElement).value =<string> (document.getElementById('detailedWebsite') as HTMLElement).textContent;
    (document.getElementById('newAddress') as HTMLInputElement).value =<string> (document.getElementById('detailedAddress') as HTMLElement).textContent;
}

function editContact() : void{
    if(confirm("Are you sure you want to edit "+list[counter].name+"'s details")){
        list[counter].name = (document.getElementById('newName') as HTMLInputElement).value;
        list[counter].email = (document.getElementById('newEmail') as HTMLInputElement).value;
        list[counter].mobile = (document.getElementById('newMobile') as HTMLInputElement).value;
        list[counter].landline = (document.getElementById('newLandline') as HTMLInputElement).value;
        list[counter].website = (document.getElementById('newWebsite') as HTMLInputElement).value;
        list[counter].address = (document.getElementById('newAddress') as HTMLInputElement).value;
        ((document.getElementById(counter as unknown as string) as HTMLInputElement).getElementsByClassName('Name')[0] as HTMLElement).innerHTML=list[counter].name;
        ((document.getElementById(counter as unknown as string) as HTMLInputElement).getElementsByClassName('Mail')[0] as HTMLElement).innerHTML=list[counter].email;
        ((document.getElementById(counter as unknown as string) as HTMLInputElement).getElementsByClassName('Mobile')[0] as HTMLElement).innerHTML=list[counter].mobile;
        displayDetails(counter as unknown as string )
    }
}