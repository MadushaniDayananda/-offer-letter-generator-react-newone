import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print-advanced';
import FormatLetter from './format_Letter';
import PrintOffer from './printletter';

 
class ComponentToPrint extends React.Component {
  render() {
    return (
    //    <FormatLetter/>
    <h1>madu</h1>
    );
  }
}
 
const EditPdf = () => {
  const componentRef = useRef();
  return (
    <div>
        
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
export default EditPdf;