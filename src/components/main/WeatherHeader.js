import React, {PropTypes} from 'react';

function WeatherHeader({cityName}) {
  return (
    <header className='info'>
      <h2>
        {cityName}
      </h2>
    </header>
  );
}

export default WeatherHeader;

WeatherHeader.propTypes = {
  cityName: PropTypes.string
};
