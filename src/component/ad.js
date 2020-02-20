import React from 'react';

const Ad = ({id})=>(
  <img key={id} className="ad" src={`http://localhost:3002/ads/?r=${id}`}/>
);

export default Ad;
