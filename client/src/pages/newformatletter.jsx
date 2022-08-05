import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { jsPDF } from "jspdf";
import ReactDOMServer from "react-dom/server";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { useReactToPrint } from 'react-to-print';
// import { useRef } from 'react';
// import Example from './PDFComponent';

import PDF, { Text, AddPage, Line, Table, Html } from 'jspdf-react'
 
const styleH1 = {
  fontSize: '15px',
  textAlign: 'center',
  color: 'red'
};
const invisibleStyle = {
  display: 'none',
};
 

function NewFormatLetter() {
    const [formData,setFormData] = useState([        
    ]);
    const navigate = useNavigate();
    useEffect(()=>{
        const getldetails = async (id)=>{
            const res = await fetch(`http://localhost:5000/getlastindex`);
            // const data = await res.json();
            // setFormData(data);
            // console.log(formData);
            const getdata = await res.json();
            setFormData(getdata);
            console.log(getdata);
            
            
        }
       
        getldetails();
    },[]);


    const editletter = async (id) => {
      navigate('/EditForm',`http://localhost:5000/getlastindex`);
      // navigate('/EditForm',formData);
      
    }
    //jspdf
    const properties = { header: 'Acme' }
    //print
   
      // const componentRef = useRef();
      // const handlePrint = useReactToPrint({
      //   content: () => componentRef.current,
      // });
   

    

    const PDFGenerator=()=>{

      var doc= new jsPDF('landscape','px','a4','false');
      doc.addPage()
      // const doc = new jsPDF();
      doc.text("hello", 10, 10);
      doc.save("a4.pdf");
      
    };




  return (
    <Fragment>
       
    <div>
      {/* {formData.l_name} */}
      <h3 className="m-3 text-center">{formData.l_name}</h3>

      <div className="m-5 text-end">
        <h6 className="text-uppercase">{formData.company_name}</h6>
        <h6>{formData.c_ress_line1}</h6>
        <h6>{formData.c_address_line2}</h6>
        <h6>{formData.c_city}</h6>
        <h6>{formData.c_email_ress}</h6>
      </div>

      <div className="m-5">
        <p>{formData.offer_date}</p>
        <p>{formData.p_employees_name}</p>
        <p>{formData.p_employees_email}</p>
        <p>
          <b>Re: Employment Terms</b>
        </p>
        <p>Dear {formData.p_employees_name} ,</p>
        <p>
          {formData.company_name} (the "Company") is pleased to offer you
          the position of {formData.stock_opttion}, on the following
          terms.
          <br />
          <br />
          You will be responsible for {formData.stock_opttion}, and will
          report to the {formData.direct_report}. You will work at our
          office located in {formData.office_location}. The Company may
          change your position, duties, and work location from time to time in
          its discretion. <br />
          <br />
          You will be paid a starting salary at the Rs.
          {formData.paid_method} per month, less payroll deductions and
          withholdings, paid on the Company's normal payroll schedule. <br />
          <br />
          During your employment, you will be eligible to participate in the
          standard benefits plans offered to similarly situated employees by the
          Company from time to time, subject to plan terms and generally
          applicable Company policies. A full description of these benefits is
          available for your review. The Company may change compensation and
          benefits from time to time in its discretion.
          <br />
          <br />
          As a Company employee, you will be expected to abide by Company rules
          and policies. As a condition of employment, you must sign and comply
          with the attached Employee Confidential Information and Inventions
          Assignment Agreement which prohibits unauthorized use or disclosure of
          the Company's proprietary information, among other obligations.
          <br />
          <br />
          In your work for the Company, you will be expected not to use or
          disclose any confidential information, including trade secrets, of any
          former employer or other person to whom you have an obligation of
          confidentiality. Rather, you will be expected to use only that
          information which is generally known and used by persons with training
          and experience comparable to your own, which is common knowledge in
          the industry or otherwise legally in the public domain, or which is
          otherwise provided or developed by the Company. You agree that you
          will not bring onto Company premises any unpublished documents or
          property belonging to any former employer or other person to whom you
          have an obligation of confidentiality. You hereby represent that you
          have disclosed to the Company any contract you have signed that may
          restrict your activities on behalf of the Company. <br />
          <br />
          You may terminate your employment with the Company at any time and for
          any reason whatsoever simply by notifying the Company. Likewise, the
          Company may terminate your employment at any time, with or without
          cause or advance notice. Your employment at-will status can only be
          modified in a written agreement signed by you and by an officer of the
          Company. This offer is contingent upon a reference check and
          satisfactory proof of your right to work in the Sri Lanka. You agree
          to assist as needed and to complete any documentation at the Company's
          request to meet these conditions. <br />
          <br />
          This letter, together with your Employee Confidential Information and
          Inventions Assignment Agreement, forms the complete and exclusive
          statement of your employment agreement with the Company. It supersedes
          any other agreements or promises made to you by anyone, whether oral
          or written. Changes in your employment terms, other than those changes
          expressly reserved to the Company's discretion in this letter, require
          a written modification signed by an officer of the Company. If any
          provision of this offer letter agreement is determined to be invalid
          or unenforceable, in whole or in part, this determination shall not
          affect any other provision of this offer letter agreement and the
          provision in question shall be modified so as to be rendered
          enforceable in a manner consistent with the intent of the parties
          insofar as possible under applicable law. <br />
          <br />
          Please sign and date this letter, and the enclosed Employee
          Confidential Information and Inventions Assignment Agreement and
          return them to me by {formData.offer_ep_datte} if you wish to
          accept employment at the Company under the terms described above. If
          you accept our offer, we would like you to start on{' '}
          {formData.anticipated_date}.
          <br />
          We look forward to your favorable reply and to a productive and
          enjoyable work relationship.
          <br />
          Sincerely,
          <br />
          <br />
          {formData.company_name}
          <br />
          <br />
          <br />
          ____________________________________________ <br />
          {formData.company_signer}, {formData.direct_report}
          <br />
          {formData.signer_email} <br />
          <br />
          <b> Accepted: </b>
          <br />
          <div class="row text-center">
            <div class="col">
              ____________________________________________ <br />
              {formData.p_employees_name} <br />
              <br />
            </div>
            <div class="col">
              ____________________________________________ <br />
              {formData.offer_date}
              <br />
              <br />
            </div>
          </div>
          Attachment: Employee Confidential Information and Inventions
          Assignment Agreement
        </p>
      
      

        {" "}
        <Button
        className='float-end primary'
        style={{fontSize:'16px',paddingLeft:'43px',paddingRight:'50px'}}
         onClick={editletter}>EDIT</Button>{" "}<br/><br/>

       {"     "}
        <Button className='float-end primary'
        style={{fontSize:'16px'}} onClick={PDFGenerator}>Download Pdf</Button>

      </div>
    {/* print pdf */}
      {/* <div>
      <NewFormatLetter ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div> */}
    
   
    </div>
    
    </Fragment>

      
        
        
       
        
    
  )
}

export default NewFormatLetter;