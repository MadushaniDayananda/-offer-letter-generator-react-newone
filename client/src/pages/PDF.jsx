import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print-advanced';
import NewFormatLetter from './newformatletter';
import './form.css';

class ComponentToPrint extends React.Component {
  render() {
    return <NewFormatLetter />;
  }
}

const Example = () => {
  const componentRef = useRef();
  return (
    <div  >
        <div >
      <ReactToPrint 
        trigger={() => (
          <button
            className="btn btn-danger mb-3"
            style={{
              fontSize: '16px',
              paddingLeft: '50px',
              paddingRight: '50px',
              
            }}
          >
            Print PDF{' '}
          </button>
          
        )}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
    </div>
  );
};
export default Example;
