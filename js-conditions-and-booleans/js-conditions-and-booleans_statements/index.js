console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
let message =
  receivedPassword === SUPER_SECRET_PASSWORD
    ? "Welcome! You are logged in as Brunhilde1984."
    : "Access denied!";
console.log(message);

// Part 2: Even / Odd
const number = 6;
let result = number % 2 === 0 ? "Even number" : "Odd number";
console.log(number + " is", result);
// Part 3: Hotdogs
const numberOfHotdogs = 42;
let price = 0;
if (numberOfHotdogs <= 5) {
  price = 2.0;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  price = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  price = 1.0;
} else if (numberOfHotdogs >= 1000000) {
  price = 0.1;
}
console.log("Price per hotdog:", price);
console.log("Total Amount:", numberOfHotdogs * price);

// Part 4: Daytime
const currentHour = 12;

//const statement = "";
const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "coach" ? "Coach" : userName) + "!";

console.log(greeting);
