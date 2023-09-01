import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BackgroundImage from '../../images/nic-chi-guvnhd3hbxw-unsplash.jpg';
import UserNav from '../Components/UserNav';
import Footer from './Footer';
import ProductByCategory from '../Components/ProductByCategory';

export default function Category() {
  const [category, setCategory] = useState([]);
  const [tabkey, settabKey] = useState('all');
  
  useEffect(() => {
    axios.get('http://localhost:1234/api/get-all-categories')
      .then(json => setCategory(json.data.categories))
      .catch(err => alert(err.message));
  }, []);

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '100vh', backgroundSize: 'cover' }}>
      <UserNav />
      <div className="container my-5">
        <h2 className="text-center" style={{ marginBottom: '10px', fontFamily: 'Pacifico', fontSize: '2rem', color: 'white' }}>
          Category
        </h2>
        <div className="text-center" style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>
          {/* Your category description here */}
        </div>
        <div className="row my-5">
          <Tabs
            id="controlled-tab-example"
            activeKey={tabkey}
            onSelect={(k) => settabKey(k)}
            className="mb-3"
          >
            <Tab eventKey="all" title="All">
              <ProductByCategory CategoryName="all" />
            </Tab>
            {category.map((val, key) => (
              <Tab key={key} eventKey={val.CategoryName} title={val.CategoryName.toUpperCase()}>
                <ProductByCategory CategoryName={val.CategoryName} />
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}
