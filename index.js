#! /usr/bin/env node
console.log("***CMD CALCULATOR***");
console.log("____________________\n");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Entre First number", type: "number", name: "firstnumber" },
    { message: "Enter Second Numbser", type: "number", name: "SecondNumber" },
    {
        message: "Enter operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "Multiplication", "Division"],
    }
]);
// Condition
if (answer.operator === "addition") {
    console.log(`Your Answer is "${answer.firstnumber} + ${answer.SecondNumber} = ${answer.firstnumber + answer.SecondNumber}"`);
}
else if (answer.operator === "Multiplication") {
    console.log(`Your Answer is "${answer.firstnumber} * ${answer.SecondNumber} = ${answer.firstnumber * answer.SecondNumber}"`);
}
else if (answer.operator === "subtraction") {
    console.log(`Your Answer is " ${answer.firstnumber} - ${answer.SecondNumber} = ${answer.firstnumber - answer.SecondNumber}"`);
}
else if (answer.operator === "Division") {
    console.log(`Your Answer is "${answer.firstnumber} / ${answer.SecondNumber} = ${answer.firstnumber / answer.SecondNumber}"`);
}
else {
    console.log("Please Select Valid Operater for performinig righ operation");
}
