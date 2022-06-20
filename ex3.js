// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

// Exercise 1

const todaysDate = () =>{
    const dateTime = new Date();
    console.log(`The current date and time is: ${dateTime}`);
}
todaysDate();

// Exercise 2
function myGreeting(){
    console.log('HELLO~~')
};
const timeout = setTimeout(myGreeting, 5000);

// Exercise 3
const CelToFah = celcius => Math.round(celcius *9/5 + 32);
console.log(CelToFah(16));

const FahToCel = fahrenheit => Math.round((fahrenheit-32) *5/9)
console.log(FahToCel(64));