import _ from 'lodash';
export { getMockLists, getMockList, getMockWeather };

function getMockLists(number = _.random(1, 40), date = '2017-02-16 12:00:00') {
  return _.times(number, () => getMockList({date}));
}

function getMockList(overrides = {date: '2017-02-16 12:00:00'}) {
  return {
    dt: _.uniqueId(),
    main: {
      temp: _.random(200, 400),
      temp_min: _.random(200, 400),
      temp_max: _.random(200, 400),
      pressure: _.random(800, 1200),
      sea_level: _.random(500, 3000),
      grnd_level: _.random(600, 1400),
      humidity: _.random(50, 100),
      temp_kf: _.random(3, 6)
    },
    weather: [{
      id: _.random(200, 400),
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    clouds: {
      all: _.random(0, 100)
    },
    wind: {
      speed: _.random(1, 50),
      deg: _.random(100, 500)
    },
    sys: {
      pod: 'd'
    },
    dt_txt: '2017-02-16 12:00:00',
    ...overrides
  }
}

function getMockWeather(overrides = {}){
  return {
    cod: '200',
    list: _.times(5, () => getMockList()),
    city: {
      id: 6940463,
      name: 'Altstadt',
      coord: {
        lat: 48.137,
        lon: 11.5752
      }
    },
    country: 'none',
    ...overrides
  }
}
