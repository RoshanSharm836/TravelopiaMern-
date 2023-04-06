import axios from "axios";
import React, { useEffect, useState } from "react";

function DisplayData() {
  const [data, setData] = useState([]);

  const [load, setLoad] = useState(false);
  useEffect(() => {
    handle();
  }, []);
  function handle() {
    setLoad(true);
    axios.get(`https://tiny-skirt-moth.cyclic.app/`).then((res) => {
      setData(res.data);
      setLoad(false);
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Place</th>
            <th>NumofTraveller</th>
            <th>PerPersonBudget</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {load
            ? "Loading ..."
            : data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.place}</td>
                    <td>{val.NumofTraveller}</td>
                    <td>$ {val.PerPersonBudget}</td>
                    <td>$ {val.total}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
