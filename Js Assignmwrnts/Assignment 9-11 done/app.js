// Question 1

// let cityName = prompt("Enter your city name")

// if (cityName == "Karachi" || "karachi") {
//     alert("Welcome to city of lights")
// }

// Question 2

// let gender = prompt("Enter your gender");
// if (gender == "Male") {
//     alert("Good Morning Sir!");
// }
// else if(gender == "Female"){
//     alert("Good Morning Ma'am!");
// }
// else{
//     alert("Please enter Male or Female");
// }


// Question 3

// let signColor = prompt("Enter the color of signals");
// if (signColor === "red") {
//   document.write("Signal color: " + signColor + "<br>");
//   document.write("Message: Must Stop");
// } 
// else if (signColor === "yellow") {
//   document.write("Signal color: " + signColor + "<br>");
//   document.write("Message: Ready to move");
// }
// else if (signColor === "green") {
//  document.write("Signal color: " + signColor + "<br>");
//  document.write("Message: Move now");
// } 
// else {
//   document.write("Invalid signal color!");
// }


// Question 4

// let fuel = +prompt("Enter remaining fuel in car (in litres)");
// if ( fuel <= 0.25) {
//   document.write("Please refill the fuel in your car");
// }
// else { 
//   document.write("You have enough fuel to continue your journey");
// }


// // Question 5

// a. alert message will be displayed.
//  b. Alert message will not be displayed.
//  c. The alert message will be displayed.
//  d. Alert message will be displayed.
//  e. Alert message for True will be displayed.
//  f. Alert message for car will not be displayed.

// Question 6

// let subject1 = +prompt("Enter marks obtained in Subject 1:");
// let subject2 = +prompt("Enter marks obtained in Subject 2:");
// let subject3 = +prompt("Enter marks obtained in Subject 3:");
// let totalMarks = +prompt("Enter total marks:");
// let totalObtainedMarks = subject1 + subject2 + subject3;
// let percentage = (totalObtainedMarks / totalMarks) * 100;
// let grade, remarks;
// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);


// Question 7

// let secNum = Math.round(Math.random() * 10) + 1;
// let guess = +prompt("Guess the secret number (between 1 and 10):");
// if (guess === secNum) {
//   alert("Bingo! Correct answer.");
// }
// else if (guess == secNum + 1 || guess == secNum - 1) {
//   alert("Close enough to the correct answer.");
// }
// else {
//   alert("Sorry, try again.");
// };


// Question 8

// let num = prompt("Enter any number:");
// if (num % 3 === 0) {
//   alert("The number is divisible by 3");
// }
// else {
//   alert("The number is not divisible by 3");
// };


// Question 9

// let number = +prompt("Enter any number: ");
// if (number % 2 === 0) {
//   alert(number + " is an even number.");
// } 
// else {
//   alert(number + " is an odd number.");
// ;}


// Question 10

// let temp = prompt("Enter the temperature:");
// if (temp > 40) {
//   alert("It is too hot outside.");
// } 
// else if (temp > 30) {
//   alert("The Weather today is Normal.");
// } 
// else if (temp > 20) {
//   alert("Today’s Weather is cool.");
// } 
// else if (temp > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } 
// else {
//   alert("Temperature is too low.");
// };


// Question 11

// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let operation = prompt("Enter operation (+, -, *, /, %):");
// if (operation === "+") {
//   var result = num1 + num2;
//   alert("Result: " + result);
// } 
// else if (operation === "-") {
//   var result = num1 - num2;
//   alert("Result: " + result);
// } 
// else if (operation === "*") {
//   var result = num1 * num2;
//   alert("Result: " + result);
// } 
// else if (operation === "/") {
//   var result = num1 / num2;
//   alert("Result: " + result);
// } 
// else if (operation === "%") {
//   var result = num1 % num2;
//   alert("Result: " + result);
// }
// else {
//   alert("Invalid operation!");
// };
