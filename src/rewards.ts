import gradient from 'gradient-string';
import figlet from 'figlet';

// Create a rainbow gradient
const rainbowGradient = gradient(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']);

export function giveReward(message: string): void {
  // Display the reward message in rainbow text
  console.log('\n');
  console.log(rainbowGradient(figlet.textSync('REWARD!', {
    font: 'Speed',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  })));
  
  console.log('\n');
  console.log(rainbowGradient('🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉'));
  console.log('\n');
  console.log(rainbowGradient(`★ ${message} ★`));
  console.log('\n');
  console.log(rainbowGradient('🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉'));
  console.log('\n');
}
