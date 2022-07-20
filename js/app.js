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

  this.getRandomCustPerHour = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
  
  this.cookiesPerHour = function() {
    for (let i = 0; i < timeOfDay.length; i++) {
    let customersThisHour = this.getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    this.sales.push(cookiesSoldThisHour);
    this.totals += cookiesSoldThisHour;
    console.log(this.totals);
    console.log(this.sales);
    }
  } 
  this.cookiesPerHour();
  console.log(this.sales)
  
  
  this.renderTable = function() {
    let trRow = document.createElement('tr');
    tableBody.appendChild(trRow);

    let tdName = document.createElement('td');
    trRow.appendChild(tdName);
    tdName.textContent = this.name;

    for (let i = 0; i < this.sales.length; i++) {
      let tdCookies = document.createElement('td');
      trRow.appendChild(tdCookies);
      tdCookies.textContent = this.sales[i];
    }

    let tdTotal = document.createElement('td');
    trRow.appendChild(tdTotal);
    tdTotal.textContent = this.totals;
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


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);
