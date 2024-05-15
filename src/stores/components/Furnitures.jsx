import React from 'react'
import '../../App.css'
import { furnitureData } from '../data/furniture'

const Furnitures = () => {
    const firstfiveimages = furnitureData.slice(0,5)
  return (
    <>
    <h2>Furnitures</h2>
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

export default Furnitures
