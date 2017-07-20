'use strict';

import weatherDecorator from '../../src/decorator/weatherDecorator'
import {getMockWeather} from '../utils/openweather-api.stub'

describe('weatherDecorator', () => {
  it('should return city name' ,() => {
    const report = new weatherDecorator(getMockWeather());
    expect(report.getCity()).to.equal('Altstadt');    
  })

  it('should return given items' ,() => {
    const report = new weatherDecorator(getMockWeather());
    const item = report.dailyReport()
    expect(item).to.equal(report.dailyReport());    
  })
})
