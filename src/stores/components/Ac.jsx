import React from 'react'
import { acData } from '../data/ac'
import '../../App.css'

const Ac = () => {
    const firstfiveimages = acData.slice(0,5)
  return (
    <>
    <h2>Air Conditioners</h2>
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

export default Ac
