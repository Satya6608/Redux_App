import React from 'react'
import { useSelector } from 'react-redux'
export default function Cart() {
    let cart = useSelector(state=>state.cart)
  return (
    <div className='table-responsive'>
        <h4 className="text-light bg-success text-center p-2">Cart</h4>
       {
           cart===0?
        <h4 className="text-light bg-success text-center p-2">No Items In Cart</h4>:

        <table className='table'>
            <tbody>
                <tr>
                    <th>Name  </th>
                    <td>Man's T-Shirt fit Round collar Levi's Black</td>
                </tr>
                <tr>
                    <th>Color </th>
                    <td>Black</td>
                </tr>
                <tr>
                    <th>Size </th>
                    <td>XL</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>&#8377; 780</td>
                </tr>
                <tr>
                    <th>Quantity</th>
                    <td>{cart}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>&#8377; {780*cart}</td>
                </tr>
                <tr>
                    <th colSpan={2}><a href="#" className='btn btn-success w-100'>Checkout</a></th>
                </tr>
            </tbody>
        </table>
        }

    </div>
  )
}
