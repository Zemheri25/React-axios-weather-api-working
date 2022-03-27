import React from "react";

function City({ city }) {
  const { temp } = city.main;
  const { name } = city;
  const { country } = city.sys;
  const { description } = city.weather[0];
  const iconurl = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;

  return (
    <div className="mycity">
      <h2>
        {name} <sup className="country">{country}</sup>
      </h2>
      <h2>{temp}</h2>
      <h2>{description}</h2>
      <img src={iconurl} alt="" />
    </div>
  );
}

export default City;
