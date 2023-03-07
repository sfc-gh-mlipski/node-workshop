
const ColorFactory = require('./ColorFactory');

// here are created references to the new objects
const Blue = ColorFactory.create('Blue');
const Red = ColorFactory.create('Red');
const Green = ColorFactory.create('Green');


Blue.log();
Red.log();
Green.log()