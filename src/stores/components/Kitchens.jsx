import React from 'react'
import '../../App.css'
import { kitchenData } from '../data/kitchen'

const Kitchens = () => {
    const firstfiveimages = kitchenData.slice(0,5)
  return (
    <>
    <h2>Kitchens set</h2>
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

export default Kitchens
