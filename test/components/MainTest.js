/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon, {spy} from 'sinon';

import App from 'components/Main';
import WeatherHeader from 'components/main/WeatherHeader'
import WeatherDecorator from '../../src/decorator/weatherDecorator'
import {getMockWeather} from '../utils/openweather-api.stub'

describe('App', function () {

  it('<App /> exists', function () {
    var root = shallow(<App/>);
    expect(root).to.not.be.null;
  });

  it('render WeatherHeader components ', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(WeatherHeader)).to.have.length(1);
  });

  it('should return report by days', function(){
    const weather = new WeatherDecorator(getMockWeather());
    const wrapper = mount(<App />);
    wrapper.setState({cityName: weather.getCity()});
    wrapper.setState({list: weather.dailyReport()});
    expect(wrapper.find('h3')).to.have.length(1);
  })

  it('fetch data should call', () => {
    const data = getWeatherSpy();
    mount(<App getRepos={data}/>);
    expect(data).to.have.been.calledOnce;
  });

  it('set component state to return data', () => {
    const data = getWeatherSpy()
    const wrapper = mount(<App getWeather={data} />)
    wrapper.instance().updateWeather(getMockWeather())
    expect(wrapper.state('list').length).to.equal(1);
  });
});


function getWeatherSpy(resolvedValue = getMockWeather()) {
  return spy(() => Promise.resolve(resolvedValue));
}
