var studentid = prompt("1. Enter your student id");
//format studentid: user input 1==> 001
var formatid = studentid.toString().padStart(4, 0);
var studentname = prompt("2. Enter your student name");
var gender = prompt("3. Enter your gender");
var subject = prompt("4. Enter your subject");
var payment = prompt("5. Enter yout payment");
var currency = new Intl.NumberFormat("en-Us", { style: "currency", currency: "USD" });
//format payment: currency 
//1. output result on console html
console.log("1. My personal id is:" + formatid);
console.log("2. I will booking payment with: " + currency.format(payment));
console.log("3. My personal name is: " + studentname);
console.log("4. My gender is: " + gender);
console.log("5. My subject is: " + subject);
//output result on html form
document.writeln("1. My personal id is:" + formatid + "<br>");
document.writeln("2. I will booking payment with: " + currency.format(payment) + "<br>");
document.writeln("3. My personal name is: " + studentname + "<br>");
document.writeln("4. My gender is: " + gender + "<br>");
document.writeln("5. My subject is: " + subject + "<br>");
// 2.output result on alert message
// 3.output result on alert message
alert("1.My personal id is: " + formatid + "\n" + "2.I will booking payment with: " + currency.format(payment) + "\n" + "3.My personal name is: " + studentname + "\n" + "4.My gender is: " + gender + "\n" + "5.My subject is: " + subject);
// alert("1.My personal name is" +studentname);


//en-US use for dollar in front the number
//de-DE use for dollar in back the number