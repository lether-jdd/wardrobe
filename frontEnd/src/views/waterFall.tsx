import React, { useState} from 'react'
import style from '../css/waterfall.css'
function WaterFall() {
  const [images] = useState([
    'https://pic3.zhimg.com/v2-89735fee10045d51693f1f74369aaa46_r.jpg',
    'https://pic1.zhimg.com/v2-ca51a8ce18f507b2502c4d495a217fa0_r.jpg',
    'https://pic1.zhimg.com/v2-c90799771ed8469608f326698113e34c_r.jpg',
    'https://pic1.zhimg.com/v2-8d3dd83f3a419964687a028de653f8d8_r.jpg'])
  return (
    <div className={style.wrapper}>
      {images.map(i => { 
        return (
          <img src={i} key={i} className={style.item}></img>
        )
      })}
    </div>
  )
}

export default WaterFall