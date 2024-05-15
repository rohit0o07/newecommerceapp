import React from 'react'

import '../../App.css'
import { speakerData } from '../data/speaker'

const Speakers = () => {
    const firstfiveimages = speakerData.slice(0,5)
  return (
    <>
    <h2>Speakers</h2>
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

export default Speakers
