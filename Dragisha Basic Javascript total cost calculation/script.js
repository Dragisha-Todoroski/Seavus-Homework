var iPhone = 119.95;
var iPhone_count = 30;
var tax_rate = 0.05;  // можеме со tax_rate = 5/100;

var total_price = iPhone*iPhone_count+(iPhone*iPhone_count*tax_rate);
console.log(`If an iPhone's cost is $119.95, the total amount of sold iPhones is 30, and the tax rate is 5%, then the total price is ${total_price}.`);