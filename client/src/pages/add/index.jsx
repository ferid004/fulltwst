import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
  const [product, setProduct] = useState()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const axiosAllData = async () => {
    const res = await axios.get('http://localhost:3000/')
    const data = res.data.data
    setProduct(data)
    console.log(data);
  }
  useEffect(() => {
    axiosAllData()
  }, [])

  const axiosPostData = async (data) => {
    await axios.post('http://localhost:3000/', data)
    axiosAllData()
  }
  const axiosDelete = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`)
    axiosAllData()
  }



  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="addpage">
        <div className="form">
          <Formik
            initialValues={{ name: '', src: '', info: '', price: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required('Required'),
              src: Yup.string()
                .required('Required'),
              info: Yup.string().required('Required'),
              price: Yup.number()
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                axiosPostData(values)
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm()
              }, 400);
            }}
          >
            <Form className='fomrk'>
              <label htmlFor="name"> Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />

              <label htmlFor="src">img</label>
              <Field name="src" type="text" />
              <ErrorMessage name="src" />

              <label htmlFor="info">INFO</label>
              <Field name="info" type="text" />
              <ErrorMessage name="info" />

              <label htmlFor="price">PRICE</label>
              <Field name="price" type="number" min={1} />
              <ErrorMessage name="price" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        <div className="inputdiv" >
          <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className="buttons">
          <button onClick={()=>setSort({prop:'price',asc:true})}>artan</button>
          <button onClick={()=>setSort({prop:'price',asc:false})}>azalan</button>
          <button onClick={()=>setSort(null)}>default</button>
        </div>
        <div className="table">
          <table border={1}>
            <thead>
              <tr>
                <th>NAME</th>
                <th>IMG</th>
                <th>INFO</th>
                <th>PRICE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {product && product
              .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
              .sort((a,b) => {
                if (sort && sort.asc===true) {
                  
                 return (a[sort.prop] > b[sort.prop]) ? 1 : ((b[sort.prop] > a[sort.prop]) ? -1 : 0)
                }else if (sort && sort.asc===false) {
                  return (a[sort.prop] < b[sort.prop]) ? 1 : ((b[sort.prop] < a[sort.prop]) ? -1 : 0)
                }else{null}
              })
              .map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td><img src={item.src} alt="" /></td>
                  <td>{item.info}</td>
                  <td>{item.price}</td>
                  <td><button onClick={() => axiosDelete(item._id)}>delete</button></td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Add