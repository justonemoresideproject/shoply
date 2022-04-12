import './Detailed.css'

import { useState } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

import { ADD_TO_CART } from '../reducers/rootTypes';
import { round, capitalizeEachWord } from '../HelperFunctions'

function DetailedProductCard(){

    const { id } = useParams()
    const product = useSelector(store => store.products[id])

    const dispatch = useDispatch()

    const addToCart = (cartItem) => {
        dispatch({
            type: ADD_TO_CART,
            cartItem: cartItem
        })
    }

    const INITIAL_STATE = {
        "numItems": 0,
        "pricePer": [product.price],
        "totalPrice": 0
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToCart({ [id]: INITIAL_STATE })
        setFormData(INITIAL_STATE)
    }

    console.log(formData)

    return (
        <div className='detailedWrapper'>
            <img 
                src={product.image_url}
                className='detailedImage'
            />
            <br />
            <input 
                className='numItemsInput'
                type='number' 
                name='numItems'
                value={formData.numItems}
                onChange={handleChange}
            />
            <button    
                className='addToCartButton'
                onClick={handleSubmit}
            >
                Add to Cart
            </button>
            <h4> 
                Total Price: ${round((product.price * formData.numItems), 2)}
            </h4>
            <h3 
                className='detailedName'>
                    {capitalizeEachWord(product.name)}
            </h3>
            <h4 
                className='detailedPrice'>
                    ${round(product.price, 2)}
            </h4>
            <div 
                className='detailedDescription'>
                    {product.description}
            </div>
        </div>
    )
}

export default DetailedProductCard