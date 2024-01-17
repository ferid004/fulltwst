import { createContext, useContext, useState } from "react";
import useLocalStroge from "../hook/useLocalStroge";


export const basketContext = createContext()

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useLocalStroge('basket')

    function handlebasket(item) {
        const index = basket.findIndex(x => x._id === item._id)
        if (index === -1) {
            item.count = 1
            setBasket([...basket, item])
            return
        }
        basket[index].count++
        setBasket([...basket])

    }
    function artir(item) {
        const index = basket.findIndex(x => x._id === item._id)
        basket[index].count++
        setBasket([...basket])
    }
    function azalt(item) {
        const index = basket.findIndex(x => x._id === item._id)
        basket[index].count--
        setBasket([...basket])
    }
    function deletebasket(item) {
        setBasket(basket.filter(x=>x._id!==item._id))
    }

    const data = [basket, setBasket, handlebasket, artir, azalt,deletebasket]

    return (
        <basketContext.Provider value={data}>
            {children}
        </basketContext.Provider>
    )
}
export const useBasket = () => useContext(basketContext)