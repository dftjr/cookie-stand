'use strict';

let testPage = document.getElementById('test');
console.log(testPage);


// GlobVar1: Time of days
let timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(timeOfDay);
// all tests pass
// end of GlobVar1


// Constructor: Creates a new store from data saved in Section1
// Section1: Data placeholders
function Store(name, min, max, avg, sales, totals) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sales = [];
  this.totals = 0;
  // all tests pass
  // end of Section1


  // Func1: Generates random number
  function getRandomCustPerHour() {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(getRandomCustPerHour());
  // all tests pass
  // end of Func1


  // Func2: Generates a number from Global1 * Global2
  function cookiesPerHour() {
    let customersThisHour = getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * avg);
    return cookiesSoldThisHour;
  }
  console.log(cookiesPerHour());
  // all tests pass
  // end of Func2


  // Func3: Generates an array of numbers from Global2 * GlobVar1
  function getTime() {
    for (let i = 0; i < timeOfDay.length; i++) {
      let value = cookiesPerHour();
      sales.push(value);
      totals += value;
      console.log(totals);
      console.log(sales);
    }
  }
  getTime();
}// all tests pass
  // end of Func3
// }


// Section1: Stores data from ALL stores

let seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
let tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
let dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
let paris = new Store('Paris', 20, 38, 2.3, [], 0);
let lima = new Store('Lima', 2, 16, 4.6, [], 0);
console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
// all tests pass
// end of Section1
