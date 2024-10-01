import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { removeCart, clearCart } from '../../Redux/reducers/Addtocart';

const Navbar = () => {
    const data = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="Home" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact" >Contact</Link>
                            </li>


                        </ul>
                        <FaShoppingCart type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                        {data.length}


                    </div>
                </div>



            </nav>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Add to cart</h5>
                    <button className='ms-5' onClick={() => dispatch(clearCart())}>Clear All</button>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {data && data.length > 0 ? (
                        data.map((item, index) => {
                            return (
                                <div key={item.id} className='d-flex justify-content-center align-items-center gap-2 border p-2'>
                                    <div className="cart-item-image" style={{ width: "50%" }}>
                                        <img src={item.image} style={{ height: "70px", width: "70px" }} alt={item.title} />
                                    </div>
                                    <div className="cart-item-title" style={{ width: "50%" }}>
                                        <h2 style={{ fontSize: "18px" }}>{item.title}</h2>
                                        <p> Quantity = {item.quantity}</p>
                                    </div>
                                    <button onClick={() => dispatch(removeCart(item.id))}>Remove</button>
                                </div>

                            );
                        })
                    ) : (
                        <h1>No data found</h1>
                    )}

                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar