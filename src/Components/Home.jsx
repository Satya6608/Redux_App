import React from 'react'
import Cart from './Cart'
import Shop from './Shop'

export default function () {
    return (
        <div className='catainer-fluid mt-2'>
            <div className='row'>
                <div className="col-md-3 col-sm-6 col-12">
                    <Shop/>
                </div>
                <div className="col-md-6 col-sm-6 col-12"></div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Cart/>
                </div>
            </div>
        </div>
    )
}
