#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.yellowBright.bold("\n\t Welcome to my adevnture Quiz Game\t\n"))
console.log(chalk.cyanBright.bold("You are required to gain maximum 4 points for the window\n"))

let points = 0
//Question 1
let question1 = await inquirer.prompt([
    {
        name : "one",
        message : " typescript is super set of?",
        type : "list",
        choices : ["python", "c++", "java", "javascript"]

    }
]);

if (question1.one === "javascript"){
    console.log("Your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}

//Question 2
let question2 = await inquirer.prompt([
    {
        name : "two",
        message : " Who is the founder of Microdoft?",
        type : "list",
        choices : ["Elon musk", "Bill gates", "Mark zuckberg"]

    }
]);

if (question2.two === "Bill gates"){
    console.log("Your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}

//Question 3

let question3 = await inquirer.prompt([
    {
        name : "three",
        message : "How to print message in red color in typescript?",
        type : "list",
        choices : ["chalk.red", "chalk(red)", "chalk.Red"]

    }
]);

if (question3.three === "chalk.red"){
    console.log("Your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}

//Question 4

let question4 = await inquirer.prompt([
    {
        name : "four",
        message : "Who is thefounder of facebook?",
        type : "list",
        choices : ["bill gates", "elon musk", "Mark Zuckberg", "john"]

    }
]);

if (question4.four === "Mark Zuckberg"){
    console.log("Your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}

//question 5 

let question5 = await inquirer.prompt([
    {
        name : "five",
        message : "Who is the current governor of Sindh?",
        type : "list",
        choices : ["Nawaz shareef", "Kamran Tessori", "Imran khan", "shehbaz shareef"]

    }
]);

if (question5.five === "Kamran Tessori"){
    console.log("Your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}

//output conditions
if (points >= 4){
console.log("Congratulations!")
console.log(`"your points: ${points}"`)
}else {
    console.log("You loss! try next time")
    console.log(`"your points: ${points}"`)
}