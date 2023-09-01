import React, { useState, useEffect } from "react";
import CustomCard from "../components/CustomCard";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import OrderDetails from "../components/OrderDetails";

export default function Home() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchAllUsers = () => {
    axios
      .get("http://localhost:1234/api/getAllUsers")
      .then((response) => setUsers(response.data.Users))
      .catch((error) => console.error("Error fetching users:", error));
  };

  const fetchAllOrders = () => {
    axios
      .get("http://localhost:1234/api/get-all-orders")
      .then((response) => {
        setOrders(response.data.orders);
        fetchAllUsers();
      })
      .catch((error) => console.error("Error fetching orders:", error));
  };

  const fetchAllProducts = () => {
    axios
      .get("http://localhost:1234/api/get-all-products")
      .then((response) => {
        setProducts(response.data.products);
        fetchAllOrders();
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const fetchAllCategories = () => {
    axios
      .get("http://localhost:1234/api/get-all-categories")
      .then((response) => {
        setCategories(response.data.categories);
        //fetch all Products
        fetchAllProducts();
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:1234/api/get-all-brands")
      .then((response) => {
        setBrands(response.data.brands);
        // Now Fetch Categories
        fetchAllCategories();
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  return (
    <div className="row m-0 p-0 align-items-center">
      <div className="col-md-8" data-aos="fade-right">
        <div className="container p-5 text-center" >
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            "Empower your admin tasks with our intuitive and efficient Admin
            Dashboard."
          </p>
          <hr
            style={{
              width: "50%",
              backgroundColor: "#f0f0f0",
              height: "2px",
              border: "none",
            }}
          />
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-left">
        <div className="container p-5">
          <CustomCard
            brands={brands.length}
            categories={categories.length}
            orders={orders.length}
            products={products.length}
          />
        </div>
      </div>

      <div className="col-md-12">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center bg-theme p-2 my-3 rounded">
            <span className="fs-4 fw-bold text-theme-dark">Users</span>
          </div>

          <div className="container">
            <table className="table" data-aos="fade-left">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((val, key) => (
                  <tr key={key} >
                    <td>
                      <img
                        src={val.profile}
                        alt={val.username}
                        className="img-fluid"
                        style={{ height: "5vh", objectFit: "contain" }}
                        srcSet=""
                      />
                    </td>
                    <td>{val._id}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
