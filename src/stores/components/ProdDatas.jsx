import React from 'react'
import '../../App.css'
import { mobileData } from '../data/proData'

const ProDatas = () => {
    const firstfiveimages = mobileData.slice(0,5)
  return (
    <>
    <h2>MobileData</h2>
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

export default ProDatas
