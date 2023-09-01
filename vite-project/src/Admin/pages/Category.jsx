import React, { useEffect, useState } from 'react';
import CategoryModal from '../components/CategoryModal';
import axios from 'axios';
import { BiSolidEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import CategoryeditModal from '../components/CategoryEditModal'

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    axios
      .get('http://localhost:1234/api/get-all-categories')
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const deleteCategory = (_id) => {
    // Send a delete request to remove the category by ID
    console.log(_id)
        axios.delete('http://localhost:1234/api/delete-category', { data: { _id } })
            .then(json => setCategories(json.data.category))
            .catch(err => console.log(err))
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
        <span className="fs-4 fw-bold text-white">Categories</span>
        <CategoryModal recallData={setCategories} />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, key) => (
              <tr key={key}>
                <th scope="row">{category._id}</th>
                <td>{category.CategoryName}</td>
                <td>
                  <img
                    src={category.CategoryImage}
                    className="img-fluid"
                    style={{ height: '5vh', objectFit: 'contain' }}
                    alt=""
                  />
                </td>
               

<td>
  <button className="btn btn-dark mx-1">
    <BiSolidEdit />
  </button>
  <button className="btn btn-dark" onClick={() => deleteCategory(category._id)}><AiOutlineDelete /></button>
</td>



              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
