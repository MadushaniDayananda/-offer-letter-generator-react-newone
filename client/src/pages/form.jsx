import React, { Fragment, useState, useEffect } from 'react';
//new change
import { Link, useNavigate } from 'react-router-dom';
import './form.css';
import Form from 'react-bootstrap/Form';
import Schema from 'validate';

function FORM(props) {
  const [l_name, setL_name] = useState();
  const [Company_Name, setCompany_Name] = useState();
  const [C_ress_line1, setC_ress_line1] = useState();
  const [C_Address_Line2, setC_Address_Line2] = useState();
  const [c_City, setc_City] = useState();
  const [C_Email_ress, setC_Email_ress] = useState();
  const [P_Employees_Name, setP_Employees_Name] = useState();
  const [P_Employees_Email, setP_Employees_Email] = useState();
  const [Offer_Date, setOffer_Date] = useState();
  const [Direct_Report, setDirect_Report] = useState();
  const [Office_Location, setOffice_Location] = useState();
  const [Paid_Method, setPaid_Method] = useState();
  const [Stock_opttion, setStock_opttion] = useState();
  const [Offer_EP_datte, setOffer_EP_datte] = useState();
  const [Anticipated_date, setAnticipated_date] = useState();
  const [Company_Signer, setCompany_Signer] = useState();
  const [Signer_Title, setSigner_Title] = useState();
  const [Signer_Email, setSigner_Email] = useState();
  const [Prepairs_Email, setPrepairs_Email] = useState();
  const [minDate, setMinDate] = useState(null);
  //new change
  const navigate = useNavigate();
  const [details, setDetails] = useState();

  //validation
  const [error, setError] = useState(false);

  //Date validation

  const onSubmitForm = async (e) => {
    e.preventDefault();

    console.log('click');
    try {
      const body = {
        l_name,
        Company_Name,
        C_ress_line1,
        C_Address_Line2,
        c_City,
        C_Email_ress,
        P_Employees_Name,
        P_Employees_Email,
        Offer_Date,
        Direct_Report,
        Office_Location,
        Paid_Method,
        Stock_opttion,
        Offer_EP_datte,
        Anticipated_date,
        Company_Signer,
        Signer_Title,
        Signer_Email,
        Prepairs_Email,
      };
      const response = await fetch('http://localhost:5000/letterdt', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      setDetails(data);

      console.log(data.l_id);
      console.log(details);
      const id = data.l_id;

      navigate('/NewFormatLetter', `http://localhost:5000//getlastindex`);
      {
        /*navigate('/Example');*/
      }

      // navigate('/formatletter', {
      //   state: {
      //     l_name
      //   },
      // });

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const handler = (e) => {
  //   e.preventDefault();
  //   onSubmitForm();
  // }

  // const getInitialState = () => {
  //   return {
  //     l_name: '',
  //     l_nameValid: false, // valid flags for each field
  //     submitDisabled: true, // separate flag for submit
  //   };
  // };
  // const handleChangel_name = (e) => {
  //   // separate handler for each field
  //   let l_nameValid = e.target.value ? true : false; // basic email validation
  //   let submitValid = this.state.l_nameValid; // validate total form
  //   this.setState({
  //     email: e.target.value,
  //     l_nameValid: l_nameValid,
  //     submitDisabled: !submitValid,
  //   });
  // };

  const [text, enableButton] = useState('');

  const handleTextChange = (event) => {
    enableButton(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n
            text: ${text} \n
            You can replace this alert with your process`);
  };

  const user = new Schema({
    l_name: {
      required: true,
    },
  });

  return (
    <Fragment>
      <div className="mLarge">
        <hr />

        <Form onSubmit={onSubmitForm}>
          {/* <div className="row">
            <div className="col"> */}
          <div className="row">
            <h1 className="comA">General Details</h1>
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicName" required>
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
                  value={l_name}
                  onChange={(e) => setL_name(e.target.value)}
                  required

                  //   onMouseOver={this.handleChangel_name}
                />
                <Form.Text className="text-muted">
                  We'll never share your name with anyone else.
                </Form.Text>
                {/* <div id="validationServer03Feedback" className="invalid-feedback">
                  Please provide a valid name.
                </div> */}
              </Form.Group>
            </div>
            {/* </div> */}

            {/* <div className="col"> */}
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Company Name</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Company_Name}
                  onChange={(e) => setCompany_Name(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Enter your company's legal name exactly as it appears on your
                  formation documents.
                </Form.Text>
              </Form.Group>
            </div>
          </div>
          <br />
          {/* </div>
          </div> */}

          <div className="row">
            <h1 className="comA">Company Details</h1>
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicA1">
                <Form.Label for="validationServer03" className="form-label">Address line 1</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={C_ress_line1}
                  onChange={(e) => setC_ress_line1(e.target.value)}
                />
                <Form.Text className="text-muted">Address Line 1</Form.Text>
              </Form.Group>
            </div>

            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicA2">
                <Form.Label for="validationServer03" className="form-label">Addres line 2</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={C_Address_Line2}
                  onChange={(e) => setC_Address_Line2(e.target.value)}
                />
                <Form.Text className="text-muted">Address Line 2</Form.Text>
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicA3">
                <Form.Label for="validationServer03" className="form-label">City</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={c_City}
                  onChange={(e) => setc_City(e.target.value)}
                />
                <Form.Text className="text-muted">Home town</Form.Text>
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Email Address</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={C_Email_ress}
                  onChange={(e) => setC_Email_ress(e.target.value)}
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
                <Form.Label for="validationServer03" className="form-label">Prospective Employee's Name</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={P_Employees_Name}
                  onChange={(e) => setP_Employees_Name(e.target.value)}
                />
                <Form.Text className="text-muted">full name</Form.Text>
              </Form.Group>
              <br />
            </div>

            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Prospective Employee's Email</Form.Label>
                <Form.Control
                  type="email"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={P_Employees_Email}
                  onChange={(e) => setP_Employees_Email(e.target.value)}
                />
              </Form.Group>
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Offer Date</Form.Label>
                <Form.Control
                  type="date"
                  format="MM/dd/yyyy"
                  required
                  //required pattern="\d{4}-\d{2}-\d{2}"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  value={Offer_Date}
                  onChange={(e) => setOffer_Date(e.target.value)}
                />
              </Form.Group>
              <br />
            </div>

            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Direct Report</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Direct_Report}
                  onChange={(e) => setDirect_Report(e.target.value)}
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
                <Form.Label for="validationServer03" className="form-label">Office Location</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Office_Location}
                  onChange={(e) => setOffice_Location(e.target.value)}
                />
                <Form.Text className="text-muted">
                  (City, State in which the employee will be expected to work).
                </Form.Text>
              </Form.Group>
              <br />
            </div>

            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Salary Per Month</Form.Label>
                <Form.Control
                  type="number"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Paid_Method}
                  onChange={(e) => setPaid_Method(e.target.value)}
                />
              </Form.Group>
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Position</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Stock_opttion}
                  onChange={(e) => setStock_opttion(e.target.value)}
                />
              </Form.Group>
              <br />
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Offer Expiration Date</Form.Label>
                <Form.Control
                  type="date"
                  
                  min={Offer_Date}
                  required
                  // required pattern="\d{4}-\d{2}-\d{2}"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  value={Offer_EP_datte}
                  onChange={(e) => setOffer_EP_datte(e.target.value)}
                />
              </Form.Group>
              <br />
            </div>

            <div className="col">
            <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Offer Expiration Date</Form.Label>
                <Form.Control
                  type="date"
                  format="MM/dd/yyyy"
                  min={Offer_Date}
                  required
                  // required pattern="\d{4}-\d{2}-\d{2}"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  value={Anticipated_date}
                  onChange={(e) => setAnticipated_date(e.target.value)}
                />
              </Form.Group>
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Company Signer</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Company_Signer}
                  onChange={(e) => setCompany_Signer(e.target.value)}
                />
                <Form.Text className="text-muted">Full name</Form.Text>
              </Form.Group>
              <br />
            </div>

            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Signer's Title</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Signer_Title}
                  onChange={(e) => setSigner_Title(e.target.value)}
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
                <Form.Label for="validationServer03" className="form-label">Signer's Email Address</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Signer_Email}
                  onChange={(e) => setSigner_Email(e.target.value)}
                />
              </Form.Group>
              <br />
            </div>

            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Preparer's Email Address</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1 form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                  value={Prepairs_Email}
                  onChange={(e) => setPrepairs_Email(e.target.value)}
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
            className="float-end primary btn btn-primary"
            style={{
              fontSize: '16px',
              paddingLeft: '50px',
              paddingRight: '50px',
            }}
          >
            Submit
          </button>
        </Form>
        <submitButton />
      </div>
    </Fragment>
  );
}

export default FORM;
