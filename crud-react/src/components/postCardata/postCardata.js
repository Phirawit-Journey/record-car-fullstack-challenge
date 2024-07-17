import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./postCardata.css";
import { useNavigate } from "react-router-dom";

const PostCardata = () => {
  const [formData, setFormData] = useState({
    vehicleid: "",
    brand: "",
    model: "",
    note: "",
    others: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(response);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  // console.log("vehicleid", formData.vehicleid);
  // console.log("brand", formData.brand);
  // console.log("model", formData.model);
  // console.log("note", formData.note);
  // console.log("others", formData.others);

  return (
    <>
      <div className="center-form">
        <h1>ADD NEW VEHICLE</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicVehicleid">
            <Form.Label>Vehicle ID</Form.Label>
            <Form.Control
              type="text"
              name="vehicleid"
              placeholder="Enter vehicle ID (ขร4902)"
              value={formData.vehicleid}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBrand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              placeholder="Enter brand"
              value={formData.brand}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicModel">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              placeholder="Enter model"
              value={formData.model}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNote">
            <Form.Label>Note</Form.Label>
            <Form.Control
              type="text"
              name="note"
              placeholder="Enter note"
              value={formData.note}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicOthers">
            <Form.Label>Others</Form.Label>
            <Form.Control
              type="text"
              name="others"
              placeholder="Enter others"
              value={formData.others}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PostCardata;
