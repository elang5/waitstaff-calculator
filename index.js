'use strict';
/* global $ */
// create an object that tracks the state of the meal that's entered
const earnings = {
  meals: [
    {price: 9.99, taxRate: .05, tip: .2},
    {price: 12.99, taxRate: .06, tip: .15}
  ]
};

function renderCalculator() {
  $('body').html(`
  <header>
      <h1>Waitstaff Calculator</h1>
  </header>
  <div class = "container">
    <form class="details">
      <h2 class = "form-title">Enter the Meal Details</h2>
      <span>Base Meal Price: $ <input class = "medium" type="text" placeholder = "9.99"></span></br>
      <span>Tax Rate: % <input class = "short" type="text" placeholder = "5"></span></br>
      <span>Tip Percentage: % <input class = "short" type="text" placeholder = "20"></span></br>
      <div class="container3">
        <button type = "submit" class = "button js-submit-button">Submit</button>
        <button type = "reset" class = "button js-cancel-button">Cancel</button>
    </div>
    </form>
    <div class="container2">
    <div class="charges">
      <h2 class = "form-title">Customer Charges</h2>
      <span class = "js-subtotal">Subtotal 0.00</span></br>
      <span class="js-tip">Tip 0.00</span></br>
      <span class="js-total">Total 0.00</span></br>
    </div>
    <div class="earnings">
        <h2 class = "form-title">My Earnings Info</h2>
        <span class = "js-tip-total">Tip Total: 0.00</span></br>
        <span class="js-meal-count">Meal Count: 0</span></br>
        <span class="js-average-tip">Average Tip Per Meal: 0.00</span></br>
      </div>
    </div>  
  </div>
  <button type = "reset" class = "button js-reset-button">Reset</button>
  `);
}


function enterMealDetails() {
  // There should be 3 event listeners in this function: base meal price, tax rate, tip percentage
}

function handleMealSubmit() {
  // this should capture the submission of each meal detail
}

function handleCancel() {
  // this should only reset the meal details form
}

function calculateTotal() {
  // subtotal = tax rate + base meal price
  // subtotal + tip
  // return total
  // update spans accordingly
}

function updateCustomerCharges() {
  // update customer charges based on what was entered in handleMealSubmit
}

function updateMyEarningsInfo() {
  // each time a tip is entered, the tip total should be updated
  // each time a meal is entered, mealCount++
  // average tip is tip total divided by meal count
}

function handleResetCalc() {
  // reset the form completely
}

function handleCalculator () {
  renderCalculator();
  // this should call all event listeners and handlers, as well as the function that renders the page
}

$(handleCalculator);