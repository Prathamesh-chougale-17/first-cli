#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const questions_1 = require("./questions");
const rewards_1 = require("./rewards");
const figlet_1 = __importDefault(require("figlet"));
const gradient_string_1 = __importDefault(require("gradient-string"));
// Create a rainbow gradient
const rainbowGradient = (0, gradient_string_1.default)(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']);
// Display the banner
console.log(rainbowGradient(figlet_1.default.textSync('Rainbow Q&A', {
    font: 'Big',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})));
const program = new commander_1.Command();
program
    .version('1.0.0')
    .description('CLI for asking questions and giving rewards with rainbow text');
program
    .command('ask <question>')
    .description('Ask a question with rainbow text')
    .action(async (question) => {
    await (0, questions_1.askQuestion)(question);
});
program
    .command('reward <message>')
    .description('Give a reward with rainbow text')
    .action((message) => {
    (0, rewards_1.giveReward)(message);
});
// If no arguments provided, run interactive mode
if (process.argv.length === 2) {
    (async () => {
        const { action } = await inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Ask a question', 'Give a reward', 'Exit']
            }
        ]);
        if (action === 'Ask a question') {
            const { question } = await inquirer_1.default.prompt([
                {
                    type: 'input',
                    name: 'question',
                    message: 'Enter your question:'
                }
            ]);
            await (0, questions_1.askQuestion)(question);
        }
        else if (action === 'Give a reward') {
            const { reward } = await inquirer_1.default.prompt([
                {
                    type: 'input',
                    name: 'reward',
                    message: 'Enter your reward message:'
                }
            ]);
            (0, rewards_1.giveReward)(reward);
        }
    })();
}
else {
    program.parse(process.argv);
}
