// alyan tariq

// --------------------------------------------------------------------------
// chapter 1  Question 1

// var greet = "Hello! Visitor how are you doing?"
// alert(greet)

// chapter 1 Question 2

// var error = "Error! Please enter a valid password"
// alert(error)

// chapter 1 Question 3

// var welcome = "Welcome to JS land... \nHappy Coding"
// alert(welcome)

// chapter 1 Question 4

// var welcome = "Welcome to JS land..."
// alert(welcome)
// var code = "Happy Coding!"
// alert(code)

// chapter 1 Question 5 will run in browser's console

// --------------------------------------------------------------------------

// chapter 2 Question 1

// var username;

// chapter 2 Question 2

// var myName = "Basil khan"

// chapter 2 Question 3

// var message = " Hello World"
// alert(message)

// chapter 2 Question 4

// var fullName = "John Doe"
// var age = "15"
// var profession = "Certified Mobile App Development"
// alert(fullName)
// alert(age)
// alert(profession)

// chapter 2 Question 5

// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"
// alert(pizza)

// chapter 2 Question 6

// var email = "basilkhan1250@gmail.com"
// alert("My email address is " + email)

// chapter 2 Question 7

// var book = "A Smarter Way To Learn Javascript"
// alert("I'm trying to learn form the book " + book)

// chapter 2 Question 8

// var script = "Yah! I can write HTML content through Javascript"
// document.write(script)

// chapter 2 Question 9

// var symbol = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(symbol)

// --------------------------------------------------------------------------

// chapter 3 Question 1

// var age = 19
// alert("I'm " + age + " years old")

// chapter 3 Question 2

// var visits = "You have visited this site 14 times"
// alert(visits)

// chapter 3 Question 3

// var birthYear = 2004
// document.write("My birth year is " + birthYear)
// document.write( "<br/>" + "Data type of my declared variable is " + typeof(birthYear))

// chapter 3 Question 4

// var user = prompt("enter you name")
// var product = prompt("how many shirts you want")
// var store = "XYZ-Clothingstore"
// document.write(user + " ordered " + product + " on " + store )
// ------------------------------------------------------------------------------------------
// chapter4 Q1

// var head = "<h1>Rules of naming JS variables</h1>"
// var num = "numbers"
// var dollar = "$"
// var dash = "_"
// document.write(head)
// document.write("variable names can only contain , " + num + "," + dollar + " and " + dash + " . " + "For Example : " + dollar + "my" + dash + "1stVariable <br/>" )
// document.write("variable must begin with a letter , " + dollar + " or " + dash + " . " + "For Example : " + dollar + "name, " + dash + "name or name <br/>")
// document.write("variables are case sensitive <br/>")
// document.write("variable names should not be JS keywords")

// ------------------------------------------------------------------------------------------

// chapter 5 Q1

// var num1 = 3;
// var num2 = 5;
// var num3 = num1 + num2;

// console.log('sum of' , num1 , "and" , num2 , "is" , num3);

// chapter 5 Q2

// (a)
// var num1 = 5;
// var num2 = 2;
// console.log(num1 - num2);

// // (b)

// var num1 = 5;
// var num2 = 2;
// console.log(num1 * num2);

// // (c)

// var num1 = 5;
// var num2 = 2;
// console.log(num1 + num2);

// // (d)

// var num1 = 5;
// var num2 = 2;
// console.log(num1 % num2);

// chapter 5 Q4

// var movietiket = 600;
// var buying = 5;

// document.write(
//   'total coast buy ' +
//     buying +
//     '   ticets to a movie is ' +
//     buying * movietiket +
//     'PKR');

// chapter 5 Q5

// var ask = +prompt('table');
//    for (var i = 1; i < 10; i++) {;
//     console.log(ask, 'x', i, '=', i * ask);
// };

// var table = 4;
// console.log(table, 'x 1 +', table * 1);
// console.log(table, 'x 2 +', table * 2);
// console.log(table, 'x 3 +', table * 3);
// console.log(table, 'x 4 +', table * 4);
// console.log(table, 'x 5 +', table * 5);
// console.log(table, 'x 6 +', table * 6);
// console.log(table, 'x 7 +', table * 7);
// console.log(table, 'x 8 +', table * 8);
// console.log(table, 'x 9 +', table * 9);
// console.log(table, 'x 10 +', table * 10);

