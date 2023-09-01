import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import { HiOutlinePencilAlt } from 'react-icons/hi';

function CategoryEditModal({ recallData, Name, ID }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState(Name || '');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const UpdateCategory = (e) => {
    e.preventDefault();
    const payload = {
      categoryName,
      _id: ID,
    };

    axios
      .put('http://localhost:1234/api/update-category', payload)
      .then((json) => {
        recallData(json.data.category);
        setShow(false);
        Swal.fire('Success', 'Category updated successfully!', 'success');
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <HiOutlinePencilAlt />
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={UpdateCategory}>
            <div className="mb-3">
              <label htmlFor="CategoryName" className="form-label">
                Category Name
              </label>
              <input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                className="form-control"
                id="CategoryName"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryEditModal;
