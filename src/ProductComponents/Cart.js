import React from 'react'
import { useSelector } from 'react-redux'

function Cart(){
    const cartItems  = useSelector(store => store.cartItems)

    const products = cartItems.map(id => {
        return useSelector(store => store.products[id])
    })

    // cart will look something like this
    let testObj = [{"123": {"numItems": 3, "pricePer": 4, "totalPrice": 12}}, {"321": {"numItems": 5, "pricePer": 4, "totalPrice": 20}}]
}