// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'

test('should return the initial state', () => {
    expect(rootReducer(state, action).toEqual({
        "products": {
        "47314fa1-ae56-4eae-80be-af6691145951": {
            "name": "tv",
            "price": 219.99,
            "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
            "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
        },
        "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": {
            "name": "microwave",
            "price": 100.00,
            "description": "Heat your food with the power of SCIENCE!",
            "image_url": "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
        },
        "b04b779c-1cfb-48a7-8424-25a8c7e608ae": {
            "name": "toaster oven",
            "price": 20.49,
            "description": "Tasty bread not included.",
            "image_url": "https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg"
        },
        "4260bf52-218a-480e-87ea-4ff42470ce98": {
            "name": "chair",
            "price": 100.89,
            "description": "It's a chair. You can sit in it.",
            "image_url": "https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG"
        },
        "6a56c22f-2a85-4751-98a9-14e280fcecd8": {
            "name": "mirror",
            "price": 20.99,
            "description": "Mirror mirror on the wall, who has the greatest mirror of them all? YOU WILL, if you buy this.",
            "image_url": "https://target.scene7.com/is/image/Target/GUEST_703892ef-2db0-4e02-b9c8-685e4a5c37a0"
        },
        "2266b2d6-3d71-4356-8065-392f1fceab07": {
            "name": "phone",
            "price": 399.99,
            "description": "Because there are absolutely no downsides that come with easier access to social media.",
            "image_url": "https://images-na.ssl-images-amazon.com/images/I/717DO5Q-aCL._SY879_.jpg"
        }
    }
    }))
})

test('should return initial state and added product', () => {
    const action = {
        type: 'ADD_PRODUCT',
        product: {
            id: '123123123123',
            name: 'TestProduct',
            price: 10.00,
            description: 'A test product for a test',
            image_url: 'test_url.jpg'
        } }
    expect(rootReducer(state, action).toEqual({
        "products": {
            "47314fa1-ae56-4eae-80be-af6691145951": {
                "name": "tv",
                "price": 219.99,
                "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
                "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
            },
            "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": {
                "name": "microwave",
                "price": 100.00,
                "description": "Heat your food with the power of SCIENCE!",
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
            },
            "b04b779c-1cfb-48a7-8424-25a8c7e608ae": {
                "name": "toaster oven",
                "price": 20.49,
                "description": "Tasty bread not included.",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg"
            },
            "4260bf52-218a-480e-87ea-4ff42470ce98": {
                "name": "chair",
                "price": 100.89,
                "description": "It's a chair. You can sit in it.",
                "image_url": "https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG"
            },
            "6a56c22f-2a85-4751-98a9-14e280fcecd8": {
                "name": "mirror",
                "price": 20.99,
                "description": "Mirror mirror on the wall, who has the greatest mirror of them all? YOU WILL, if you buy this.",
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_703892ef-2db0-4e02-b9c8-685e4a5c37a0"
            },
            "2266b2d6-3d71-4356-8065-392f1fceab07": {
                "name": "phone",
                "price": 399.99,
                "description": "Because there are absolutely no downsides that come with easier access to social media.",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/717DO5Q-aCL._SY879_.jpg"
            },
            '123123123123': {
                "name": 'TestProduct',
                "price": 10.00,
                "description": 'A test product for a test',
                "image_url": 'test_url.jpg'
            }
        }
    }))
})