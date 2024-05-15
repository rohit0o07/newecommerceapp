import React from 'react'
import '../../App.css'
import { menData } from '../data/men'

const Mens= () => {
    const firstfiveimages = menData.slice(0,5)
  return (
    <>
    <h2>Mens Wear</h2>
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

export default Mens
