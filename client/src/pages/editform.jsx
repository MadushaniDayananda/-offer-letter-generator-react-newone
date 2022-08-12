import React, { Fragment, useState, useEffect } from 'react';
//new change
import { Link, useNavigate } from 'react-router-dom';
import './form.css';
import Form from 'react-bootstrap/Form';
import moment from 'moment';


function EditForm() {
 
  //new change
  const navigate = useNavigate();
  const [lname,setLName] = useState();
  const[id,setId]=useState();
  const[CompanyName,setCompanyName]=useState();
  const[cAddLine1,setCAddLine1]=useState();
  const[cAddressLine2,setCAddressLine2]=useState();
  const[city,setCity]=useState();
  const[cEmail,setCEmail]=useState();
  const[eName,setEName]=useState();
  const[eEmail,setEEmail]=useState();
  const[oDate,setODate]=useState();
  const[directReport,setDirectReport]=useState();
  const[officeLocation,setOfficeLocation]=useState();
  const[paidMethod,setPaidMethod]=useState();
  const[stockopttion,setStockOpttion]=useState();
  const[oExDate,setOExDate]=useState();
  const[anticipatedDate,setAnticipatedDate]=useState();
  const[companySigner,setCompanySigner]=useState();
  const[signerTitle,setSignerTitle]=useState();
  const[signerEmail,setSignerEmail]=useState();
  const[prepairsEmail,setPrepairsEmail]=useState();

  
  const submit=()=>{
    onSubmitForm();
    navigate('/NewFormatLetter');

  }
  

  const onSubmitForm = async (e) => {
    console.log("test");
    
    try {
        const body = {
            l_id: id,
            l_name:lname,
            company_name:CompanyName,
            c_ress_line1:cAddLine1,
            c_address_line2:cAddressLine2,
            c_city:city,
            c_email_ress:cEmail,
            p_employees_name:eName,
            p_employees_email:eEmail,
            offer_date:oDate,
            direct_report:directReport,
            office_location:officeLocation,
            paid_method:paidMethod,
            stock_opttion:stockopttion,
            offer_ep_datte:oExDate,
            anticipated_date:anticipatedDate,
            company_signer:companySigner,
            signer_title:signerTitle,
            signer_email:signerEmail,
            prepairs_email:prepairsEmail,
        };
            console.log(body);
        const response = await fetch(
          `http://localhost:5000/update`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          }
          
        );
        console.log('clicked');
        // navigate('/NewFormatLetter');
  
       
      } catch (err) {
        console.error(err.message);
      }
   
      
      

    };
  
    
  

 

  useEffect(()=>{
    const getldetails = async (id)=>{
        const res = await fetch(`http://localhost:5000/getlastindex`);
        // const data = await res.json();
        // setFormData(data);
        // console.log(formData);
        const getdata = await res.json();
        setLName(getdata.l_name);
        setId(getdata.l_id);
        setCompanyName(getdata.company_name);
        setCAddLine1(getdata.c_ress_line1);
        setCAddressLine2(getdata.c_address_line2);
        setCity(getdata.c_city);
        setCEmail(getdata.c_email_ress);
        setEName(getdata.p_employees_name);
        setEEmail(getdata.p_employees_email);
        setODate(getdata.offer_date);
        setDirectReport(getdata.direct_report);
        setOfficeLocation(getdata.office_location);
        setPaidMethod(getdata.paid_method);
        setStockOpttion(getdata.stock_opttion);
        setOExDate(getdata.offer_ep_datte);
        setAnticipatedDate(getdata.anticipated_date);
        setCompanySigner(getdata.company_signer);
        setSignerTitle(getdata.signer_title);
        setSignerEmail(getdata.signer_email);
        setPrepairsEmail(getdata.prepairs_email);
        
        
        console.log(getdata);
        console.log(getdata.anticipated_date);
        
     
    }
    console.log(anticipatedDate);
   
    getldetails();
},[]);
const dateFromDateString = (dateString) => {
  return moment(new Date(dateString)).format('YYYY-MM-DDT00:00:00.000');
};

const dateForPicker = (dateString) => {
  return moment(new Date(dateString)).format('YYYY-MM-DD');
};


  return (
    <Fragment>
        
        <div className="mLarge">
        <hr />
        <Form onSubmit={submit}>
          <div className='row'>
          <h1 className="comA">General Details</h1>
            <div className='col'>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label for="validationServer03" className="form-label">Letter Name</Form.Label>
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
            <div className='col'>
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Company Name</Form.Label>
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
                  value={cAddLine1}
                  onChange={(e) => setCAddLine1(e.target.value)}
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
                <Form.Label for="validationServer03" className="form-label">City</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Email Address</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Prospective Employee's Name</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Prospective Employee's Email</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Offer Date</Form.Label>
                <Form.Control
                      type="date"
                      className="border border-primary border-1 form-control is-invalid"
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                      value={oDate ? dateForPicker(oDate) : ''}
                      onfocus={dateForPicker(oDate)}
                      placeholder={
                        oDate ? dateForPicker(oDate) : 'dd/mm/yyyy'
                      }
                      onChange={(e) =>
                        setODate(dateFromDateString(e.target.value))
                      }
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
                <Form.Label for="validationServer03" className="form-label">Office Location</Form.Label>
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
                  (City, State in which the employee will be expected to work).
                </Form.Text>
              </Form.Group>
              <br />
            </div>

            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label for="validationServer03" className="form-label">Salary Per Month</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Position</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Offer Expiration Date</Form.Label>
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
                    <Form.Label for="validationServer03" className="form-label">Start Anticipated Date</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Company Signer</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Signer's Title</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Signer's Email Address</Form.Label>
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
                <Form.Label for="validationServer03" className="form-label">Preparer's Email Address</Form.Label>
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

export default EditForm;