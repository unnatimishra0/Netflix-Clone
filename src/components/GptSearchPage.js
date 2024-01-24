import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <> 
      <div className="absolute -z-10">
        <img className=''
          src={BG_URL}
          alt="logo"
        />
      </div>
    <div className=''>
    
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearchPage 
