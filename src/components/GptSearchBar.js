import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langkey=useSelector(store => store.config.lang)
  return (
    <div className='py-[10%] '>
        <form className='bg-black  w-1/2 grid grid-cols-12'
        onSubmit={(e)=>e.preventDefault()}>
            <input 
             type='text'
             className='p-4 m-4 col-span-9'
             placeholder={lang[langkey].gptSearchPlaceholder}/>
            
            <button className= 'bg-red-700 py-2 px-4 m-4 col-span-3 text-white rounded-lg'>
                {lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
