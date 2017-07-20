/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount, shallow } from 'enzyme';

import WeatherHeader from 'components/main/WeatherHeader'

describe('WeatherHeader', () => {
  it('Should show header', function(){
    const cityName = 'London';
    const list = shallow(<WeatherHeader cityName={cityName}/>);
    expect(list.find('h1').text()).to.equal('London');
  });

});
