console.log("Welcome to AddressBook program using JavaScript")
//import the AddressRegEx.js file
var helper= require('./regex.js');
    console.log(helper);
//Importing the neccessary module
let readlineSync = require('readline-sync');
const fs = require('fs')
function readfile() 
{
  let raw = fs.readFileSync('./AddressBook.json','utf8');
  let punishments= JSON.parse(raw);
  console.log(punishments);
  console.log("raw",raw);
  return punishments;
  
}
function write(punishments){
  let data = JSON.stringify(punishments);
  console.log("data",data);
 return fs.writeFileSync('./AddressBook.json', data);
  
}
//Created contact class
class Contact {
    //Declaring the properties
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;
    gender;
    profession;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
        this.gender = parameters[8];
        this.profession = parameters[9];
    }

    toString() {
        return `First Name: ${this.firstName}\nLast Name: ${this.lastName}
        \nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}
        \nZipCode: ${this.zipCode}\nPhone Number: ${this.phoneNumber}
        \nEmail-Id: ${this.emailId}\nGender: ${this.gender}\nProfession: ${this.profession}\n`;
    }
}

//UC3 - Initializing an addressbook contact array
var addressBookContactArr = new Array();

//UC1 - Function to return object of added contacts
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, gender, profession) {
    let contact
    try {
        //Object for class
        contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, gender, profession);
        let myjson = readfile();
        console.log(" before push", myjson);
        myjson.push(contact);
        console.log("personInfo",contact);
        console.log("after push",myjson);
        write(myjson);
        console.log(myjson);
    } catch (e) {
        console.error(e)
    }
    //Add element in array (UC3)
    addressBookContactArr.push(contact);
    //console.log("Contact added Succesfully!");
    return contact;
}

//Function to get the details of the contact from the user
function getContactDetails() {
    try {
        //Regex patterns for validating contact details(UC2)
        //Validating first name(UC2)
        let firstName = readlineSync.question('Enter Your FirstName : ');
        //Calling the function from AddressRegex file(UC2)
        helper.checknamePattern(firstName);
        //Validating last name(UC2)
        let lastName = readlineSync.question('Enter Your LastName : ');
        helper.checknamePattern(lastName);
        //Validating address(UC2)
        let address = readlineSync.question('Enter Your Address : ');
        helper.checknamePattern(address);
        //Validating city(UC2)
        let city = readlineSync.question('Enter Your City Name: ');
        helper.checknamePattern(city);
        //Validating states(UC2)
        let state = readlineSync.question('Enter Your State Name : ');
        helper.checknamePattern(state);
        //Validating zip code(UC2)
        let zipCode = parseInt(readlineSync.question('Enter Your Zip Code : '));
        helper.checkZipCodePattern(zipCode);
        //Validating phone number(UC2)
        let phoneNumber = parseInt(readlineSync.question('Enter Your Phone Number : '));
        helper.CheckphoneNumPattern(phoneNumber);
        //Validating email id(UC2)
        let emailId = readlineSync.question('Enter Your Email Id : ');
        helper.CheckemailIdPattern(emailId);
        let gender = readlineSync.question('Enter Your  Gender : ');
         let profession = readlineSync.question('Enter Your Profession : ');
        let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, gender, profession);
        console.log("\n*****Details Of Contacts*****");
        console.log(contactDetails.toString());
        //AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, gender, profession);
        console.log("Contact added Succesfully!");
    } catch (e) {
        console.error(e);
    }
}

