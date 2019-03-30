'use strict';
/* global $ */
// create an object that tracks the state of the meal that's entered
const calculator = {
  earnings: [
    {tipTotal: 0, mealCount: 0, averageTip: 0}
  ],
  meal: {mealPrice: 0, taxRate: 0, tipPercentage: 0}
};

function renderCalculator() {
  $('body').html(`
  <header>
      <h1>Waitstaff Calculator</h1>
  </header>
  <div class = "container">
    <form class="details">
      <h2 class = "form-title">Enter the Meal Details</h2>
      <span>Base Meal Price: $ <input class = "medium js-meal-price" type="text" placeholder = "9.99"></span></br>
      <span>Tax Rate: % <input class = "short js-tax-rate" type="text" placeholder = "0.1"></span></br>
      <span>Tip Percentage: % <input class = "short js-tip-percentage" type="text" placeholder = "0.2"></span></br>
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
        <span class = "js-tip-total">Tip Total: ${calculator.earnings[0].tipTotal.toFixed(2)}</span></br>
        <span class="js-meal-count">Meal Count: ${calculator.earnings[0].mealCount}</span></br>
        <span class="js-average-tip">Average Tip Per Meal: ${calculator.earnings[0].averageTip}</span></br>
      </div>
    </div>  
  </div>
  <button type = "reset" class = "button js-reset-button">Reset</button>
  `);
}

function handleMealSubmit() {
  // this should capture the submission of each meal detail
  $('.details').submit(function(event) {
    event.preventDefault();
    const mealPrice = parseFloat($('.js-meal-price').val());
    const taxRate = parseFloat($('.js-tax-rate').val());
    const tipPercentage = parseFloat($('.js-tip-percentage').val());
    const tip = mealPrice * tipPercentage;
    const tax = mealPrice * taxRate;
    const subtotal = mealPrice + tax;
    const total = tip + subtotal;
    $('.js-subtotal').text(`Subtotal ${subtotal.toFixed(2)}`);
    $('.js-tip').text(`Tip ${tip.toFixed(2)}`);
    $('.js-total').text(`Total ${total.toFixed(2)}`);
    calculator.earnings[0].tipTotal = tip;
    calculator.earnings[0].mealCount++;
    $('.js-tip-total').text(`Tip Total: ${tip.toFixed(2)}`);
    $('.js-meal-count').text(`Meal Count: ${calculator.earnings[0].mealCount}`);
    const averageTip = calculator.earnings[0].tipTotal / calculator.earnings[0].mealCount;
    $('.js-average-tip').text(`Average Tip Per Meal: ${averageTip.toFixed(2)}`);
  });
}

function handleCancel() {
  $('.js-cancel-button').on('click', function(event) {
    renderCalculator();
  });
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
  $('.js-reset-button').on('click', function(event) {
    console.log('hello');
    calculator.earnings[0].tipTotal = 0;
    calculator.earnings[0].mealCount = 0;
    calculator.earnings[0].averageTip = 0;
    renderCalculator();
  });
}

function handleCalculator () {
  renderCalculator();
  handleMealSubmit();
  handleCancel();
  handleResetCalc();
  // this should call all event listeners and handlers, as well as the function that renders the page
}

$(handleCalculator);