import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-input-calendar';
import moment from 'moment';
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
  };

  const Letter = async (id) => {
    const res = await fetch(`http://localhost:5000/delete/${id}`, {
      method: 'Delete',
      headers: { 'Content-Type': 'application/json' },
    });
  };
  const handleShow = () => {
    setShow(true);
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

  //Editting existing todos
  const handleEdit = async (e) => {
    console.log('clicked');
    e.preventDefault();
    try {
      const body = {
        l_name: lname,
        Company_Name: CompanyName,
        C_ress_line1: cAddLine1,
        C_Address_Line2: cAddressLine2,
        c_City: city,
        C_Email_ress: cEmail,
        P_Employees_Name: eName,
        P_Employees_Email: eEmail,
        Offer_Date: oDate,
        Direct_Report: directReport,
        Office_Location: officeLocation,
        Paid_Method: paidMethod,
        Stock_opttion: stockopttion,
        Offer_EP_datte: oExDate,
        Anticipated_date: anticipatedDate,
        Company_Signer: companySigner,
        Signer_Title: signerTitle,
        Signer_Email: signerEmail,
        Prepairs_Email: prepairsEmail,
      };
      // const response = await fetch(
      // `http://localhost:5000/letterdt/${props.letterdt.l_id}`,
      // {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(body),
      // }
      const response = await fetch('http://localhost:5000/letterdt', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      navigate('/NewFormatLetter');
      //   state: {
      //     lname,
      //     CompanyName,
      //     cAddLine1,
      //     city,
      //     cEmail,
      //     eName,
      //     eEmail,
      //     oDate,
      //     directReport,
      //     officeLocation,
      //     paidMethod,
      //     stockopttion,
      //     oExDate,
      //     anticipatedDate,
      //     companySigner,
      //     signerTitle,
      //     signerEmail,
      //     prepairsEmail,
      //   },
      // });
      Letter(props.letterdt.l_id);
      console.log(props.letterdt.l_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const dateFromDateString = (dateString) => {
    return moment(new Date(dateString)).format('YYYY-MM-DDT00:00:00.000');
  };

  const dateForPicker = (dateString) => {
    return moment(new Date(dateString)).format('YYYY-MM-DD');
  };

 

  return (
    <>
      <Button
        variant="primary"
        style={{
          fontSize: '16px',
          paddingLeft: '2px',
          paddingRight: '1px',
        }}
        onClick={handleShow}
      >
        Edit & Download
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        // dialogClassName="modal-90w"
        // aria-labelledby="example-custom-modal-styling-title"
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
            <Form onSubmit={handleEdit}>
              <div className="col">
                <h1 className="comA">General Details</h1>
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label for="validationServer03" className="form-label">
                      Letter Name
                    </Form.Label>
                    <Form.Control
                      name="lName"
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
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
                    <Form.Label for="validationServer03" className="form-label">
                      Company Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      Address line 1
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                      value={cAddLine1}
                      onChange={(e) => setCAddLine1(e.target.value)}
                    />
                    <Form.Text className="text-muted">Address Line 1</Form.Text>
                  </Form.Group>
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicA2">
                    <Form.Label for="validationServer03" className="form-label">
                      Addres line 2
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      City
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Text className="text-muted">Home town</Form.Text>
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label for="validationServer03" className="form-label">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      Prospective Employee's Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                      value={eName}
                      onChange={(e) => setEName(e.target.value)}
                    />
                    <Form.Text className="text-muted">full name</Form.Text>
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label for="validationServer03" className="form-label">
                      Prospective Employee's Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
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
                    <Form.Label for="validationServer03" className="form-label">
                      Offer Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                      value={oDate ? dateForPicker(oDate) : ''}
                      onfocus={dateForPicker(oDate)}
                      placeholder={oDate ? dateForPicker(oDate) : 'dd/mm/yyyy'}
                      onChange={(e) =>
                        setODate(dateFromDateString(e.target.value))
                      }
                    />
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label for="validationServer03" className="form-label">
                      Direct Report
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      Office Location
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      Salary Per Month
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      Position
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      Offer Expiration Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      min={oDate}
                      required
                      value={oExDate ? dateForPicker(oExDate) : ''}
                      onfocus={dateForPicker(oExDate)}
                      placeholder={
                        oDate ? dateForPicker(oExDate) : 'dd/mm/yyyy'
                      }
                      onChange={(e) =>
                        setOExDate(dateFromDateString(e.target.value))
                      }
                    />
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label for="validationServer03" className="form-label">
                    Start Antipated Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      min={oDate}
                      required
                      value={anticipatedDate ? dateForPicker(anticipatedDate) : ''}
                      onfocus={dateForPicker(anticipatedDate)}
                      placeholder={
                        anticipatedDate ? dateForPicker(anticipatedDate) : 'dd/mm/yyyy'
                      }
                      onChange={(e) =>
                        setAnticipatedDate(dateFromDateString(e.target.value))
                      }
                    />
                  </Form.Group>
                  <br />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label for="validationServer03" className="form-label">
                      Company Signer
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                      value={companySigner}
                      onChange={(e) => setCompanySigner(e.target.value)}
                    />
                    <Form.Text className="text-muted">Full name</Form.Text>
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label for="validationServer03" className="form-label">
                      Signer's Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
                    <Form.Label for="validationServer03" className="form-label">
                      Signer's Email Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                      value={signerEmail}
                      onChange={(e) => setSignerEmail(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                </div>

                <div className="col">
                  <Form.Group className="mb-3" controlId="formBasicn">
                    <Form.Label for="validationServer03" className="form-label">
                      Preparer's Email Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
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
              <button
                variant="primary"
                className="float-end primary btn btn-primary"
                style={{
                  fontSize: '16px',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                }}
              >
                Submit & Download
              </button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditOffer;
