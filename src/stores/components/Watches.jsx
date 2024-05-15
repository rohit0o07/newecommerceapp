import React from 'react'
import '../../App.css'
import { watchData } from '../data/watch'

const Watches = () => {
    const firstfiveimages = watchData.slice(0,5)
  return (
    <>
    <h2>Watches</h2>
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

export default Watches
