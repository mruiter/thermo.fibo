'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class FGT001 extends ZwaveDevice {
	onMeshInit() {
		// this.enableDebug();
		// this.printNode();
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
		this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');
		this.registerCapability('alarm_battery', 'BATTERY');
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = FGT001;
