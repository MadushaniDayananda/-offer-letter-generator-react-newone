import React, { Fragment, useEffect, useState } from "react";

const FormList = () => {
  const [list, setList] = useState([]);

  //delete  

  const deleteletter= async id => {
    try {
      const deleteletter = await fetch(`http://localhost:5000/letterdt/${id}`, {
        method: "DELETE"
      });

      setList(list.filter(list => list.l_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getLetter = async () => {
    try {
      const response = await fetch("http://localhost:5000/letterdt");
      const jsonData = await response.json();

      setList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLetter();
  }, []);

  console.log(list);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {list.map(letterdt => (
            <tr key={letterdt.l_id}>
              <td>{letterdt.l_name}</td>
              {/* <td>
                <Editletterdt letterdt={letterdt} />
              </td> */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteletter(letterdt.l_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default FormList;