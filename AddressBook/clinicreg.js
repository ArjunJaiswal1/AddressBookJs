//First Name validation
let validateFirstName = (fname) => {
  let fnameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (fnameRegex.test(fname)) return true;
  else throw "First Name is Incorrect";
};
//Last Name validation
let validateLastName = (lname) => {
  let lnameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (lnameRegex.test(lname)) return true;
  else  throw("Last Name is Incorrect");
};
//patient id 
let validatePatientId = (pid) => {
  let pidRegex = RegExp("^[0-9]{1,}$");
  if (pidRegex.test(pid)) return true;
  else  throw("patient  id is Incorrect");
};

//Address validation
let validateAddress = (address) => {
  let addressRegex = RegExp("[a-z]{4,}");
  if (addressRegex.test(address)) return true;
  else throw("Address is Incorrect");
};
//City validation
let validateCity = (city) => {
  let cityRegex = RegExp("[a-z]{4,}");
  if (cityRegex.test(city)) return true;
  else throw("City is Incorrect");
};
//State validation
let validateState = (state) => {
  let stateRegex = RegExp("[a-z]{4,}");
  if (stateRegex.test(state)) return true;
  else throw("State is Incorrect");
};
//Zip Code
let validateZip = (zip) => {
  let zipRegex = RegExp("([0-9]{3} ?[0-9]{3}$)");
  if (zipRegex.test(zip)) return true;
  else throw("Zip Code is Incorrect");
};
//Email validation
let validateEmail = (email) => {
  let emailRegex = RegExp("[a-z0-9]+((\\.)[a-z0-9]+)?@[a-z0-9]+(\\.)co(\\.)*[a-z]*$");
  if (emailRegex.test(email)) return true;
  else throw("Email is Incorrect");
};
//Telephone number validation
let validatePhoneNumber = (tel) => {
  let telRegex = RegExp("^[0-9]{2} [0-9]{10}$");
  if (telRegex.test(tel)) return true;
  else throw("Phone Number is Incorrect");
};
//blood group

let validateBloodGroup = (blo) => {
  let bloRegex = RegExp("(A|B|AB|O)[+-]");
  if (bloRegex.test(blo)) return true;
  else throw("blood group Number is Incorrect");
};
// Gender

// let validateGender = (gen) => {
//     let genRegex = RegExp("(M|F|O)");
//     if (genRegex.test(gen)) return true;
//     else throw("Gender is Incorrect");
//};
module.exports = {
  validateFirstName,
  validateLastName,
  validatePatientId,
  validateAddress,
  validateCity,
  validateState,
  validateZip,
  validatePhoneNumber,
  validateEmail,
  validateBloodGroup,
 // validateGender,
};