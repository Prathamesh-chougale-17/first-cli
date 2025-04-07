import inquirer from 'inquirer';
import gradient from 'gradient-string';

// Create a rainbow gradient
const rainbowGradient = gradient(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']);

export async function askQuestion(question: string): Promise<void> {
  console.log(rainbowGradient(`Question: ${question}`));
  
  const { answer } = await inquirer.prompt([
    {
      type: 'input',
      name: 'answer',
      message: 'Your answer:'
    }
  ]);

  console.log(rainbowGradient(`You answered: ${answer}`));
  
  const { rating } = await inquirer.prompt([
    {
      type: 'list',
      name: 'rating',
      message: 'How would you rate your answer?',
      choices: ['Poor', 'Fair', 'Good', 'Excellent']
    }
  ]);
  
  console.log(rainbowGradient(`You rated your answer as: ${rating}`));
}
