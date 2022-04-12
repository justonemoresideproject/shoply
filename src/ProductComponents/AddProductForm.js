import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid'

import { ADD_PRODUCT } from '../reducers/rootTypes';

function ProductForm() {
    const dispatch = useDispatch()

    function addProduct(product) {
        dispatch({
            type: ADD_PRODUCT,
            product: product
        })
    }

    const INITAL_STATE = {
        name: '',
        price: '',
        description: '',
        image_url: ''
    }

    const [formData, setFormData] = useState(INITAL_STATE)

    function handleSubmit(e) {
        e.preventDefault();
        addProduct({[uuid()] : {...formData} });
        setFormData(INITAL_STATE);
    }
    
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    }

    return (
        <form className='addProductForm'>
            <h1 className='formHeader'>Add Product</h1>
            <label 
                className='nameLabel' 
                htmlFor='name'>
                    Name:
            </label>
            <input 
                className='nameInput' 
                value={formData.name} 
                onChange={handleChange} 
            />

            <label 
                className='priceLabel' 
                htmlFor='price'>
                    Price:
            </label>
            <input 
                className='priceInput' 
                value={formData.price} 
                onChange={handleChange}
            />

            <label 
                htmlFor='description'>
                    Description:
            </label>
            <input 
                className='descriptionInput' 
                value={formData.description} 
                onChange={handleChange} 
            />

            <label 
                htmlFor='image_url'>
                    Image URL:
            </label>
            <input 
                className='image_urlInput' 
                value={formData.image_url} 
                onChange={handleChange} 
            />

            <button onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}

export default ProductForm