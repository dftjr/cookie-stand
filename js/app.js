'use strict';

let tableBody = document.querySelector('tbody');
let tableHead = document.querySelector('thead');
let tableFooter = document.querySelector('tfoot');

let timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

let storeArray = [seattle, tokyo, dubai, paris, lima];
let finalTotal = [];

console.log('form js');
let storeForm = document.getElementById('addStoreForm');
function storeSubmit (event) {
  event.preventDefault();
  let name = event.target.name.value;
  let min = parseInt(event.target.min.value, 10);
  let max = parseInt(event.target.max.value, 10);
  let avg = parseInt(event.target.avg.value, 10);

  let addStore = new Store(name, min, max, avg);
  storeArray.push(addStore);
  finalTotal += addStore;

  document.getElementById('tbody').deleteRow(-1);
  renderTableFooter();


}
storeForm.addEventListener('submit', storeSubmit);









function dailyTotal () {
  let newTotal = 0;
  finalTotal =[];
  for (let j = 0; j < timeOfDay.length; j++) {
    newTotal = 0;
    for (let i = 0; i < storeArray.length; i++) {
    newTotal += storeArray[i].sales[j];
  }
  finalTotal.push(newTotal);
  }
}
dailyTotal();

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
    }
  } 
  this.cookiesPerHour();
  
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

    let thTotals = document.createElement('td');
    trRow.appendChild(thTotals);
    thTotals.textContent = this.totals;
  } 
  this.renderTable();
}

function renderTableFooter() {
  let tfLable = document.createElement('td');
  let total = document.createElement('td');
  tableFooter.appendChild(tfLable);
  tfLable.textContent = '';
  
  for (let i = 0; i < timeOfDay.length; i++) {
    let tfData = document.createElement('td');

    tableFooter.appendChild(tfData);
    tfData.textContent = finalTotal[i];
    total += finalTotal;
    console.log(finalTotal);
  }

  tableFooter.appendChild(thTotals);
  thTotals.textContent = 'Daily Totals';

}
renderTableFooter();


function renderTableHeader() {
  let thTopHeader = document.createElement('tr');
  let thLabel = document.createElement('th');
  let thTotals = document.createElement('th');
  
  tableHead.appendChild(thTopHeader);
  thTopHeader.textContent = 'Hours of Operation';
  
  tableHead.appendChild(thLabel);
  thLabel.textContent = 'Stores';
  
  for (let i = 0; i < timeOfDay.length; i++) {
    let thData = document.createElement('th');
    tableHead.appendChild(thData);
    thData.textContent = timeOfDay[i];
  }
  
  tableHead.appendChild(thTotals);
  thTotals.textContent = 'Daily Totals';
}
renderTableHeader();
