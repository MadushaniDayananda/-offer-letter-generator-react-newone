import React, { Fragment, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const FormList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //delete

  const deleteletter = async (id) => {
    try {
      const deleteletter = await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
      });

      setList(list.filter((letterdt) => letterdt.l_id !== id));
      console.log(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const editletter = async (id) => {
    navigate('/EditForm', `http://localhost:5000/getone/${id}`);
    console.log(id);
  };

  const getLetter = async () => {
    try {
      const response = await fetch('http://localhost:5000/letterdt');
      const jsonData = await response.json();

      setList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLetter();
  }, []);

  console.log(list);

  return (
    <Fragment>
      {' '}
      <table class="table mt-5 text-center table-striped table-hover table-sm">
        <thead>
          <tr className="table-dark">
            <th>Description</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {list.map((letterdt) => (
            <tr key={letterdt.l_id} className="rw">
              <td>{letterdt.l_name}</td>
              {/* <td>
                <Editletterdt letterdt={letterdt} />
              </td> */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteletter(letterdt.l_id)}
                >
                  Delete
                </button>

                {/* <Button variant="danger" onClick={() => handleShow(letterdt.l_id)} data-bs-toggle="modal"
                    data-bs-target={`#id${letterdt.l_id}`}>
                    Delete
                  </Button>
                  <Modal
                    id={`${letterdt.l_id}`}
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure to delete this offer letter?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        No
                      </Button>
                      <button
                        className="btn btn-danger"
                       onClick={() => deleteletter(letterdt.l_id)}
                      >
                        Delete
                      </button>
                      
                      <Button variant="primary" id={`${letterdt.l_id}`} onClick={() => deleteletter(letterdt.l_id)}>Yes</Button>
                    </Modal.Footer>
                  </Modal> */}
                {/* <button
                      type="button"
                      class="btn btn-warning"
                      data-toggle="modal"
                      data-target={`#id${letterdt.l_id}`}
                      onClick={() => handleShow(letterdt.l_id)}
                    >
                      Delete
                    </button>

                    <Modal
                    id={`$id{letterdt.l_id}`}
                    data-toggle="modal"
                    data-target={`#id${letterdt.l_id}`}
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    
                  >

                   <Modal.Header closeButton>
                      <Modal.Title>Delete Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure to delete this offer letter?
                    </Modal.Body>
                    <Modal.Footer>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                      onClick={handleClose}
                    >
                      Close
                    </button>

                    <button
                      type="button"
                      class="btn btn-warning"
                      data-dismiss="modal"
                      onClick={() => deleteletter(letterdt.l_id)}
                    >
                      Yes
                    </button>


                    </Modal.Footer>
                    </Modal> */}

              
                <button
                  className="btn btn-primary"
                  onClick={() => editletter(letterdt.l_id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default FormList;
