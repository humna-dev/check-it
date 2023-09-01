import React, { useEffect, useState } from 'react';
import UserCards from '../Components/UserCards';
import axios from 'axios';
import BackgroundImage from '../../images/nic-chi-guvnhd3hbxw-unsplash.jpg';
import UserNav from '../Components/UserNav';
import Footer from './Footer';

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
};

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1234/api/get-all-products')
      .then((json) => setProducts(json.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '100vh', backgroundSize: 'cover' }}>
        <UserNav />
        <div className="container my-5">
          <div className="text-center">
            <h2>Products</h2>
            <small className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!
            </small>
          </div>

          <div className="row my-5">
            {products.map((val, key) => (
              <div key={key} className="col-md-4">
                <div style={cardStyle}>
                  <UserCards image={val.thumbnail} name={val.productName} url={`/products/${val._id}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
