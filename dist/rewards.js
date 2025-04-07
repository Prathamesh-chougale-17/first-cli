"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.giveReward = void 0;
const gradient_string_1 = __importDefault(require("gradient-string"));
const figlet_1 = __importDefault(require("figlet"));
// Create a rainbow gradient
const rainbowGradient = (0, gradient_string_1.default)(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']);
function giveReward(message) {
    // Display the reward message in rainbow text
    console.log('\n');
    console.log(rainbowGradient(figlet_1.default.textSync('REWARD!', {
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
exports.giveReward = giveReward;
