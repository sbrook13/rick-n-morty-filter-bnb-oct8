import React from 'react'

export default function SearchCharacterForm({filterCharacters}){

  return (
    <form>
      <label>Search Character By Name: </label>
      <input type="text" onChange={filterCharacters}/>
    </form>
  )
}