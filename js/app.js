'use strict';

let testPage = document.getElementById('test');
console.log(testPage);
let tableBody = document.querySelector('tbody');
console.log(tableBody);
let tableHead = document.querySelector('thead');
console.log(tableHead);
let tableFooter = document.querySelector('tfoot');
console.log(tableFooter);


// GlobVar1: Time of days
let timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(timeOfDay);
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
  // console.log(getRandomCustPerHour());
  // all tests pass
  // end of Func1


  // Func2: Generates a number from Global1 * Global2
  function cookiesPerHour() {
    for (let i = 0; i < timeOfDay.length; i++) {
    let customersThisHour = getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * avg);
    sales.push(cookiesSoldThisHour);
    totals += cookiesSoldThisHour;
    console.log(totals);
    console.log(sales);
    }
  } 
  cookiesPerHour();
  console.log(sales);

  this.renderTable = function() {
    let trData = document.createElement('tr');
    tableBody.appendChild(trData);

    for (let i = 0; i < sales.length; i++) {
      let tdCookies = document.createElement('td');
      tableBody.appendChild(tdCookies);
      tdCookies.textContent = sales[i];
    }
  } 
  this.renderTable();
  // console.log(totals);
}


this.renderTableFooter = function() {
  cookiesPerHour();
  for (let i = 0; i < timeOfDay.length; i++) {
  let tfData = document.createElement('tr');
  tableFooter.appendChild(tfData);
  tfData.textContent = totals;
  }
}



function renderTableHeader() {
  for (let i = 0; i < timeOfDay.length; i++) {
    let thData = document.createElement('th');
    tableHead.appendChild(thData);
    thData.textContent = timeOfDay[i];
  }
}
renderTableHeader();

// function renderTableFooter() {
//   for (let i = 0; i < Store.totals.length; i++) {
//     let tfData = document.createElement('th');
//     tableFooter.appendChild(tfData);
//     tfData.textContent = Store.totals[i];
//   }
// }
// renderTableFooter();



// Section1: Stores data from ALL stores

let seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
let tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
let dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
let paris = new Store('Paris', 20, 38, 2.3, [], 0);
let lima = new Store('Lima', 2, 16, 4.6, [], 0);

function renderStoreName() {

console.log(storeName);
}

console.log();

this.renderTableFooter(seattle);

// console.log(tokyo);
// console.log(dubai);
// console.log(paris);
// console.log(lima);
// all tests pass
// end of Section1

// this.render function () {
//   this.getTime();
//   let list = document.createElement('ul');
//   mypage.appendChild(list);
//   list.textContent = `${this.name}`;
//   for (let i = 0; i < this.sales.length; i++) {
//     let listAmt = document.createElement('li');
//     list.appendChild(listAmt);
//     listAmt.textContent = `${timeOfDay[i]}: ${this.sales[i]}`;
//   }
//   let totalAmt = document.createElement('li');
//   list.appendChild(totalAmt);
//   totalAmt.textContent = `Total: ${this.totalSale}`;
// }
