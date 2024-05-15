import React from 'react'
import '../../App.css'
import { tvData } from '../data/tv'

const Tvs = () => {
    const firstfiveimages = tvData.slice(0,5)
  return (
    <>
    <h2>LCD Tv's</h2>
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

export default Tvs
