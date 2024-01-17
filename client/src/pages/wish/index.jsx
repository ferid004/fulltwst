import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useWish } from '../../context/wishContext'
function Wish() {
  const [wish, setwish,handlewish]=useWish()
  return (
    <div>
      <Helmet>
        <title>Wish</title>
      </Helmet>
      <div className="wish">
        {wish.length!==0 ? wish && wish.map((item) => (
          <div className="basbox" key={item._id}>
            <div className="">NAME : {item.name}</div>
            <div className="box"><img src={item.src} alt="" /></div>
            <div className="">INFO:{item.info}</div>
            <div className="">PRICE:{item.price}</div>
            <div onClick={() => handlewish(item)}><button className="del" >delete</button></div>
          </div>
        )):<p>wish bosdur</p>
        }
        
      </div>
      </div>

  )
}

export default Wish