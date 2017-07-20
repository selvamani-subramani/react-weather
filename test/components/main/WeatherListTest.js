/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';

import WeatherList from 'components/main/WeatherList'
import {getMockList} from '../../utils/openweather-api.stub'


describe('WeatherList', () => {

  it('Should show cloud', function(){
    const clouds = {clouds: {all: '50'}}
    const wrapper = renderComponent(clouds)
    expect(wrapper.find('p span').text()).to.equal('50%');
  });

  it('Should show image', function(){
    const list = shallow(<WeatherList list={getMockList()}/>)
    expect(list.find('img')).to.have.length(1);
  });

});

function renderComponent(props = {clouds: {all: 50}}) {
  return mount(<WeatherList list={getMockList(props)} />);
}
