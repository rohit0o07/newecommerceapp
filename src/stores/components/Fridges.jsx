import React from 'react'
import '../../App.css'
import { fridgeData } from '../data/fridge'

const Fridges = () => {
    const firstfiveimages = fridgeData.slice(0,5)
  return (
    <>
    <h2>Refrigerators</h2>
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

export default Fridges
