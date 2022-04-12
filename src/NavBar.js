import './Nav.css'

import React from 'react';
import { useNavigate } from 'react-router-dom'

function NavBar(){
    const navigate = useNavigate()
    return(
        <table className='navbar'>
            <thead>
                <tr>
                    <th 
                        className='brandHeader'
                    >
                            <button 
                                onClick={() => navigate('/')}
                            >
                                Shoply
                            </button>
                    </th>
                    <td
                        className='resourceNav'
                        onClick={() => navigate('/products')}
                    >
                        <button 
                            onClick={() => navigate('/products')}
                        >
                            Products
                        </button>
                        <button>
                            Example
                        </button>
                    </td>
                </tr>
            </thead>
        </table>
    )
}

export default NavBar