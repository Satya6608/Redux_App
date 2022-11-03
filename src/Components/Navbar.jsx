import React from 'react'
import { useSelector } from 'react-redux'
export default function Navbar() {
    const cart = useSelector(state=>state.cart)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Redux App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <button type="button" className="btn btn-primary position-relative">
                                Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                                    {cart}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
