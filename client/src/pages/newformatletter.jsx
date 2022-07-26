import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import './form.css';

function NewFormatLetter() {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getldetails = async (id) => {
      const res = await fetch(`http://localhost:5000/getlastindex`);
      // const data = await res.json();
      // setFormData(data);
      // console.log(formData);
      const getdata = await res.json();
      setFormData(getdata);
      console.log(getdata);
    };

    getldetails();
  }, []);

  const editletter = async (id) => {
    navigate('/EditForm', `http://localhost:5000/getlastindex`);
    // navigate('/EditForm',formData);
  };
  //jspdf
  const properties = { header: 'Acme' };
  //print

  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  const PDFGenerator = () => {
    console.log('clicked');

    navigate('/Example');
  };

  const handle = () => {
    return (
      <div>
        <Button
          className="float-end primary"
          style={{
            fontSize: '16px',
            paddingLeft: '43px',
            paddingRight: '50px',
          }}
          onClick={editletter}
        >
          EDIT
        </Button>{' '}
        <br />
        <br />
        {'     '}
        <Button
          className="float-end primary"
          style={{ fontSize: '16px' }}
          onClick={PDFGenerator}
        >
          Download Pdf
        </Button>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="letterfont">
        <div className="letterdiv">
          {/* {formData.l_name} */}
          <h3 className='text-center'>{formData.l_name}</h3>
          <div className="m-5">
            <p className="text-uppercase">{formData.company_name}</p>
            <p>{formData.c_ress_line1}</p>
            <p>{formData.c_address_line2}</p>
            <p>{formData.c_city}</p>
            <p>{formData.c_email_ress}</p>
          </div>
          <div className="m-5">
            {/* <p>{new Intl.DateTimeFormat('en-GB').format(new Date(formData.offer_date))}</p> */}
            {moment(formData.offer_date).format('DD-MM-YYYY')}
            <p>{formData.p_employees_name}</p>
            <p>{formData.p_employees_email}</p>
            <p>
              <b>Re: Employment Terms</b>
            </p>
            <p>Dear {formData.p_employees_name} ,</p>
            <p >
              {formData.company_name} (the "Company") is pleased to offer you
              the position of {formData.stock_opttion}, on the following terms.
              <br />
           
              You will be responsible for {formData.stock_opttion}, and will
              report to the {formData.direct_report}. You will work at our
              office located in {formData.office_location}. The Company may
              change your position, duties, and work location from time to time
              in its discretion. <br />
              <br />
              You will be paid a starting salary at the Rs.
              {formData.paid_method} per month, less payroll deductions and
              withholdings, paid on the Company's normal payroll schedule.{' '}
              <br />
              During your employment, you will be eligible to participate in the
              standard benefits plans offered to similarly situated employees by
              the Company from time to time, subject to plan terms and generally
              applicable Company policies. A full description of these benefits
              is available for your review. The Company may change compensation
              and benefits from time to time in its discretion.
              <br />
              As a Company employee, you will be expected to abide by Company
              rules and policies. As a condition of employment, you must sign
              and comply with the attached Employee Confidential Information and
              Inventions Assignment Agreement which prohibits unauthorized use
              or disclosure of the Company's proprietary information, among
              other obligations.
            </p>

            <br />
            <p>
              In your work for the Company, you will be expected not to use or
              disclose any confidential information, including trade secrets, of
              any former employer or other person to whom you have an obligation
              of confidentiality. Rather, you will be expected to use only that
              information which is generally known and used by persons with
              training and experience comparable to your own, which is common
              knowledge in the industry or otherwise legally in the public
              domain, or which is otherwise provided or developed by the
              Company. You agree that you will not bring onto Company premises
              any unpublished documents or property belonging to any former
              employer or other person to whom you have an obligation of
              confidentiality. You hereby represent that you have disclosed to
              the Company any contract you have signed that may restrict your
              activities on behalf of the Company. <br />
              <br />
              You may terminate your employment with the Company at any time and
              for any reason whatsoever simply by notifying the Company.
              Likewise, the Company may terminate your employment at any time,
              with or without cause or advance notice. Your employment at-will
              status can only be modified in a written agreement signed by you
              and by an officer of the Company. This offer is contingent upon a
              reference check and satisfactory proof of your right to work in
              the Sri Lanka. You agree to assist as needed and to complete any
              documentation at the Company's request to meet these conditions.{' '}
              <br />
              This letter, together with your Employee Confidential Information
              and Inventions Assignment Agreement, forms the complete and
              exclusive statement of your employment agreement with the Company.
              It supersedes any other agreements or promises made to you by
              anyone, whether oral or written. <br />
            </p>
          </div>
        </div>
        <br />
        <div className="letterdiv ">
        <div className="m-5">
          
          <br />

          <p>
            Changes in your employment terms, other than those changes expressly
            reserved to the Company's discretion in this letter, require a
            written modification signed by an officer of the Company. If any
            provision of this offer letter agreement is determined to be invalid
            or unenforceable, in whole or in part, this determination shall not
            affect any other provision of this offer letter agreement and the
            provision in question shall be modified so as to be rendered
            enforceable in a manner consistent with the intent of the parties
            insofar as possible under applicable law. <br />
            <br />
            Please sign and date this letter, and the enclosed Employee
            Confidential Information and Inventions Assignment Agreement and
            return them to me by {moment(formData.offer_ep_datte).format('DD-MM-YYYY')} if you wish to accept
            employment at the Company under the terms described above. If you
            accept our offer, we would like you to start on{' '}
            {moment(formData.anticipated_date).format('DD-MM-YYYY')}.
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
                {moment(formData.offer_date).format('DD-MM-YYYY')}
                <br />
                <br />
              </div>
            </div>
            Attachment: Employee Confidential Information and Inventions
            Assignment Agreement
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
          </p>
        </div></div>
      </div>

      {handle()}
    </Fragment>
  );
}

export default NewFormatLetter;
