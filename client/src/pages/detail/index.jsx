import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Detail() {
  const [product, setProduct] = useState([])
  const{id}=useParams()
  const axiosAllData = async () => {
    const res = await axios.get(`http://localhost:3000/${id}`)
    const data = res.data.data
    setProduct(data)
  }
  useEffect(() => {
    axiosAllData()
  }, [])
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="detail">

      {product&&
      <div className="box">
        <img src={product.src} alt="" />
      </div>
      }
      </div>
      </div>
  )
}

export default Detail