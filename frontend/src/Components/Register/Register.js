import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./logo.png"
export default function Multiple() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://react-nvex.onrender.com/register", {
        fullName: formData.name,
        email: formData.email,
        contactNo: formData.contact,
        message: formData.message,
      })
      .then((res) => {
        alert("customer registerd");
        navigate("/success");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <div className="container">
      <div
        className="row mt-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-6 text-center">
          {" "}
          <img src={img} alt="" />
          
          <h5 className="text-success">Join Now and Get AED50</h5>
        </div>
      </div>
      <div
        className="row "
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-6" style={{ width: "50%" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="form-control mt-4"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control mt-4"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              id="contact"
              placeholder="Contact no."
              className="form-control mt-4"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />

            <textarea
              id="message"
              className="form-control mt-4"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <div
              className="col-12"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <button type="submit" className="btn btn-dark px-5 mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
