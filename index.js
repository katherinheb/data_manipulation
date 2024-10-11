// // The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


const distance = 1500; // miles
const speed_1 = 55; // 55 mph
const speed_2 = 60; // 60 mph
const speed_3 = 75; // 75 mph

const fuel_efficieny_55 = 30; // fuel effecieny of 30 miles/gallon at 55mph
const fuel_efficieny_60 = 40; // fuel effecieny of 40 miles/gallon at 60mph
const fuel_efficieny_75 = 55; // fuel effecieny of 55 miles/gallon at 75mph

const budget = 175; // 175 dollars
const avg_fuel_cost = 3; // 3 dollars/gallon

// // How many gallons of fuel will you need for the entire trip?
let total_gallons_55 = distance * (1 / fuel_efficieny_55);
let total_gallon_60 = distance * (1 / fuel_efficieny_60);
let total_gallon_75 = distance * ( 1/ fuel_efficieny_75);

// Will your budget be enoguh for the trip?
let cost_55 = total_gallons_55 * avg_fuel_cost;
let cost_60 = total_gallon_60 * avg_fuel_cost;
let cost_75 = total_gallon_75 * avg_fuel_cost;

let enough_55 = budget > cost_55;
let enough_60 = budget > cost_60;
let enough_75 = budget > cost_75;

let results_55 = `At 55mph ${total_gallons_55} total gallons will be required for the trip. The cost will be ${cost_55}. It is ${enough_55} that the budget is enough for the trip at 55mph`;

let results_60 = `At 60mph ${total_gallon_60} total gallons will be required for the trip. The cost will be ${cost_60}. It is ${enough_60} that the budget is enough for the trip at 60mph`;

let results_75 = `At 75mph ${total_gallon_75} total gallons will be required for the trip. The cost will be ${cost_75}. It is ${enough_75} that the budget is enough for the trip at 75mph`;

console.log(results_55);
console.log(results_60);
console.log(results_75);


let yourMoney = 50
let catPrice = 100

let price = (yourMoney == catPrice) 
{
console.log ('You have just enough to buy a cat'); } 
 if (yourMoney > catPrice) {
console.log ('you can buy a cat and will have dollares left over')
} else {
    console.log ('You cannot buy a cat. You need more dollars')
}