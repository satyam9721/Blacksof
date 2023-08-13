import React, { useEffect, useState } from "react";
import axios from "axios";
import "./customer.css";

const Customer = () => {
  const [customer, setCustomer] = useState([]);
  const getCustomer = async () => {
    await axios
      .get("https://react-nvex.onrender.com/customers")
      .then((res) => {
        setCustomer(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("customerdata", customer);

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="row mt-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-12 text-center header2">
          {" "}
          <h5 className="text">Waitlist Database</h5>

        
        </div>

        <div className="">
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col-sm">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact no.</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        {customer.map((cust, key = 0) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{(key += 1)}</th>
                <td>{cust.fullName}</td>
                <td>{cust.email}</td>
                <td>{cust.contactNo}</td>
                <td>{cust.message}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
        </div>
      </div>

  
     
      </div>
      
 
  );
};

export default Customer;
