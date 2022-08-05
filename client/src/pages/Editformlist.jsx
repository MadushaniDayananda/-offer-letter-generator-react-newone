import React, { Fragment, useState, useEffect } from 'react';
//new change
import { Link, useNavigate } from 'react-router-dom';
import './form.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './form.css';

function EditOfferListForm() {
 
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
        
  
       
      } catch (err) {
        console.error(err.message);
      }
   
      navigate('/NewFormatLetter');
      console.log(anticipatedDate);

    };
  
    
  

 

  useEffect(()=>{
    const getldetails = async (id)=>{
        const res = await fetch(`http://localhost:5000//getlastindex`);
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


  return (
    <Fragment>
        
        <div className="mLarge">
        <hr />
        <Form onSubmit={onSubmitForm}>
          <div className='row'>
          <h1 className="comA">General Details</h1>
            <div className='col'>
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
            <div className='col'>
              <Form.Group className="mb-3" controlId="formBasicn">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  className="border border-primary border-1"
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
                  (City, State in which the employee will be expected to work).
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
        <Button
          onClick={onSubmitForm}
          className='float-end primary'
          style={{fontSize:'16px',paddingLeft:'50px',paddingRight:'50px'}}
        >
          Submit
        </Button>
        
        <submitButton />
      </div>
         
      
    </Fragment>
  );
}

export default EditOfferListForm;