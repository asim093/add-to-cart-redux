import React from 'react';
import Usefetch from '../../CustomHooks/Usefetch';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../Redux/reducers/Addtocart'; 

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { Isdata, Isloading } = Usefetch(`https://fakestoreapi.com/products/${id}`);

  function handleAddToCart(data) {
    alert('Product Added Into Cart');
    dispatch(addCart(data)); 
  }

  if (Isloading) {
    return (
      <div className="spinner">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
        {Isdata ? (
          <div key={Isdata.id} className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
            <div style={{ width: '300px' }}>
              <img src={Isdata.image} alt={Isdata.title} style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="text-center" style={{ maxWidth: '500px' }}>
              <h3>{Isdata.title}</h3>
              <p>{Isdata.description}</p>
            </div>
            <button className='btn btn-info' onClick={() => handleAddToCart(Isdata)}>Add to Cart</button>
          </div>
        ) : (
          <div>Product not found</div>
        )}

        <Link to="/Home" className='btn btn-primary mx-2'>Back To Home</Link>
      </div>
    </>
  );
};

export default SingleProduct;
