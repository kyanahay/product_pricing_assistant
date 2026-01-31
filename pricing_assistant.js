// Product Pricing Assistant

console.log("Hello Mr. Reed from Ky behind the console.")

// Declare variables

const productName= "Nail Tech Salon Chair"

const cosPerUnit= 499.99
const basePrice= 649.99
const discountRate= 0.2
const salesTaxRate= 0.075
const fixedMonthlyCosts= 5000

//Calculate Pricing and Profit Metrics

const discountedPrice = basePrice*(1 - discountRate)

const finalPriceWithTax = discountedPrice * (1 + salesTaxRate)

const profitPerUnit = finalPriceWithTax - cosPerUnit

const breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)

const isProfitablePerUnit = profitPerUnit > 0

//Print to Console 

console.log("Product Name:", productName)
console.log("Discounted Price:", discountedPrice)
console.log("Final Price with Tax:", finalPriceWithTax)
console.log("Profit Per Unit:", profitPerUnit)
console.log("Break Even Units:", breakEvenUnits)
console.log("Is Profitable Per Unit:", isProfitablePerUnit)