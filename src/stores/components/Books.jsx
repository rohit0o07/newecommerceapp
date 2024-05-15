import React from 'react'
import '../../App.css'
import { booksData } from '../data/books'

const Books = () => {
    const firstfiveimages = booksData.slice(0,5)
  return (
    <>
    <h2>Books</h2>
    <div className='proSection'>
      {
        firstfiveimages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img src={item.image} alt='' className='proImage'/>
                </div>
            )
        })
      }
    </div>
    
    </>
  )
}

export default Books
