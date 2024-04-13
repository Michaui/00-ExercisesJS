// class User {
//   // nachname = "";

//   constructor(name, nachname) {
//     // invokes the setter
//     this.name = name;
//     this.nachname = nachname;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       alert("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }

//   get name() {
//     return this._name;
//   }

//   set nachname(value) {
//     if (value.length < 4) {
//       alert("Name is too short.");
//       return;
//     }
//     this._nachname = value;
//   }

//   get nachname() {
//     return this._nachname; 
//   }

//   get vollerName() {
//     return `Mein voller Name ist ${this.name} ${this.nachname}`
//   }

//   //würde eine neue Propertie in das Objekt setzen. 
//   get zweiterName() {
//     return this._zweiterName; 
//   }

//   set zweiterName(value) {
//     if (value.length < 4) {
//       alert("Name is too short.");
//       return;
//     }
//     this._zweiterName = value;
//   }
// }

// let user = new User("John", "Mustermann");

// user.name = "Franicheck"
// user.nachname = "HansWurst"

// // console.log(user.vollerName); 
// console.log(user.vollerName, "blah", user._name, user.nachname);




class FancyLog {
  #decorator = '😊'; 
  #message; 

  get decorator(){
    return this.#decorator;
  }

  set decorator(newDecorator){
    this.#decorator = newDecorator;  
  }

  // hash names sind private properties oder private methoden. 
  // Diese können nur innerhalb der Klasse/Instanz zugreifen. 
  set #decoratedMessage(message){
    this.#message = message; 
  }

  get #decoratedMessage(){
    return `${this.#decorator} ${this.#message} ${this.#decorator}`;  
  }

  log(message) {
    // this.decorator = '❤️❤️'
    this.#decoratedMessage = message; 
    console.log(this.#decoratedMessage);
  }
}

let fancylog = new FancyLog(); 

fancylog.decorator='🔥🔥'
fancylog.log("Public and private class fields work!");



// console.log(Square.equeals(square1, square2)); 