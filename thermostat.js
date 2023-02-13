class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSaving = true;
  }

  up() {
    if (this.powerSaving === true && this.temp < 25) {
      this.temp += 1;
    } else if (this.powerSaving === false && this.temp < 32) {
      this.temp += 1;
    }
  }

  down() {
    if (this.temp > 10) {
      this.temp -= 1;
    }
  }

  setPowerSavingMode(on) {
    if (on === true) {
      this.powerSaving = true;
    } else if (on === false) {
      this.powerSaving = false;
    }
  }

  reset() {
    this.temp = 20;
  }

  getTemperature() {
    return this.temp;
  }

  currentEnergyUsage() {
    if (this.temp < 18) {
      return "low-usage";
    } else if (this.temp <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
