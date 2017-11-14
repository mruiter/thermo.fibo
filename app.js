'use strict';

const Homey = require('homey');

class Fibrator extends Homey.App {

	onInit() {

		this.log('Fibrator Z-wave app is running...');

	}

}

module.exports = Fibrator;
