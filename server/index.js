import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const proSchema = new mongoose.Schema({
    name: String,
    src:String,
    info:String,
    price:String,

  });

  const Product = mongoose.model('produc020', proSchema);


app.get('/', async(req, res) => {
  try {
    const data= await Product.find({})
    res.status(200).send({message:'succses',data})
  } catch (error) {
    res.status(500).send({message:'NOT succses',error})
  }
})
app.post('/', async(req, res) => {
  try {
    const data= new Product(req.body)
    await data.save()
    res.status(200).send({message:'succses',data})
  } catch (error) {
    res.status(500).send({message:'NOT succses',error})
  }
})
app.get('/:id', async(req, res) => {
  try {
    const {id}=req.params
    const data= await Product.findById(id)
    res.status(200).send({message:'succses',data})
  } catch (error) {
    res.status(500).send({message:'NOT succses',error})
  }
})
app.delete('/:id', async(req, res) => {
  try {
    const {id}=req.params
    const data= await Product.findByIdAndDelete(id)
    res.status(200).send({message:'succses',data})
  } catch (error) {
    res.status(500).send({message:'NOT succses',error})
  }
})

mongoose.connect('mongodb+srv://feridd:feridd@cluster0.o4zo8na.mongodb.net/')
.then(()=>console.log(' connet'))
.then(()=>console.log('NOT db connet'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})