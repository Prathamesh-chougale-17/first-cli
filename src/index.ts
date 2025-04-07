#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import { askQuestion } from './questions';
import { giveReward } from './rewards';
import figlet from 'figlet';
import gradient from 'gradient-string';

// Create a rainbow gradient
const rainbowGradient = gradient(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']);

// Display the banner
console.log(rainbowGradient(figlet.textSync('Rainbow Q&A', {
  font: 'Big',
  horizontalLayout: 'default',
  verticalLayout: 'default'
})));

const program = new Command();

program
  .version('1.0.0')
  .description('CLI for asking questions and giving rewards with rainbow text');

program
  .command('ask <question>')
  .description('Ask a question with rainbow text')
  .action(async (question) => {
    await askQuestion(question);
  });

program
  .command('reward <message>')
  .description('Give a reward with rainbow text')
  .action((message) => {
    giveReward(message);
  });

// If no arguments provided, run interactive mode
if (process.argv.length === 2) {
  (async () => {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Ask a question', 'Give a reward', 'Exit']
      }
    ]);

    if (action === 'Ask a question') {
      const { question } = await inquirer.prompt([
        {
          type: 'input',
          name: 'question',
          message: 'Enter your question:'
        }
      ]);
      await askQuestion(question);
    } else if (action === 'Give a reward') {
      const { reward } = await inquirer.prompt([
        {
          type: 'input',
          name: 'reward',
          message: 'Enter your reward message:'
        }
      ]);
      giveReward(reward);
    }
  })();
} else {
  program.parse(process.argv);
}
