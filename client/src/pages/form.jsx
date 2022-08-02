import React, { Fragment, useState } from 'react';
//new change
import {Link, useNavigate} from 'react-router-dom';
import './form.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function FORM(props) {
    const [l_name, setL_name] = useState();
    const [Company_Name, setCompany_Name] = useState();
    const [C_ress_line1,setC_ress_line1] =useState();
    const [C_Address_Line2,setC_Address_Line2] =useState();
    const [c_City,setc_City] =useState();
    const [C_Email_ress,setC_Email_ress] =useState();
    const [P_Employees_Name,setP_Employees_Name] =useState();
    const [P_Employees_Email,setP_Employees_Email] =useState();
    const [Offer_Date,setOffer_Date] =useState();
    const [Direct_Report,setDirect_Report] =useState();
    const [Office_Location,setOffice_Location] =useState();
    const [Paid_Method,setPaid_Method] =useState();
    const [Stock_opttion,setStock_opttion] =useState();
    const [Offer_EP_datte,setOffer_EP_datte] =useState();
    const [Anticipated_date,setAnticipated_date] =useState();
    const [Company_Signer,setCompany_Signer] =useState();
    const [Signer_Title,setSigner_Title] =useState();
    const [Signer_Email,setSigner_Email] =useState();
    const [Prepairs_Email,setPrepairs_Email] =useState();
    //new change
    const navigate = useNavigate();
    const [details,setDetails] = useState([]);


    const onSubmitForm = async e => {
        e.preventDefault();
        console.log("click");
        try {
            const body = { l_name, Company_Name,C_ress_line1 ,C_Address_Line2,c_City,C_Email_ress,P_Employees_Name,P_Employees_Email,Offer_Date,Direct_Report,Office_Location,Paid_Method,Stock_opttion,Offer_EP_datte,Anticipated_date,Company_Signer,Signer_Title,Signer_Email,Prepairs_Email};
            const response = await fetch("http://localhost:5000/letterdt", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const data = await response.json()
            setDetails(data)
            
            console.log(data);
            console.log(l_name, Company_Name);


        } catch (error) {
            console.log(error.message)

        }
    }


    //new change
   
    const toComponentFormatletter=()=>{
                
                navigate('/formatletter',{state:{details}});
          }




    return (
        <Fragment>
            
            <hr />
            <Form onSubmit={onSubmitForm} >
                <Form.Group className="mb-3" controlId="formBasicName"  >
                    <Form.Label>Letter Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                        value={l_name}
                        onChange={e => setL_name(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text"
                        value={Company_Name}
                        onChange={e => setCompany_Name(e.target.value)}
                    />
                    <Form.Text className="text-muted">

                        Enter your company's legal name exactly as it appears on your formation documents.
                    </Form.Text>
                </Form.Group><br />

                <Form.Group className="mb-3" controlId="formBasicA1" >
                    <h1 className='comA'>Company Address</h1>
                    <Form.Label></Form.Label>
                    <Form.Control type="text"
                        value={C_ress_line1}
                        onChange={e => setC_ress_line1(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Address Line 1
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicA2" >
                    <Form.Label></Form.Label>
                    <Form.Control type="text"
                        value={C_Address_Line2}
                        onChange={e => setC_Address_Line2(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Address Line 2
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicA3" >
                    <Form.Label></Form.Label>
                    <Form.Control type="text"
                        value={c_City}
                        onChange={e => setc_City(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        City
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>General Company Email Address</Form.Label>
                    <Form.Control type="text"
                        value={C_Email_ress}
                        onChange={e => setC_Email_ress(e.target.value)}
                    />
                    <Form.Text className="text-muted">

                        (e.g. hello@acme.com)
                    </Form.Text>
                </Form.Group><br />

                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Prospective Employee's Name</Form.Label>
                    <Form.Control type="text"
                        value={P_Employees_Name}
                        onChange={e => setP_Employees_Name(e.target.value)}
                    />
                    <Form.Text className="text-muted">

                        full name
                    </Form.Text>
                </Form.Group><br />

                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Prospective Employee's Email</Form.Label>
                    <Form.Control type="text"
                        value={P_Employees_Email}
                        onChange={e => setP_Employees_Email(e.target.value)}
                    />
                    
                </Form.Group><br />



                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Offer Date</Form.Label>
                    <Form.Control type="date"
                        value={Offer_Date}
                        onChange={e => setOffer_Date(e.target.value)}
                    />

                </Form.Group><br />



                {/* <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text"
                        value={Company_Name}
                        onChange={e => setCompany_Name(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        (e.g. Marketing Manager, Engineer, Business Development Manager)
                    </Form.Text>
                </Form.Group><br />

                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Duties</Form.Label>
                    <Form.Control type="text"
                        value={Company_Name}
                        onChange={e => setCompany_Name(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Finish this sentence: "You will be responsible for..." (e.g. overseeing all technical aspects of the organization)
                    </Form.Text>
                </Form.Group><br /> */}

                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Direct Report
                    </Form.Label>
                    <Form.Control type="text"
                        value={Direct_Report}
                        onChange={e => setDirect_Report(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        (e.g. CEO, CFO, CTO).
                    </Form.Text>
                </Form.Group><br />


                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Office Location
                    </Form.Label>
                    <Form.Control type="text"
                        value={Office_Location}
                        onChange={e => setOffice_Location(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        (City, State in which the employee will be expected to work).
                    </Form.Text>
                </Form.Group><br />


                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Paid Hourly or Salary?
                    </Form.Label>
                    <Form.Control type="text"
                        value={Paid_Method}
                        onChange={e => setPaid_Method(e.target.value)}
                    />

                </Form.Group><br />


                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Stock Options?
                    </Form.Label>
                    <Form.Control type="text"
                        value={Stock_opttion}
                        onChange={e => setStock_opttion(e.target.value)}
                    />

                </Form.Group><br />


                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Offer Expiration Date
                    </Form.Label>
                    <Form.Control type="date"
                        value={Offer_EP_datte}
                        onChange={e => setOffer_EP_datte(e.target.value)}
                    />

                </Form.Group><br />


                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Anticipated Start Date
                    </Form.Label>
                    <Form.Control type="date"
                        value={Anticipated_date}
                        onChange={e => setAnticipated_date(e.target.value)}
                    />

                </Form.Group><br />


                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Company Signer
                    </Form.Label>
                    <Form.Control type="text"
                        value={Company_Signer}
                        onChange={e => setCompany_Signer(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Full name
                    </Form.Text>

                </Form.Group><br />


               
                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Signer's Title
                    </Form.Label>
                    <Form.Control type="text"
                        value={Signer_Title}
                        onChange={e => setSigner_Title(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        (e.g. President, CEO).
                    </Form.Text>
                </Form.Group><br />

                
                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Signer's Email Address
                    </Form.Label>
                    <Form.Control type="text"
                        value={Signer_Email}
                        onChange={e => setSigner_Email(e.target.value)}
                    />
                    
                </Form.Group><br />

                
                <Form.Group className="mb-3" controlId="formBasicn"  >
                    <Form.Label>Preparer's Email Address
                    </Form.Label>
                    <Form.Control type="text"
                        value={Prepairs_Email}
                        onChange={e => setPrepairs_Email(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    We'll send the draft offer letter to this address.
                    </Form.Text>
                </Form.Group><br />

            </Form>
            <Button onClick={onSubmitForm} variant='success'style={{align:"center"}}>submit</Button>
            <button onClick={()=>{toComponentFormatletter()}}>Component B</button>
            {details.l_name}




        </Fragment>

    );
}

export default FORM;