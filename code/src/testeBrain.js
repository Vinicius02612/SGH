const brain = require('brain.js');

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork(config);

net.train([
  { input: [0, 1], output: [0] },
  { input: [0, 2], output: [1] },
  { input: [1, 3], output: [1] },
  { input: [1, 1], output: [0] },
]);

const output = net.run([1, 0]);
console.log(output);