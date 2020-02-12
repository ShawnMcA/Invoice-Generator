// ======================================================
//  
//  Program which takes an invoice number and amount
//  from the user and returns the invoice information with 
//  sales tax and an invoice total. 
//
// ======================================================

"use strict";

// Creates invoice objects
function CreatePurchase(userInvoice, userSaleAmount){
    const tax = 0.075; // Sales tax rate for the area
    this.invNumber = userInvoice;
    this.saleAmount = userSaleAmount;
    this.salesTax = Math.floor((this.saleAmount * tax) * 100) / 100; 
    this.invoiceTotal = Math.floor((this.saleAmount + this.salesTax) * 100) / 100;

    // Inv number setter
    this.setInvNumber = function (invNumber) {
        this.invNumber = invNumber;
    }

    // Inv number getter
    this.getInvNumber = () => this.invNumber;

    // Sale Amount setter. Adjusts new sales tax and invoice total.
    this.setSaleAmount = function (saleAmount){
        this.saleAmount = saleAmount;
        this.salesTax = Math.floor((this.saleAmount * tax) * 100) / 100;
        this.invoiceTotal = Math.floor((this.saleAmount + this.salesTax) * 100) / 100;
    }

    // Sale Amount getter
    this.getSaleAmount = () => this.saleAmount;

    // Invoice total getter
    this.getInvoiceTotal = () => this.invoiceTotal;

    // Outputs invoice information
    this.displayInv = function () {
        alert((`Inv Number: ${this.invNumber}\n`) +
            (`Sale Amount: $${this.saleAmount}\n`) +
            (`Sales Tax: $${this.salesTax}\n`) +
            (`Invoice Total: $${this.invoiceTotal}`));
    }
}

// Confirms input is in the correct format 
// and removes the option of a negative
function validatePositiveInput(input){
    let compare = /^[0-9]+\.?[0-9]*$/;
    if(input.match(compare)) return true;
}

// Main logic
(function main(){
    let userInvoice;
    let userSaleAmount;
    
    userInvoice = prompt("Please enter an invoice number: ");

    // While exists
    while(!userInvoice) {
        alert("Sorry, you must enter an invoice number");
        userInvoice = prompt("Please enter an invoice number: ");
    }

    userSaleAmount = prompt("Please enter an invoice amount: ");

    // While exists and valid format
    while(!userSaleAmount || !validatePositiveInput(userSaleAmount)){
        alert("Sorry, that isn't a valid response.");
        userSaleAmount = prompt("Please enter an invoice amount: ");
    };

    // New invoice object with user information
    const Invoice1 = new CreatePurchase(userInvoice, +userSaleAmount);

    // Test output
    Invoice1.displayInv();
})();


