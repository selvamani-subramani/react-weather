import React, {PropTypes} from 'react';

function WeatherHeader({cityName}) {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className="jumbotron">
          <h1 className='text-center'>
            {cityName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WeatherHeader;

WeatherHeader.propTypes = {
  cityName: PropTypes.string
};
