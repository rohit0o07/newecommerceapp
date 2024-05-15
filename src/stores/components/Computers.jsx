import React from 'react'
import {computerData} from '../data/computers'
import '../../App.css'

const Computers = () => {
    const firstfiveimages = computerData.slice(0,5)
  return (
    <>
    <h2>Computers</h2>
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

export default Computers
