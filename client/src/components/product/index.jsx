import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useBasket } from '../../context/basketContex'
import { useWish } from '../../context/wishContext'
function Product() {

    const [product, setProduct] = useState([])
    const [basket, setBasket,handlebasket,artir,azalt,deletebasket]=useBasket()
    const [wish, setwish,handlewish]=useWish()

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
    <div>
        {product && product.map((item)=>(
            <ul key={item._id}>
                <li>{item.name}</li>
                <li><div className="box"><img src={item.src} alt="" /></div></li>
                <li>{item.info}</li>
                <li>{item.price}</li>
                <li><Link to={`/detail/${item._id}`} >veiw</Link></li>
                <li><button onClick={()=>handlebasket(item)}>baket</button></li>
                <li><button onClick={()=>handlewish(item)}>wishlist</button></li>
            </ul>
        ))}
    </div>
  )
}

export default Product