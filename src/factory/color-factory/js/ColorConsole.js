// base class with main logic
class ColorConsole{
	constructor(type) {
		this.type = type
	}

	log(){
		console.log(`I'm ${this.type}`)

	}
}

module.exports = ColorConsole;