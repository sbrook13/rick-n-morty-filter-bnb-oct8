import React from 'react';

export default function Card({character}){


    return(
        <div className="card" id={character.name}>
          <img src={character.image} alt={character.name}/>
          <p>{character.name}</p>
        </div>
    )
}