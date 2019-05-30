/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding - The 'this' value will will only be the console or window main object.
* 2. Implicit Binding - Automatic; when a function is called by the object to the left of the '.' Also known as a method. Most commonly used.
* 3. New binding - Constructor functions; recieves objects and produce new objects. Capitalized; 'this' becomes the object which will be returned by 'new'.
* 4. Explicit Binding - Explicitly defined by call or apply methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myClass(cohort) {
    console.log(this);
    return cohort;
  }
  myClass("WebPT17");


// Principle 2

// code example for Implicit Binding
const myIncome = {
    sound: 'Ching-ching!',
    countMoney: function(money) {
      console.log(`The ${money} says ${this.sound}`);
      console.log(this);
     }
  };
  myIncome.countMoney('Twenty');

// Principle 3

// code example for New Binding

function NewCar(car) {
    this.motorSound = 'Varooom-varoom';
    this.car = car;
    this.race = function() {
      console.log(`The ${this.car} goes ${this.motorSound} down the alley!`);
      console.log(this);
    };
  }
  
  const ford = new NewCar('Mustang');
  const dodge = new NewCar('Charger');
  
  ford.race();
  dodge.race();

// Principle 4

// code example for Explicit Binding
function NewCar(car) {
    this.motorSound = 'Varooom-varoom';
    this.car = car;
    this.race = function() {
      console.log(`The ${this.car} goes ${this.motorSound} down the alley!`);
      console.log(this);
    };
  }
  
  const ford = new NewCar('Mustang');
  const dodge = new NewCar('Charger');
  
  ford.race.call(dodge);