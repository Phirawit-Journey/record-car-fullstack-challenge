import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import "./updateCardata.css";
import { useNavigate } from "react-router-dom";

const UpdateCardata = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vehicleid: "",
    brand: "",
    model: "",
    note: "",
    others: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/car/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.log("error while fetching cardatas:", error.message);
      }
    };
    fetchUser();
  }, [id]);

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
      const response = await fetch(`http://localhost:8000/api/car/${id}`, {
        method: "PATCH",
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

  return (
    <>
      <div className="center-form">
        <h1>EDIT DATA</h1>
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
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateCardata;
