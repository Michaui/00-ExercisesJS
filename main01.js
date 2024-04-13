
//THIS 
// Function declaration  
// Inside a regular JavaScript function, "this" value (aka the execution context) is dynamic.
function greet(who) {
    return `Hello, ${who}!`;
  }

// Function expression
// The arrow function doesn't define its own execution context but resolves to the one from the outer function.
const greet = function(who) {
    return `Hello, ${who}`;
  }

const myObject = {
  myMethod(items) {
    console.log(this); // logs myObject
    const callback = () => {
      console.log(this); // logs myObject
    };
    items.forEach(callback);
  }
};

myObject.myMethod([1, 2, 3]); 
// this resolved lexically is one of the great features of the arrow functions. 
// When using callbacks inside methods you are sure the arrow function doesn't define its own this (no more const self = this or callback.bind(this) workarounds).


//CONSTRUCTOR 
//Regular Function 
function Car(color) {
      this.color = color;
    }

const redCar1 = new Car('red');
redCar1 instanceof Car; // => true

//Arrow Function 
const Car = (color) => {
  this.color = color;
};

const redCar2 = new Car('red'); // TypeError: Car is not a constructor

//ARGUMENT OBJECTS
  //Regular Function
function myFunction() {
    console.log(arguments);
  }
  
myFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

//Arrow Function
function myRegularFunction() {
    const myArrowFunction = () => {
      console.log(arguments);
    }
  
    myArrowFunction('c', 'd');
  }
  
myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

// If you'd like to access the direct arguments of the arrow function, 
// then you can use the rest parameters feature:
function myRegularFunction() {
  const myArrowFunction = (...args) => {
    console.log(args);
  }

  myArrowFunction('c', 'd');
}

myRegularFunction('a', 'b'); // logs ['c', 'd']

//Inline Arrow Function
const increment = (num) => num + 1;

increment(41); // => 42


//METHODS 
//Regular Function
class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName() {
      console.log(this.heroName);
    }
  }
  
const batman1 = new Hero('Batman');

//Arrow Function
class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName = () => {
      console.log(this.heroName);
    }
  }
  
const batman2 = new Hero('Batman');

//ZUSATZINFO
//REGULAR FUNKTION
class Hero {
    constructor(name) {
      this.heroName = name;
    }
  
    logName() {
      console.log(this.heroName);
    }
  }
  
  const superman = new Hero('Superman');
  const batman = new Hero('Batman');
  
  superman.logName(); // Ausgabe: Superman
  batman.logName();   // Ausgabe: Batman

// Bei Verwendung einer normalen Funktion wird das this-Schlüsselwort dynamisch gebunden. Das bedeutet, dass this den Kontext des Aufrufobjekts (in diesem Fall die Instanz, auf der die Methode aufgerufen wird) darstellt. Wenn Sie also logName() auf einer Instanz von Klasse aufrufen, wird this auf diese Instanz verweisen. Das ist oft das gewünschte Verhalten, besonders wenn Sie Klassen verwenden.

class Hero {
    constructor(name) {
      this.heroName = name;
      this.logName = function() {
        console.log(this.heroName);
      };
    }
  }
  
  const superman3 = new Hero('Superman');
  const batman4 = new Hero('Batman');
  
  const logSupermanName = superman.logName;
  logSupermanName(); // Ausgabe: undefined oder Fehler (abhängig vom Kontext)
  
// In diesem Beispiel wird this in der Methode logName() dynamisch gebunden, was bedeutet, dass es sich auf das Objekt bezieht, auf dem die Methode aufgerufen wird. Wenn Sie jedoch die Methode außerhalb des Kontexts der Instanz aufrufen, wie im letzten Aufruf, wird this nicht mehr auf superman zeigen. Stattdessen wird this zu undefined (oder zu window, wenn im globalen Kontext) und die Ausgabe wäre undefined oder es könnte ein Fehler auftreten.



//PFEILFUNKTION
class Hero {
    constructor(name) {
      this.heroName = name;
      this.logName = () => {
        console.log(this.heroName);
      };
    }
  }
  
  const superman2 = new Hero('Superman');
  const batman3 = new Hero('Batman');
  
  superman.logName(); // Ausgabe: Superman
  batman.logName();   // Ausgabe: Batman
// Im Gegensatz dazu wird bei der Verwendung einer Pfeilfunktion das this-Schlüsselwort lexikalisch (statisch) gebunden. Das bedeutet, dass this den Wert beibehält, den es zum Zeitpunkt der Definition der Funktion hatte, unabhängig davon, wie die Funktion aufgerufen wird. In diesem Fall wird this also den Wert des äußeren Kontextes haben, in dem die Pfeilfunktion definiert wurde. Oft wird das genutzt, um das Problem von this in JavaScript zu umgehen, insbesondere in Callbacks oder verschachtelten Funktionen.
  
class Hero {
    constructor(name) {
      this.heroName = name;
      this.logName = () => {
        console.log(this.heroName);
      };
    }
  }
  
  const superman5 = new Hero('Superman');
  const batman6 = new Hero('Batman');
  
  const logSupermanName2 = superman.logName;
  logSupermanName2(); // Ausgabe: Superman
  
//   Im Gegensatz dazu wird this in der Pfeilfunktion lexikalisch gebunden, was bedeutet, dass es sich auf den Wert von this bezieht, der zum Zeitpunkt der Definition der Funktion existiert. In diesem Fall bleibt this immer auf die Instanz von Hero bezogen, unabhängig davon, wie oder wo die Methode aufgerufen wird.