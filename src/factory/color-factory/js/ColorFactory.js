const RedConsole = require('./RedConsole');
const BlueConsole = require('./BlueConsole');
const GreenConsole = require('./GreenConsole');


// class that creates new objects
// no need to create each time a new object
// that's the magic of the Factory method
class ColorFactory {
	create(type) {
		switch(type) {
			case 'Red':
				return new RedConsole();
			case 'Blue':
				return new BlueConsole();
			case 'Green':
				return new GreenConsole();
			default:
				return new Error('Color type not supported');
		}
	}
}
module.exports = new ColorFactory();