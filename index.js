'use strict';
/* global $ */
// create an object that tracks the state of the meal that's entered
const calculator = {
  earnings: [
    {tipTotal: 0, mealCount: 0, averageTip: 0}
  ],
  meal: [
    {tip: 0, subtotal: 0, total: 0}
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
      <span class = "js-subtotal">Subtotal ${calculator.meal[0].subtotal.toFixed(2)}</span></br>
      <span class="js-tip">Tip ${calculator.meal[0].tip.toFixed(2)}</span></br>
      <span class="js-total">Total ${calculator.meal[0].total.toFixed(2)}</span></br>
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


function updateMyEarningsInfo(mealPrice, tipPercentage) {
  // each time a tip is entered, the tip total should be updated
  calculator.earnings[0].tipTotal += (mealPrice * tipPercentage);
  // each time a meal is entered, mealCount++
  calculator.earnings[0].mealCount++;
  // average tip is tip total divided by meal count
  const averageTip = calculator.earnings[0].tipTotal / calculator.earnings[0].mealCount;
  $('.js-tip-total').html(`Tip Total: ${calculator.earnings[0].tipTotal.toFixed(2)}`);
  $('.js-meal-count').html(`Meal Count: ${calculator.earnings[0].mealCount}`);
  $('.js-average-tip').html(`Average Tip Per Meal: ${averageTip.toFixed(2)}`);
}

function handleMealSubmit() {
  // this should capture the submission of each meal detail
  $('.details').submit(function(event) {
    event.preventDefault();
    const mealPrice = parseFloat($('.js-meal-price').val());
    const taxRate = parseFloat($('.js-tax-rate').val());
    const tipPercentage = parseFloat($('.js-tip-percentage').val());
    calculateTotal(mealPrice, tipPercentage, taxRate);
    updateMyEarningsInfo(mealPrice, tipPercentage);
    $('.js-meal-price').val('');
    $('.js-tax-rate').val('');
    $('.js-tip-percentage').val('');
  });
}

function handleCancel() {
  // this should only reset the meal details form
  $('.js-cancel-button').on('click', function(event) {
    renderCalculator();
  });
}

function calculateTotal(mealPrice, tipPercentage, taxRate) {
  calculator.meal[0].tip = mealPrice * tipPercentage;
  const tax = mealPrice * taxRate;
  calculator.meal[0].subtotal = mealPrice + tax;
  calculator.meal[0].total = calculator.meal[0].subtotal + calculator.meal[0].tip;
  $('.js-subtotal').html(`Subtotal ${calculator.meal[0].subtotal.toFixed(2)}`);
  $('.js-tip').html(`Tip ${calculator.meal[0].tip.toFixed(2)}`);
  $('.js-total').html(`Total ${calculator.meal[0].total.toFixed(2)}`);
}


function handleResetCalc() {
  // reset the form completely
  $('.js-reset-button').on('click', function(event) {
    const defaultCalculator = {
      earnings: [
        {tipTotal: 0, mealCount: 0, averageTip: 0}
      ],
      meal: [
        {tip: 0, subtotal: 0, total: 0}
      ]
    };
    Object.assign(calculator, defaultCalculator);
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