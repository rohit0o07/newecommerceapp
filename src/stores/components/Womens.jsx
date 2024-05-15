import React from 'react'
import '../../App.css'
import { womanData } from '../data/woman'

const Womens = () => {
    const firstfiveimages = womanData.slice(0,5)
  return (
    <>
    <h2>Womens wear</h2>
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

export default Womens
