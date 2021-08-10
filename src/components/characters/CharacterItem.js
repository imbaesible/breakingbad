import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CharacterItem = ({ item }) => {


  const url = `/character?q=${item.name}&o=${item.occupation}&i=${item.img}&d=${item.birthday}&s=${item.status}&n=${item.nickname}&an=${item.portrayed}&a=${item.appearance}&quote?author=${item.quote}`
  return (
    <Link to={url}>
      <div className='card' >
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Ocupation:</strong> { item.occupation.join(", ") } 
              </li>
              <li>
                <strong>Birthdate:</strong> {item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
    
  )
}

export default CharacterItem
