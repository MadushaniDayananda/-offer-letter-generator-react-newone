import React, { Fragment, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Table from 'react-bootstrap/Table';
import './form.css';
import EditOffer from './editofferform';
import PrintOffer from './printletter'


const FormList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //delete

  const deleteletter = async (id) => {
    console.log('clicked');
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
    navigate('/EditForm', `http://localhost:5000/getlastindex`);
    console.log(id);
  };

  const getLetter = async () => {
    console.log('clicked');
    try {
      const response = await fetch('http://localhost:5000/letterdt');
      const jsonData = await response.json();

      setList(jsonData);

      console.log(list);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLetter();
  }, []);

  return (
    <Fragment>
      {' '}
      <div className="mLarge">
        <Table striped bordered hover variant="warning">
          <thead>
            <tr className="table-dark">
              <th>Description</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
              <th className="text-center">View</th>
             
            </tr>
          </thead>
          <tbody>
            {list.map((letterdt) => (
              <tr key={letterdt.l_id} className="rw">
                <td>
                  {letterdt.l_name + ' [ ' + letterdt.stock_opttion + ' ]'}
                </td>
                {/* <td>
                <Editletterdt letterdt={letterdt} />
              </td> */}
                <td className="text-center">
                 
                  <EditOffer letterdt={letterdt} />
                </td>
                <td className="text-center">
                  {/* <button
                  className="btn btn-danger"
                  onClick={() => deleteletter(letterdt.l_id)}
                >
                  Delete
                </button> */}

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

                  <Popup
                    trigger={
                      <button className="btn btn-danger"> Delete</button>
                    }
                    position="center"
                  >
                    <div className="div1">
                      <div>Are you sure to delete this offer letter?</div>
                      <div>
                        <Button
                          variant="danger"
                          className="mt-2"
                          onClick={() => deleteletter(letterdt.l_id)}
                        >
                          YES
                        </Button>
                      </div>
                    </div>
                  </Popup>
                </td>
                <td>
                  <PrintOffer letterdt={letterdt}/>
                </td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default FormList;
