class AddressBook {
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    Gender;
    Profession;
  
    //constructor
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
      this.Gender = params[8];
      this.Profession = params[9];
    }
  
    //get and set for firstname
    get firstName() {
      return this._firstName;
    }
    set firstName(firstName) {
      this._firstName = firstName;
    }
  
    //get and set for lastname
    get lastName() {
      return this._lastName;
    }
    set lastName(lastName) {
      this._lastName = lastName;
    }
  
    //get and set for address
    get address() {
      return this._address;
    }
    set address(address) {
      this._address = address;
    }
  
    //get and set for city
    get city() {
      return this._city;
    }
    set city(city) {
      this._city = city;
    }
  
    //get and set for state
    get state() {
      return this._state;
    }
    set state(state) {
      this._state = state;
    }
  
    //get and set for zip
    get zip() {
      return this._zip;
    }
    set zip(zip) {
      this._zip = zip;
    }
  
    //get and set for phoneNumber
    get phoneNumber() {
      return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
      this._phoneNumber = phoneNumber;
    }
  
    // get and set for email
    get email() {
      return this._email;
    }
    set email(email) {
      this._email = email;
    }

    // get and set for Gender
    get Gender() {
        return this._Gender;
      }
      set Gender(Gender) {
        this._Gender = Gender;
      }

      // get and set for Gender
    get Profession() {
        return this._Profession;
      }
      set (Profession) {
        this._Profession = Profession;
      }
  
    //defining to method
    toString() {
      return (
        "First Name: " +
        this.firstName +
        ", \nLast Name: " +
        this.lastName +
        ", \nAddress: " +
        this.address +
        ", \nCity: " +
        this.city +
        ", \nState: " +
        this.state +
        ", \nZip: " +
        this.zip +
        ", \nPhone Number: " +
        this.phoneNumber +
        " , \nEmail: " +
        this.email +
        ", \nGender: " +
        this.Gender +
        ", \nProfession: " +
        this.Profession
      );
    }
  }
  
  //creating an instance and giving contact details
  let contact_book = new AddressBook(
    // contact_book.setfirstName();
    "Arjun",
    "Jaiswal",
    "Ghorasahan purnahiya kothi",
    "Motihari",
    "Bihar",
    845303,
    9821848065,
    "arjun8065@gmail.com",
    "Male",
    "Engineer"
    


  );
  console.log(contact_book.toString());