import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useBasket } from '../../context/basketContex'
function Basket() {
  const [basket, setBasket, handlebasket, artir, azalt, deletebasket] = useBasket()
  return (
    <div>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div className="basket">
        {basket.length!==0 ? basket && basket.map((item) => (
          <div className="basbox" key={item._id}>
            <div className="">NAME : {item.name}</div>
            <div className="box"><img src={item.src} alt="" /></div>
            <div className="">INFO:{item.info}</div>
            <div className="">PRICE:{item.price}</div>
            <div className="">TOTAL PRICE:{item.price*item.count}</div>

            <div className="count">
              <div className="" onClick={() => artir(item)}><button>+</button></div>
              <div className="">{item.count}</div>
              <div className="" onClick={() => azalt(item)}><button>-</button></div>
            </div>
            <div onClick={() => deletebasket(item)}><button className="del" >delete</button></div>
          </div>
        )):<p>basket bosdur</p>
        }
        {basket.length!==0 ?<p>total price :{basket.reduce((a, b) => a + (b.count * b.price), 0)}</p>:''}
        
      </div>
    </div>
  )
}

export default Basket