// --------------------------------------------------------------------------------------

// (if / elas if)
// chapter12/13   Q8

// var ask = +prompt('enter a time');
// if (ask >= 0000 && ask < 1200) {
//   console.log('Good morning');
// } else if (ask >= 1200 && ask < 1700) {
//   console.log('Good afternon');
// } else if (ask >= 1700 && ask < 2100) {
//   console.log('Good evening');
// } else if (ask >= 2100 && ask <= 2359) {
//   console.log('Good night');
// }else {null}

// (10)

// var new1 = prompt('enter your new password');
// var new2 = prompt('enter a current password');
// if (new1 === new2) {
//   console.log('correct password');
// } else {
//   console.log('Error');
// }

// (11)

// var firstnaam = 'alyan';
// if(firstnaam == "fahad"){;
//   document.write(" hello fahad! ");
// }

// (12)

// var hour = 13;
// if (hour < 18) {
//   console.log('Good day ');
// } else {
//   console.log("good evening");
// }

// (15

// var num2 = +prompt("second number")
// function calculator(num1, num2, operator) {
//     if (operator === "+") {
//         document.write(num1 + num2)
//     }
//     else if (operator === "-") {
//         document.write(num1 - num2)
//     }
//     else if (operator === "/") {
//         document.write(num1 / num2)
//     }
//     else if (operator === "*") {
//         document.write(num1 * num2)
//     }
//     else if (operator === "%") {
//         document.write(num1 % num2)
//     }
//     else {
//         document.write("syntex error")
//     }
// }
// // calculator(num1, num2, operator))

// -------------------------------------------------------------------------------------------------------------------------------------------

// function
// (1)

// function sum() {
//   var naam = 'alyan';
//   console.log(naam);
// }
// sum();

// (2)

// function sum() {
//   var naam = 'alyan';
//   var lastnaam = ' tariq';
//   var fullnaam = naam + lastnaam;
//   console.log(fullnaam);
// }
// sum();

// (3)

// function time(){
// var currantdate = Date()
// console.log(currantdate);
// }
// time()

// (4)

// function plus() {
//   var num1 = 4;
//   var num2 = 5;
//   var num3 = num1 + num2;
//   console.log(num3);
// }
// plus();

// var num1 = +prompt('first number ');
// var operator = prompt('operator \n + \n - \n /  \n * \n % ');
// var num2 = +prompt('second number');
// function calculator(num1, num2, operator) {
//   if (operator === '+') {
//     document.write(num1 + num2);
//   } else if (operator === '-') {
//     document.write(num1 - num2);
//   } else if (operator === '/') {
//     document.write(num1 / num2);
//   } else if (operator === '*') {
//     document.write(num1 * num2);
//   } else if (operator === '%') {
//     document.write(num1 % num2);
//   } else {
//     document.write('syntex error');
//   }
// }
// calculator(num1, num2, operator);

// (5)
// var ask = +prompt('enter a number ');
// function suquare() {
//   var num = ask * ask;
//   console.log(num);
// }
// suquare();

// (6)

// function num() {
//   var ask1 = +prompt('enter a 1st number');
//   var ask2 = +prompt('enter a 2nd num ');
//   for (var i = ask1; i <= ask2; i++) {
//     console.log(i);
//   }
// }
// num();

// (7)

// function lanth() {
//   var naam = 'alyan';
//   var naam1 = naam.length;
//   console.log(naam1);
// }
// lanth();

// (8)

// let ask = prompt('enter');
// let joint = [];
// function firstWord(words) {
//   arr = words.split(' ');
//   for (var i = 0; i < arr.length; i++) {
//     array = arr[i].toUpperCase()[0] + arr[i].slice(1);
//     joint.push(array);
//   }
//   console.log(joint.join(' '));
// }
// firstWord(ask);

// (9)

// function birthday() {
//   var ask = +prompt(' enter your birthyear ');
//   var currentyear = 2024;
//   var birthday = currentyear - ask;
//   var birthday1 = 1 + birthday;
//   document.write('They are ', birthday, ' or ', birthday1, ' year old ');
// }
// birthday();







