import React, { useEffect } from 'react'
import { useState } from 'react';

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://mern-product-management-backend-qgra.onrender.com/api/products/find");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching Priducts", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts()
  }, []);
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Loading Product...</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="container mt-4">
        <h2 className="text-center mb-4 fw-bold text-primary">
          Product List
        </h2>

        <div className="row g-4">
          {product.length > 0 ? (
  product.map((product) => (
        <div key={product._id} className="col-md-4 col-sm-6">
            <div className="card shadow-sm border-0 h-100">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>

                <p className="card-text">
             {product.description}
                </p>
                <h6 className='text-muted'>Category:{product.category}</h6>
                <h5 className="text-success">${product.price}</h5>
              </div>
            </div>
          </div>
  ))):(
    <p>No Product available</p>
  )
}
      
        </div>
      </div>
    </div>
  )
}

export default ProductList
