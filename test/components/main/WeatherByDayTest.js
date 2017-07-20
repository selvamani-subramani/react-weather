/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';

import WeatherByDay from 'components/main/WeatherByDay'
import WeatherDecorator from '../../../src/decorator/weatherDecorator'

import {getMockWeather} from '../../utils/openweather-api.stub'

describe('WeatherByDay', () => {
  it('Should show list of report', function(){
    const reportDecorator = new WeatherDecorator(getMockWeather());
    const da = reportDecorator.dailyReport()
    const list = mount(<WeatherByDay list={da[0]}/>)
    expect(list.find('img')).to.have.length(5);
  });

});

