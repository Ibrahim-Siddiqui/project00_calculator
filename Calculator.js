// Simple Command Line Calculator
// Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.
// Create a GitHub repository for the project and submit its URL and NPX command in
// the project submission form. Please note that you will create a NPX command for
// your project and publish it on npm. After the NPX command is working you will
// announce it on Panaverse groups on Facebook, Discord, and Twitter.
import inquirer from "inquirer";
while (true) {
    let numberCal = await inquirer.prompt([
        {
            type: "list",
            name: "numbers",
            choices: [2, 3, 4, 5],
            message: "How many numbers you want to calculate? ",
        }
    ]);
    if (numberCal.numbers === 2) {
        let user = await inquirer.prompt([
            {
                type: "number",
                name: "number1",
                message: "Enter number1: ",
            },
            {
                type: "number",
                name: "number2",
                message: "Enter number2: ",
            },
            {
                type: "list",
                name: "Operator",
                choices: ["+", "-", "*", "/", "%", "^"],
                message: "Select Operator:",
            },
        ]);
        if (user.Operator === "+") {
            console.log("The Sum is: ", user.number1 + user.number2);
        }
        else if (user.Operator === "-") {
            console.log("The Subtraction is: ", user.number1 - user.number2);
        }
        else if (user.Operator === "*") {
            console.log("The Multiplication is: ", user.number1 * user.number2);
        }
        else if (user.Operator === "/") {
            console.log("The division is: ", user.number1 / user.number2);
        }
        else if (user.Operator === "%") {
            console.log("The Remainder is: ", user.number1 % user.number2);
        }
        else if (user.Operator === "^") {
            console.log("The Power is: ", user.number1 ** user.number2);
        }
        else {
            console.log("Enter correct operator");
        }
    }
    else if (numberCal.numbers === 3) {
        let user = await inquirer.prompt([
            {
                type: "number",
                name: "number1",
                message: "Enter number1: ",
            },
            {
                type: "number",
                name: "number2",
                message: "Enter number2: ",
            },
            {
                type: "number",
                name: "number3",
                message: "Enter number3: ",
            },
            {
                type: "list",
                name: "Operator",
                choices: ["+", "-", "*", "/"],
                message: "Select Operator:",
            },
        ]);
        if (user.Operator === "+") {
            console.log("The Sum is: ", user.number1 + user.number2 + user.number3);
        }
        else if (user.Operator === "-") {
            console.log("The Subtraction is: ", user.number1 - user.number2 - user.number3);
        }
        else if (user.Operator === "*") {
            console.log("The Multiplication is: ", user.number1 * user.number2 * user.number3);
        }
        else if (user.Operator === "/") {
            console.log("The division is: ", user.number1 / user.number2 / user.number3);
        }
        else {
            console.log("Enter correct operator");
        }
    }
    else if (numberCal.numbers === 4) {
        let user = await inquirer.prompt([
            {
                type: "number",
                name: "number1",
                message: "Enter number1: ",
            },
            {
                type: "number",
                name: "number2",
                message: "Enter number2: ",
            },
            {
                type: "number",
                name: "number3",
                message: "Enter number3: ",
            },
            {
                type: "number",
                name: "number4",
                message: "Enter number4: ",
            },
            {
                type: "list",
                name: "Operator",
                choices: ["+", "-", "*", "/"],
                message: "Select Operator:",
            },
        ]);
        if (user.Operator === "+") {
            console.log("The Sum is: ", user.number1 + user.number2 + user.number3 + user.number4);
        }
        else if (user.Operator === "-") {
            console.log("The Subtraction is: ", user.number1 - user.number2 - user.number3 - user.number4);
        }
        else if (user.Operator === "*") {
            console.log("The Multiplication is: ", user.number1 * user.number2 * user.number3 * user.number4);
        }
        else if (user.Operator === "/") {
            console.log("The division is: ", user.number1 / user.number2 / user.number3 / user.number4);
        }
        else {
            console.log("Enter correct operator");
        }
    }
    else if (numberCal.numbers === 5) {
        let user = await inquirer.prompt([
            {
                type: "number",
                name: "number1",
                message: "Enter number1: ",
            },
            {
                type: "number",
                name: "number2",
                message: "Enter number2: ",
            },
            {
                type: "number",
                name: "number3",
                message: "Enter number3: ",
            },
            {
                type: "number",
                name: "number4",
                message: "Enter number4: ",
            },
            {
                type: "number",
                name: "number5",
                message: "Enter number5: ",
            },
            {
                type: "list",
                name: "Operator",
                choices: ["+", "-", "*", "/"],
                message: "Select Operator:",
            },
        ]);
        if (user.Operator === "+") {
            console.log("The Sum is: ", user.number1 + user.number2 + user.number3 + user.number4 + user.number5);
        }
        else if (user.Operator === "-") {
            console.log("The Subtraction is: ", user.number1 - user.number2 - user.number3 - user.number4 - user.number5);
        }
        else if (user.Operator === "*") {
            console.log("The Multiplication is: ", user.number1 * user.number2 * user.number3 * user.number4 * user.number5);
        }
        else if (user.Operator === "/") {
            console.log("The division is: ", user.number1 / user.number2 / user.number3 / user.number4 / user.number5);
        }
        else {
            console.log("Enter correct operator");
        }
    }
    else {
        console.log("You can calculate only 5 number");
    }
    let outLoop = await inquirer.prompt([
        {
            type: "confirm",
            name: "continueCalculation",
            message: "Do you want to perform another calculation? ",
        }
    ]);
    if (!outLoop.continueCalculation)
        break;
}
