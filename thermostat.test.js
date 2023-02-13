const Thermostat = require('./thermostat')

describe('Thermostat class', () => {
  it('returns the temperature', () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toBe(20);
  })

  it('increases the temperature, 1 degree increment at a time', () => {
    const thermostat = new Thermostat;

    thermostat.up()
    thermostat.up()

    expect(thermostat.getTemperature()).toBe(22);
  })

  it('decreases the temperature, 1 degree increment at a time', () => {
    const thermostat = new Thermostat;

    thermostat.down()
    thermostat.down()

    expect(thermostat.getTemperature()).toBe(18);
  })

  it('max temp is 25 with power saving mode on', () => {
    const thermostat = new Thermostat;

    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()

    expect(thermostat.getTemperature()).toBe(25);
  })

  it('min temp is 10', () => {
    const thermostat = new Thermostat;

    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()

    expect(thermostat.getTemperature()).toBe(10);
  })

  it('max temp is 32 with power saving mode off', () => {
    const thermostat = new Thermostat;

    thermostat.setPowerSavingMode(false);

    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()

    expect(thermostat.getTemperature()).toBe(32);
  })

  it('resets the temperature to 20 degrees', () => {
    const thermostat = new Thermostat;

    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()

    thermostat.reset()

    expect(thermostat.getTemperature()).toBe(20);
  })

  // current energy usage 

  it('returns as low-usage', () => {
    const thermostat = new Thermostat;

    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()

    expect(thermostat.currentEnergyUsage()).toBe('low-usage');
  })

  it('returns as medium-usage', () => {
    const thermostat = new Thermostat;

    expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
  })

  it('returns as high-usage', () => {
    const thermostat = new Thermostat;

    thermostat.setPowerSavingMode(false)

    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()

    expect(thermostat.getTemperature()).toBe(26);
    expect(thermostat.currentEnergyUsage()).toBe('high-usage');
  })
})