import React, { useState } from 'react';
import { Link,Navigate, useLocation,useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';



function FormatLetter() {
  const navigate = useNavigate();
  var location = useLocation();
  console.log(location.state);

  const editletter=()=>{
    navigate('/formList',)
  }
  return (
    <>
      <div>
        {/* {location.state.lname}
        {location.state.CompanyName} */}

        <h3 className="m-3 text-center">{location.state.lname}</h3>

       <div className="m-5 text-end">
         <h6 className="text-uppercase">{location.state.CompanyName}</h6>
         <h6>{location.state.cAddLine1}</h6>
         <h6>{location.state.cAddressLine2}</h6>
         <h6>{location.state.city}</h6>
         <h6>{location.state.cEmail}</h6>
       </div>

       <div className="m-5">
         <p>{location.state.Offer_Date}</p>
         <p>{location.state.eName}</p>
         <p>{location.state.eEmai}</p>
         <p>
           <b>Re: Employment Terms</b>
         </p>
         <p>Dear {location.state.eName} ,</p>
         <p>
           {location.state.CompanyName} (the "Company") is pleased to offer you
           the position of {location.state.stockopttion}, on the following
           terms.
           <br />
           <br />
           You will be responsible for {location.state.stockopttion}, and will
           report to the {location.state.directReport}. You will work at our
           office located in {location.state.officeLocation}. The Company may
           change your position, duties, and work location from time to time in
           its discretion. <br />
           <br />
           You will be paid a starting salary at the Rs.
           {location.state.paidMethod} per month, less payroll deductions and
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
           return them to me by {location.state.oExDate} if you wish to
           accept employment at the Company under the terms described above. If
           you accept our offer, we would like you to start on{' '}
           {location.state.anticipatedDate}.
           <br />
           We look forward to your favorable reply and to a productive and
           enjoyable work relationship.
           <br />
           Sincerely,
           <br />
           <br />
           {location.state.CompanyName}
           <br />
           <br />
           <br />
           ____________________________________________ <br />
           {location.state.companySigner}, {location.state.signerTitle}
           <br />
           {location.state.signerEmail} <br />
           <br />
           <b> Accepted: </b>
           <br />
           <div class="row text-center">
             <div class="col">
               ____________________________________________ <br />
               {location.state.eName} <br />
               <br />
             </div>
             <div class="col">
               ____________________________________________ <br />
               {location.state.oDate}
               <br />
               <br />
             </div>
           </div>
           Attachment: Employee Confidential Information and Inventions
           Assignment Agreement
         </p>

         <Button className="btn-success" onClick={editletter}>
           {' '}
           Edit
         </Button>{"                                              "}

      
     </div>
        
      </div>
    </>
  );
}
export default FormatLetter;
