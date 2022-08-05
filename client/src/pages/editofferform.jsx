import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const EditOffer = (props) => {
  const [show, setShow] = useState(false);
  const [lname, setLName] = useState();
  const [CompanyName, setCompanyName] = useState();
  const [cAddLine1, setCAddLine1] = useState();
  const [cAddressLine2, setCAddressLine2] = useState();
  const [city, setCity] = useState();
  const [cEmail, setCEmail] = useState();
  const [eName, setEName] = useState();
  const [eEmail, setEEmail] = useState();
  const [oDate, setODate] = useState();
  const [directReport, setDirectReport] = useState();
  const [officeLocation, setOfficeLocation] = useState();
  const [paidMethod, setPaidMethod] = useState();
  const [stockopttion, setStockOpttion] = useState();
  const [oExDate, setOExDate] = useState();
  const [anticipatedDate, setAnticipatedDate] = useState();
  const [companySigner, setCompanySigner] = useState();
  const [signerTitle, setSignerTitle] = useState();
  const [signerEmail, setSignerEmail] = useState();
  const [prepairsEmail, setPrepairsEmail] = useState();
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setLName(props.letterdt.l_name);
    setCompanyName(props.letterdt.company_name);
    setCAddLine1(props.letterdt.c_ress_line1);
    setCAddressLine2(props.letterdt.c_address_line2);
    setCity(props.letterdt.c_city);
    setCEmail(props.letterdt.c_email_ress);
    setEName(props.letterdt.p_employees_name);
    setEEmail(props.letterdt.p_employees_email);
    setODate(props.letterdt.offer_date);
    setDirectReport(props.letterdt.direct_report);
    setOfficeLocation(props.letterdt.office_location);
    setPaidMethod(props.letterdt.paid_method);
    setStockOpttion(props.letterdt.stock_opttion);
    setOExDate(props.letterdt.offer_ep_datte);
    setAnticipatedDate(props.letterdt.anticipated_date);
    setCompanySigner(props.letterdt.company_signer);
    setSignerTitle(props.letterdt.signer_title);
    setSignerEmail(props.letterdt.signer_email);
    setPrepairsEmail(props.letterdt.prepairs_email);


  };
  const handleShow = () => setShow(true);

  //Editting existing todos
  const handleEdit = async (e) => {
    console.log('clicked');
    e.preventDefault();
    try {
      const body = {
        l_name: lname,
        company_name: CompanyName,
        c_ress_line1: cAddLine1,
        c_address_line2: cAddressLine2,
        c_city: city,
        c_email_ress: cEmail,
        p_employees_name: eName,
        p_employees_email: eEmail,
        offer_date: oDate,
        direct_report: directReport,
        office_location: officeLocation,
        paid_method: paidMethod,
        stock_opttion: stockopttion,
        offer_ep_datte: oExDate,
        anticipated_date: anticipatedDate,
        company_signer: companySigner,
        signer_title: signerTitle,
        signer_email: signerEmail,
        prepairs_email: prepairsEmail,
      };
      const response = await fetch(
        `http://localhost:5000/letterdt/${props.letterdt.l_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      navigate('/formatletter', {
        state: {
          lname,
          CompanyName,
          cAddLine1,
          city,
          cEmail,
          eName,
          eEmail,
          oDate,
          directReport,
          officeLocation,
          paidMethod,
          stockopttion,
          oExDate,
          anticipatedDate,
          companySigner,
          signerTitle,
          signerEmail,
          prepairsEmail,
        },
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-900w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <input
            type="text"
            className="form-control"
            placeholder="Add todo"
            value={l_name}
            onChange={(e) => setl_name(e.target.value)}
          /> */}
          <div className="mLarge2">
            <hr />
            <Form onSubmit={handleClose}>
              <div className="col">
                <h1 className="comA">General Details</h1>
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Letter Name</Form.Label>
                    <Form.Control
                      name="lName"
                      type="text"
                      className="border border-primary border-1"
                      placeholder="Enter name"
                      value={lname}
                      onChange={(e) => setLName(e.target.value)}
                      required
                      //   onMouseOver={this.handleChangel_name}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your name with anyone else.
                    </Form.Text>
                  </Form.Group>
                </div>
                {/* </div> */}

                {/* <div className="col"> */}
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={CompanyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Enter your company's legal name exactly as it appears on
                      your formation documents.
                    </Form.Text>
                  </Form.Group>
                </div>
              </div>
              <br />
              {/* </div>
          </div> */}

              <div className="col">
                <h1 className="comA">Company Details</h1>
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicA1">
                    <Form.Label>Address line 1</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={cAddLine1}
                      onChange={(e) => setCAddLine1(e.target.value)}
                    />
                    <Form.Text className="text-muted">Address Line 1</Form.Text>
                  </Form.Group>
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicA2">
                    <Form.Label>Addres line 2</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={cAddressLine2}
                      onChange={(e) => setCAddressLine2(e.target.value)}
                    />
                    <Form.Text className="text-muted">Address Line 2</Form.Text>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicA3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Text className="text-muted">Home town</Form.Text>
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={cEmail}
                      onChange={(e) => setCEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      (e.g. hello@acme.com)
                    </Form.Text>
                  </Form.Group>
                  <br />
                </div>
                <h1 className="comA">Offer Details</h1>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Prospective Employee's Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={eName}
                      onChange={(e) => setEName(e.target.value)}
                    />
                    <Form.Text className="text-muted">full name</Form.Text>
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Prospective Employee's Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="border border-primary border-1"
                      required
                      value={eEmail}
                      onChange={(e) => setEEmail(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Offer Date</Form.Label>
                    <Form.Control
                      type="date"
                      format="MM/dd/yyyy"
                      className="border border-primary border-1"
                      value={oDate}
                      onChange={(e) => setODate(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Direct Report</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={directReport}
                      onChange={(e) => setDirectReport(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      (e.g. CEO, CFO, CTO).
                    </Form.Text>
                  </Form.Group>
                  <br />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Office Location</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={officeLocation}
                      onChange={(e) => setOfficeLocation(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      (City, State in which the employee will be expected to
                      work).
                    </Form.Text>
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Salary Per Month</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={paidMethod}
                      onChange={(e) => setPaidMethod(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={stockopttion}
                      onChange={(e) => setStockOpttion(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Offer Expiration Date</Form.Label>
                    <Form.Control
                      type="date "
                      format="MM/dd/yyyy"
                      className="border border-primary border-1"
                      value={oExDate}
                      onChange={(e) => setOExDate(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Anticipated Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      format="MM/dd/yyyy"
                      //   required pattern="\d{4}-\d{2}-\d{2}"
                      className="border border-primary border-1"
                      value={anticipatedDate}
                      onChange={(e) => setAnticipatedDate(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Company Signer</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={companySigner}
                      onChange={(e) => setCompanySigner(e.target.value)}
                    />
                    <Form.Text className="text-muted">Full name</Form.Text>
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Signer's Title</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={signerTitle}
                      onChange={(e) => setSignerTitle(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      (e.g. President, CEO).
                    </Form.Text>
                  </Form.Group>
                  <br />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Signer's Email Address</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={signerEmail}
                      onChange={(e) => setSignerEmail(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label>Preparer's Email Address</Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1"
                      value={prepairsEmail}
                      onChange={(e) => setPrepairsEmail(e.target.value)}
                      onfocusout
                    />
                    <Form.Text className="text-muted">
                      We'll send the draft offer letter to this address.
                    </Form.Text>
                  </Form.Group>
                  <br />
                </div>
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleEdit(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditOffer;
