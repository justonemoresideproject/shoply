import './ProductList.css'

import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import ProductCard from './ProductCard';
import AddProductForm from './AddProductForm'

function ProductList() {
    // const data = require('./redux-shoply/data.json')
    const dispatch = useDispatch()

    function createProductTable(data){
        const keys = Object.keys(data)
        const dataArr = []

        for(let key in keys){
            let newObj = data[keys[key]]
            newObj.id = keys[key]
            dataArr.push(newObj)
        }

        const table = []

        for(let i = 0; i < dataArr.length; i+=3){
            const newArr = []
            for(let j = 0; j < 3 && j + i < dataArr.length; j++){
                newArr.push(dataArr[i + j]) 
            }
            table.push(newArr)
        }

        console.log(table)

        return table
    }

    const products = useSelector(store => store.products)

    const table = createProductTable(products)

    return (
    <>
        <h1>Products</h1>
        <table className='productTable'>
            <tbody>
            {table.map(row => {
                return (
                <tr key={`${row}.${row[0].id}`}>
                    {row.map(product => {
                        console.log(product)
                        return (
                            <ProductCard product={product} />
                        )
                    })}
                </tr>)
            })}
            </tbody>
        </table>
    </>)
}

export default ProductList