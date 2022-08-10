import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const PrintOffer = (props) => {
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
  const[id,setId]=useState();
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
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
    setId(props.letterdt.l_id);
   
  };

  

 
 
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        View
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
          <div >
         
   
          
            <div className="letterfont">
        <div className="letterdiv">
          {/* {l_name} */}
          <h3 className='text-center'>{lname}</h3>
          <div className="m-5">
            <p className="text-uppercase">{CompanyName}</p>
            <p>{cAddLine1}</p>
            <p>{cAddressLine2}</p>
            <p>{city}</p>
            <p>{cEmail}</p>
          </div>
          <div className="m-5">
            {/* <p>{oDate}</p> */}
            <p>{moment(oDate).format('DD-MM-YYYY')}</p>
            {/* <p>{new Intl.DateTimeFormat('en-GB').format(new Date(oDate))}</p>  */}
            <p>{eName}</p>
            <p>{eEmail}</p>
            <p>
              <b>Re: Employment Terms</b>
            </p>
            <p>Dear {eName} ,</p>
            <p >
              {CompanyName} (the "Company") is pleased to offer you
              the position of {stockopttion}, on the following terms.
              <br />
           
              You will be responsible for {stockopttion}, and will
              report to the {directReport}. You will work at our
              office located in {officeLocation}. The Company may
              change your position, duties, and work location from time to time
              in its discretion. <br />
              <br />
              You will be paid a starting salary at the Rs.
              {paidMethod} per month, less payroll deductions and
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
            return them to me by {moment(oExDate).format('DD-MM-YYYY')} if you wish to accept
            employment at the Company under the terms described above. If you
            accept our offer, we would like you to start on{' '}
            {moment(anticipatedDate).format('DD-MM-YYYY')}.
            <br />
            We look forward to your favorable reply and to a productive and
            enjoyable work relationship.
            <br />
            Sincerely,
            <br />
            <br />
            {CompanyName}
            <br />
            <br />
            <br />
            ____________________________________________ <br />
            {companySigner}, {signerTitle}
            <br />
            {signerEmail} <br />
            <br />
            <b> Accepted: </b>
            <br />
            <div class="row text-center">
              <div class="col">
                ____________________________________________ <br />
                {eName} <br />
                <br />
              </div>
              <div class="col">
                ____________________________________________ <br />
                {moment(oDate).format('DD-MM-YYYY')}
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
          </div>
        </Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          </Modal.Footer>
     
      </Modal>
      
      
    </>
  );
};

export default PrintOffer;
