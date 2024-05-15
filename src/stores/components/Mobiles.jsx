import React from 'react'
import { mobileData } from '../data/mobiles';
import '../../App.css'

const Mobiles = () => {
    const firstfiveimages = mobileData.slice(0,5)
  return (
    <>
    <h2>Mobiles</h2>
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

export default Mobiles
