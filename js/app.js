'use strict';

console.log('test');

let timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let mypage = document.getElementById('salesdata');
let tableBody = document.querySelector('tbody');
// let tableHead
// let tableFooter
console.log(tableBody);

// STORE LOCATIONS & STATS
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  sales: [],
  totalSale: 0,
  getRandomCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {
    let customersThisHour = this.getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return (cookiesSoldThisHour);
  },
  getTime: function () {
    for (let i = 0; i < timeOfDay.length; i++) {
      let value = this.cookiesPerHour();
      this.sales.push(value);
      this.totalSale += value;
    }
  },
  render: function () {
    this.getTime();
    let list = document.createElement('ul');
    mypage.appendChild(list);
    list.textContent = `${this.name}`;
    for (let i = 0; i < this.sales.length; i++) {
      let listAmt = document.createElement('li');
      list.appendChild(listAmt);
      listAmt.textContent = `${timeOfDay[i]}: ${this.sales[i]}`;
    }
    let totalAmt = document.createElement('li');
    list.appendChild(totalAmt);
    totalAmt.textContent = `Total: ${this.totalSale}`;
  },
}

seattle.render();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  sales: [],
  totalSale: 0,
  getRandomCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {
    let customersThisHour = this.getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return (cookiesSoldThisHour);
  },
  getTime: function () {
    for (let i = 0; i < timeOfDay.length; i++) {
      let value = this.cookiesPerHour();
      this.sales.push(value);
      this.totalSale += value;
    }
  },
  render: function () {
    this.getTime();
    let list = document.createElement('ul');
    mypage.appendChild(list);
    list.textContent = `${this.name}`;
    for (let i = 0; i < this.sales.length; i++) {
      let listAmt = document.createElement('li');
      list.appendChild(listAmt);
      listAmt.textContent = `${timeOfDay[i]}: ${this.sales[i]}`;
    }
    let totalAmt = document.createElement('li');
    list.appendChild(totalAmt);
    totalAmt.textContent = `Total: ${this.totalSale}`;
  },
}

tokyo.render();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  sales: [],
  totalSale: 0,
  getRandomCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {
    let customersThisHour = this.getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return (cookiesSoldThisHour);
  },
  getTime: function () {
    for (let i = 0; i < timeOfDay.length; i++) {
      let value = this.cookiesPerHour();
      this.sales.push(value);
      this.totalSale += value;
    }
  },
  render: function () {
    this.getTime();
    let list = document.createElement('ul');
    mypage.appendChild(list);
    list.textContent = `${this.name}`;
    for (let i = 0; i < this.sales.length; i++) {
      let listAmt = document.createElement('li');
      list.appendChild(listAmt);
      listAmt.textContent = `${timeOfDay[i]}: ${this.sales[i]}`;
    }
    let totalAmt = document.createElement('li');
    list.appendChild(totalAmt);
    totalAmt.textContent = `Total: ${this.totalSale}`;
  },
}

dubai.render();

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  sales: [],
  totalSale: 0,
  getRandomCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {
    let customersThisHour = this.getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return (cookiesSoldThisHour);
  },
  getTime: function () {
    for (let i = 0; i < timeOfDay.length; i++) {
      let value = this.cookiesPerHour();
      this.sales.push(value);
      this.totalSale += value;
    }
  },
  render: function () {
    this.getTime();
    let list = document.createElement('ul');
    mypage.appendChild(list);
    list.textContent = `${this.name}`;
    for (let i = 0; i < this.sales.length; i++) {
      let listAmt = document.createElement('li');
      list.appendChild(listAmt);
      listAmt.textContent = `${timeOfDay[i]}: ${this.sales[i]}`;
    }
    let totalAmt = document.createElement('li');
    list.appendChild(totalAmt);
    totalAmt.textContent = `Total: ${this.totalSale}`;
  },
}

paris.render();

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  sales: [],
  totalSale: 0,
  getRandomCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {
    let customersThisHour = this.getRandomCustPerHour();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return (cookiesSoldThisHour);
  },
  getTime: function () {
    for (let i = 0; i < timeOfDay.length; i++) {
      let value = this.cookiesPerHour();
      this.sales.push(value);
      this.totalSale += value;
    }
  },
  render: function () {
    this.getTime();
    let list = document.createElement('ul');
    mypage.appendChild(list);
    list.textContent = `${this.name}`;
    for (let i = 0; i < this.sales.length; i++) {
      let listAmt = document.createElement('li');
      list.appendChild(listAmt);
      listAmt.textContent = `${timeOfDay[i]}: ${this.sales[i]}`;
    }
    let totalAmt = document.createElement('li');
    list.appendChild(totalAmt);
    totalAmt.textContent = `Total: ${this.totalSale}`;
  },
}

lima.render();
