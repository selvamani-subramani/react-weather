import React, {PropTypes} from 'react';
import WeatherList from './WeatherList'

function WeatherByDay({list}) {
  console.log(list)
  return (
    <section className='pull-left'>
      <div>
        {list.date()}
      </div>
      <ul>
        {list.items.map((l) => <WeatherList key={l.dt} list={l} />)}
      </ul>
    </section>
  );
}

export default WeatherByDay;

WeatherByDay.propTypes = {
  list: PropTypes.PropTypes.object
};
