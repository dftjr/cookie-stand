'use strict';

let testPage = document.getElementById('test');
console.log(testPage);
let tableBody = document.querySelector('tbody');
console.log(tableBody);
let tableHead = document.querySelector('thead');
console.log(tableHead);
let tableFooter = document.querySelector('tfoot');
console.log(tableFooter);


let timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, min, max, avg, sales, totals) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sales = [];
  this.totals = 0;

  function getRandomCustPerHour() {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
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
    let trRow = document.createElement('tr');
    tableBody.appendChild(trRow);

    let tdName = document.createElement('td');
    trRow.appendChild(tdName);
    tdName.textContent = name;

    for (let i = 0; i < sales.length; i++) {
      let tdCookies = document.createElement('td');
      trRow.appendChild(tdCookies);
      tdCookies.textContent = sales[i];
    }

    let tdTotal = document.createElement('td');
    trRow.appendChild(tdTotal);
    tdTotal.textContent = totals;
  } 
  this.renderTable();
}

function renderTableFooter() {
  for (let i = -1; i < timeOfDay.length; i++) {
    let thData = document.createElement('td');
    tableFooter.appendChild(thData);
    thData.textContent = timeOfDay[i];
  }
}
renderTableFooter();

function renderTableHeader() {
  for (let i = -1; i < timeOfDay.length; i++) {
    let thData = document.createElement('th');
    tableHead.appendChild(thData);
    thData.textContent = timeOfDay[i];
  }
}
renderTableHeader();


let seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
let tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
let dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
let paris = new Store('Paris', 20, 38, 2.3, [], 0);
let lima = new Store('Lima', 2, 16, 4.6, [], 0);

