import React from 'react'

const INITAL_STATE = require('../redux-shoply/data.json');

const rootReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return ({ ...state, 
                products: {
                    ...state.products,
                    [action.product]: {
                        ...action.product
                    }
                }
            })

        case 'DELETE_PRODUCT':
            const newState = { ...state }

            delete newState.products[action.id]

            return newState;

        case 'ADD_TO_CART':
            return ({...state,
                cartItems: [
                    ...state.cartItems, action.cartItem
                ]})
        default:
            return state;
    }
}

export default rootReducer