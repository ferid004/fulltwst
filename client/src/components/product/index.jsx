import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useBasket } from '../../context/basketContex'
import { useWish } from '../../context/wishContext'
function Product() {

  const [product, setProduct] = useState([])
  const [basket, setBasket, handlebasket, artir, azalt, deletebasket] = useBasket()
  const [wish, setwish, handlewish] = useWish()

  const axiosAllData = async () => {
    const res = await axios.get('http://localhost:3000/')
    const data = res.data.data
    setProduct(data)
    console.log(data);
  }
  useEffect(() => {
    axiosAllData()
  }, [])


  return (
    <div id='prod'>
      <div className="uptext">
        <p>POPULAR PRODUCTS</p>
        <h3>Our Products</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
      </div>
      <div className="prodbox">
        {product && product.map((item) => (
          <ul key={item._id} className='pro'>
            <li><div className="box"><img src={item.src} alt="" /></div></li>
            <li>{item.name}</li>
            <li><div className="r_and_w"><div className="rating"><i className="fa-solid fa-star"></i> 5.0</div><div onClick={() => handlewish(item)}><i className={`fa-${wish.find(x => x._id == item._id) ? "solid" : "regular"} fa-heart`}></i></div></div></li>
            <li className='info'>{item.info}</li>

            <li><div className="buts"><div className='white' onClick={() => handlebasket(item)}>baket</div> <div className="black"><Link to={`/detail/${item._id}`} >veiw</Link></div></div>
            </li>
            <li></li>
          </ul>

        ))}
      </div>
    </div>
  )
}

export default Product