//UC3 - Function to display contacts
function DisplayContact() {
    try {
        console.log("\n****Contact Details Of AddressBook***\n");
        if(addressBookContactArr.length !=0){
            addressBookContactArr.forEach(contact => console.log(contact.toString()));
           // console.log("=======================================");
        }
        else
            console.log("Addressbook is empty")
    } catch (e) {
        console.error(e);
    }
}
//UC4 - Function to find and edit contacts based on the given name
function FindAndEditContact() {
    try {
        let name = readlineSync.question('Enter Your Name To View And Modify Contact : ');
        addressBookContactArr.forEach((contact) => {
            if (contact.firstName == name) {
                console.log(contact.toString());
                while (true) {
                    console.log("1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address \n9: Gender \n10: Profession \n11: Go Back")
                    let choice = parseInt(readlineSync.question("Enter Your Choice From Above That You Want To Modified : "));
                    switch (choice) {
                        case 1:
                            let newFirstName = readlineSync.question("Enter The New First Name : ");
                            contact.firstName = newFirstName;
                            break;
                        case 2:
                            let newLastName = readlineSync.question("Enter The New First Name : ");
                            contact.lastName = newLastName;
                            break;
                        case 3:
                            let newAddress = readlineSync.question("Enter The New Address : ");
                            contact.address = newAddress;
                            break;
                        case 4:
                            let newCity = readlineSync.question("Enter The New City Name : ");
                            contact.city = newCity;
                            break;
                        case 5:
                            let newState = readlineSync.question("Enter The New State Name : ");
                            contact.state = newState;
                            break;
                        case 6:
                            let newZipCode = readlineSync.question("Enter The New Zip Code : ");
                            contact.zipCode = newZipCode;
                            break;
                        case 7:
                            let newPhoneNum = readlineSync.question("Enter The New Phone Number : ");
                            contact.phoneNumber = newPhoneNum;
                            break;
                        case 8:
                            let newEmailId = readlineSync.question("Enter The New Email Id : ");
                            contact.email = newEmailId;
                            break;
                         case 9:
                            let newGender = readlineSync.question("Enter The New Gender : ");
                            contact.gender = newGender;
                            break;
                        case 10:
                            let newProfession = readlineSync.question("Enter The New Profession : ");
                            contact.profession = newProfession;
                            break;
                        case 11:
                            return;
                        default:
                            console.log("Invalid Option");
                            break;
                    }
                }
            }
        });
        console.log("Contact Not Found")
    } catch (e) {
        console.error(e);
    }
}

//UC5 - Function to delete contact based on name
function deleteContact(){
    try{
        let name = readlineSync.question('Enter The Name Of The Contact To delete Contact : ');
        const index = addressBookContactArr.findIndex((contact) => contact.firstName == name);
        //using splice method to remove the element
        //if (index != -1)
           // addressBookContactArr.splice(index, 1);
          let myjson = readfile();
          for (let i=0; i<myjson.length; i++){
              if(myjson[i].firstName==name){
                  myjson.splice(i,1);
                  console.log("Contact deleted");
                  break;
              }
          }
          write(myjson);
          console.log(myjson);
    } catch (e) {
        console.error(e);
    }
}

//UC6 - Function to count contact in addressbook
function ContactCount() {
    try {
        let countContact = addressBookContactArr.reduce((contact) => contact + 1, 0)
        console.log(`**Total Number Of Contacts are :** ${countContact}`);
    } catch (e) {
        console.error(e);
    }
}

//UC8 - Function to seach person in a particular city or state
function seachPersonByCityOrState(city, state) {
    let cityOrState = readlineSync.question("Enter A City Or State Name To Find Person : ");
    let contact = addressBookContactArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState);
    console.log(contact.join("\n"));
}
//Function to perform addressbook operations(UC3)
function AddressBookOperations() {
    try {
        //Default contacts
        AddContact("Bharti", "Thapa", "Sagarpur", "Dwarka", "Delhi", "110045", "91 8971615536", "bharti4@gmail.com", "Female", "Doctor");
        AddContact("Raju", "Jaiswal", "Sagarpur", "Dwarka", "Delhi", "110045", "91 9087654321", "raju3@gmail.com", "Male", "Mca");
        while (true) {
            console.log("\n0: Exit \n1: Add New Contact(UC2)  \n2: Display contacts(UC2) \n3: Edit contact by name(UC3) \n4: Delete contact(UC4) \n5: Contacts count(UC6) \n6: Search Person by city or state(UC8) ");
            switch (parseInt(readlineSync.question('Enter the choice : '))) {
                case 0:
                    console.log("Exited");
                    process.exit(1)
                    break;
                case 1:
                    getContactDetails();//UC2
                    break;
                case 2:
                    DisplayContact();//UC3
                    break;
                case 3:
                    FindAndEditContact();//UC4
                    break;
                case 4:
                    deleteContact();//UC5
                    break;
                case 5:
                    ContactCount();//UC6
                   // console.log(`Total Number Of Contacts are : ${addressBookContactArr.length}`);
                    break;
                case 6:
                    seachPersonByCityOrState();//UC8
                    break;
                // case 7:
                //     seachPersonByCityOrState();//UC9
                //     break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
            //readlineSync.question();
        }
    } catch (e) {
        console.error(e);
    }
}

//Calling the function
AddressBookOperations();