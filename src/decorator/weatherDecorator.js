import ReportDecorator from './ReportDecorator'
import _ from 'lodash/collection';

class WeatherDecorator {

  constructor(weather) {
    this.weather = weather;
  }

  getCity() {
    return this.weather.city.name
  }

  dailyReport() {
    if(this.itemList){
      return {};
    }
    let itemList = []
    let grouped = _.groupBy(this.weather.list, function(item) {
      return item.dt_txt.split(' ')[0];
    });

    _.map(grouped, function(value, key) {
      itemList.push(new ReportDecorator(value, key));
    });
    this.itemList = itemList;
    return this.itemList;
  }

}

export default WeatherDecorator;
