import React from 'react'

import pic from "../Assets/Images/pic.jpg"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../Store/index'

export default function Shop() {
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreators,dispatch)
    return (
        <div>
            <div className="card">
                <img src={pic} className="card-img-top" alt="..." height="250px" />
                <div className="card-body">
                    <h5 className="card-title">Man's T-Shirt fit Round collar Levi's Black</h5>
                    <p className="card-text">Price : &#8377;<del>7800</del><sub>780</sub></p>
                    <p className="card-text">Discount : 90%</p>
                    <button className="btn btn-success w-100 btn-sm my-1" onClick={()=>action.addToCart(1)}>Add To Cart</button>
                    <button className="btn btn-success w-100 btn-sm my-1" onClick={()=>action.removeFromCart(1)}>Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}
