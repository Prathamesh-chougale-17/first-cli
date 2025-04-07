"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askQuestion = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const gradient_string_1 = __importDefault(require("gradient-string"));
// Create a rainbow gradient
const rainbowGradient = (0, gradient_string_1.default)(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']);
async function askQuestion(question) {
    console.log(rainbowGradient(`Question: ${question}`));
    const { answer } = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'answer',
            message: 'Your answer:'
        }
    ]);
    console.log(rainbowGradient(`You answered: ${answer}`));
    const { rating } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'rating',
            message: 'How would you rate your answer?',
            choices: ['Poor', 'Fair', 'Good', 'Excellent']
        }
    ]);
    console.log(rainbowGradient(`You rated your answer as: ${rating}`));
}
exports.askQuestion = askQuestion;
