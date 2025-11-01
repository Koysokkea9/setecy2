// console.log("Hello, World!");
// console.log("Hello from JavaScript!");
// console.log("This is a sample JavaScript file.");
// // Add your JavaScript code here
// // new line added
// alert("Welcome to JavaScript programming!" +  "\n" + "Koy Sokkea"  +  "\n" + "Group SW4" );
// // output result
// document.writeln("This is output from JavaScript code.<br>");
// document.writeln("Name: Koy Sokkea <br>");
// document.writeln("Age: 21<br>");
// document.writeln("Address: Phnom Penh, Cambodia <br>");
// document.writeln("Group: SW4<br>");
// document.writeln("Hello, World! This is my first JavaScript program.<br>");
// document.writeln("I am learning JavaScript to enhance my web development skills.<br>");
// document.writeln("JavaScript allows me to create interactive web pages.<br>");
// document.writeln("I am excited to explore more about JavaScript and its capabilities!<br>");
// document.writeln("Thank you for visiting my JavaScript program!<br>");
// // end of output result
// console.log("End of JavaScript code.");
// // This is a comment line in JavaScript
// // You can write your code below this line
// console.log("This is another line of code.");
// // Feel free to modify and expand the code as needed
// console.log("JavaScript code execution completed.");


// Declare variables in JavaScript
let studentid = 1,
    age = 21;
    payment = 10000;
var studentname = "Koy Sokkea",
    gender = "Male",
    sub = "Web Development II";

// Format studentid = 1 => formatid = 001
let formatid = studentid.toString().padStart(3, "0");

// Format payment = 10000 => currency format
let paymentformat = payment.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
});

// Console output
console.log("1. My personal id: " + formatid);
console.log("2. My fullname is: " + studentname);
console.log("3. The gender: " + gender);
console.log("4. I'm " + age + " years old");
console.log("5. I'm studying with subject: " + sub);
console.log("6. Payment: " + paymentformat);

// Alert output
alert(
    "1. My personal student id: " + formatid + "\n" +
    "2. My fullname is: " + studentname + "\n" +
    "3. The gender: " + gender + "\n" +
    "4. I'm " + age + " years old\n" +
    "5. I'm studying with subject: " + sub + "\n" +
    "6. I will book payment with " + paymentformat
);
