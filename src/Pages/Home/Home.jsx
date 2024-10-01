import React from 'react';
import Usefetch from '../../CustomHooks/Usefetch';
import { Link } from 'react-router-dom';

const Home = () => {
    const { Isloading, Isdata } = Usefetch('https://fakestoreapi.com/products');

    if (Isloading) {
       return <div  className="spinner">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }

    return (

        <div className="container">
            <div className="row justify-content-center">
                {Isdata && Isdata.length > 0 ? (
                    Isdata.map((item) => (
                        <div className="col-md-4 mb-4 d-flex justify-content-center" key={item.id}>
                            <div className="card" style={{ width: '20rem' }}>
                                <img src={item.image} className="card-img-top" alt={item.title} style={{height:"200px" , width:"300px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.slice(0,30)}....</h5>
                                    <p className="card-text">{item.description.slice(0, 100)}...</p>
                                    <Link to={`/SingleProduct/${item.id}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data available</div>
                )}
            </div>
        </div>

    );
};

export default Home;
