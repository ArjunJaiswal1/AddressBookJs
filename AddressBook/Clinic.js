const prompt = require("prompt-sync")();
const validateContact = require("./clinicreg.js");
const fs = require('fs');
const { exit } = require("process");
function readfile() 
{
  let raw = fs.readFileSync('./add1.json','utf8');
  let punishments= JSON.parse(raw);
  console.log(punishments);
  console.log("raw",raw);
  return punishments;
  
}
function write(punishments){
  let data = JSON.stringify(punishments);
  console.log("data",data);
 return fs.writeFileSync('./add1.json', data);
  
}
let addressBookArray = [];
var personInfo;
class PersonInfo {
  firstName;
  lastName;
  patientId;
  address;
  city; 
  state;
  zip;
  phoneNumber;
  email;
  blood;
  
  constructor(firstName,lastName,patientId,address,city,state,zip,phoneNumber,email,blood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.patientId= patientId;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.blood = blood;
   
  }
  toString() {
    return (
      "First Name = " +
      this.firstName +
      ", Last Name = " +
      this.lastName +
      ", PatientId = " +
      this.patientId +
      ",Address = " +
      this.address +
      ",City = " +
      this.city +
      ",State = " +
      this.state +
      ",Zip = " +
      this.zip +
      ",Phone Number = " +
      this.phoneNumber +
      ",Email = " +
      this.email +
      ",Bloodd  = " +
      this.blood 
      
    );
  }
}
function addContact() {
  let firstName = prompt("Enter Your First Name ");
  let lastName = prompt("Enter Your Last Name ");
  let patientId = prompt("Enter Your Patient ID ");
  let address = prompt("Enter Your address ");
  let city = prompt("Enter Your city ");
  let state = prompt("Enter Your state ");
  let zip = prompt("Enter Your Zip Code ");
  let phNumber = prompt("Enter Your Mobile Number ");
  let email = prompt("Enter Your email ");
  let blood = prompt("Enter Your blood group ");
  personInfo = new PersonInfo(firstName,lastName,patientId,address,city,state,zip,phNumber,email,blood);
  try {
    validateContact.validateFirstName(personInfo.firstName);
    validateContact.validateLastName(personInfo.lastName);
    validateContact.validatePatientId(personInfo.patientId);
    validateContact.validateAddress(personInfo.address);
    validateContact.validateCity(personInfo.city);
    validateContact.validateState(personInfo.state);
    validateContact.validateZip(personInfo.zip);
    validateContact.validatePhoneNumber(personInfo.phoneNumber);
    validateContact.validateEmail(personInfo.email);
    validateContact.validateBloodGroup(personInfo.blood);
    let myjson = readfile();
    //console.log(" before push", myjson);
    myjson.push(personInfo);
    console.log("personInfo",personInfo);
    //console.log("after push",myjson);
    write(myjson);
    console.log(myjson);
  } catch (invalid) {
    console.error(invalid);
    addContact();
  }
}
function editContact() {
  let contactFound = 0;
  let name = prompt("Enter Your First Name of the person to edit ");
  for (let i = 0; i < addressBookArray.length; i++) {
    if (addressBookArray[i].firstName == name) {
      contactFound = 1;
      console.log(
        "Enter 1 to edit First Name, 2 for lastName,3 for patientId, 4 for address, 5 for city"
      );
      console.log(
        " Enter 6 for state, 7 for Zip Code, 8 for phone number, 9 for email,10 for blood "
      );
      let choiceEdit = prompt("Enter Your choice to edit ");
      switch (choiceEdit) {
        case "1":
          let firstNameEdit = prompt("Enter Your First Name ");
          try {
            validateContact.validateFirstName(firstNameEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].firstName = firstNameEdit;
          break;
        case "2":
          let lastNameEdit = prompt("Enter Your Last Name ");
          try {
            validateContact.validateLastName(lastNameEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].lastName = lastNameEdit;
          break;
          case "3":
            let patientIdEdit = prompt("Enter Your Patient Id ");
            try {
              validateContact.validatePatientId(patientIdEdit);
            } catch (invalid) {
              console.error(invalid);
              editContact();
            }
            addressBookArray[i].patientId = patientIdEdit;
            break;
         case "4":
          let addressEdit = prompt("Enter Your address ");
          try {
            validateContact.validateAddress(addressEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].address = addressEdit;
          break;
        case "5":
          let cityEdit = prompt("Enter Your city ");
          try {
            validateContact.validateCity(cityEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].city = cityEdit;
          break;
        case "6":
          let stateEdit = prompt("Enter Your state ");
          try {
            validateContact.validateState(stateEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].state = stateEdit;
          break;
        case "7":
          let zipEdit = prompt("Enter Your Zip Code ");
          try {
            validateContact.validateZip(zipEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].zip = zipEdit;
          break;
        case "8":
          let phNumberEdit = prompt("Enter Your Mobile Number ");
          try {
            validateContact.validatePhoneNumber(phNumberEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].phoneNumber = phNumberEdit;
          break;
        case "9":
          let emailEdit = prompt("Enter Your email ");
          try {
            validateContact.validateEmail(emailEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].email = emailEdit;
          break;
          case "10":
          let bloodEdit = prompt("Enter Your blood ");
          try {
            validateContact.validateBloodGroup(bloodEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].blood = bloodEdit;
          break;
      }
    }
  }
  if (contactFound == 0) console.log("Contact Not Found");
}
function deleteContact(){
    let contactFoundDelete = 0;
    let name = prompt("Enter Your First Name of the person to delete ");
    let myjson = readfile();
    for (let i = 0; i < myjson.length; i++) {
      if (myjson[i].firstName == name) {
        myjson.splice(i,1);
       //console.log("Contact Deleted");
        break;
      }
    }
    write(myjson);
    console.log(myjson);
    if (contactFoundDelete == 0) console.log("Contact is delated");
  }
let i = 0;
while (i == 0) {
  console.log("Enter 1 to add contacts, 2 to edit Contacts, 3 to view, 4 to Delete Contacts");
  let choice = prompt("Enter your choice ");
  switch (choice) {
    case "1":
      addContact();
      addressBookArray.push(personInfo);
      break;
    case "2":
      editContact();
      break;
    case "3":
      i = 1;
      break;
    case "4":
      deleteContact();
      break;
  }
}
console.log(addressBookArray);