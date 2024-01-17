import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/assets/scss/main.scss'
import MainLayout from './layout/mainLayout'
import Home from './pages/home'
import Add from './pages/add'
import Basket from './pages/basket'
import Wish from './pages/wish'
import Detail from './pages/detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>} path='/'>
            <Route element={<Home></Home>} index></Route>
            <Route element={<Add></Add>} path='/add'></Route>
            <Route element={<Basket></Basket>} path='/basket'></Route>
            <Route element={<Wish></Wish>} path='/wish'></Route>
            <Route element={<Detail></Detail>} path='/detail/:id'></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App