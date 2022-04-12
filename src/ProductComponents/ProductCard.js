import React from 'react';
import { useNavigate } from 'react-router';

import { DELETE_PRODUCT } from '../reducers/rootTypes';

import { round, capitalizeEachWord } from '../HelperFunctions'

function ProductCard({product}){
    const navigate = useNavigate()

    return (
        <td 
            className='productWrapper'
            key={product.id} 
            onClick={() => navigate(`/products/${product.id}`)}
        >
            <img 
                src={product.image_url}
                className='productImage'
            />
            <h3 
                className='productName'
            >
                {capitalizeEachWord(product.name)}
            </h3>
            <h4 
                className='productPrice'>
                    ${round(product.price, 2)}
            </h4>
            {/* <div 
                className='productDescription'>
                    {product.description}
            </div> */}
            {/* <div 
                className='productButtonWrapper'
            >
                <button>
                    Add to Cart
                </button>
            </div> */}
    </td>
    )
}

export default ProductCard