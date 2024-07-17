import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Table, Row, Container, Button } from "react-bootstrap";

const Dashboard = () => {
  const [cardatas, setCardatas] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/car");
      const data = await response.json();
      setCardatas(data);
    } catch (error) {
      console.log("error while fetching cardatas:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (cardataId) => {
    navigate(`/car/${cardataId}`);
  };

  const handleDelete = async (cardataId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/car/${cardataId}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error while deleting car data:", error.message);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Vehicle Dashboard</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Vehicle ID</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Note</th>
                  <th>Others</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cardatas.map((cardata) => (
                  <tr key={cardata._id}>
                    <td>{cardata.vehicleid}</td>
                    <td>{cardata.brand}</td>
                    <td>{cardata.model}</td>
                    <td>{cardata.note}</td>
                    <td>{cardata.others}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleUpdate(cardata._id)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDelete(cardata._id)}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
