import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Table, Row, Container, Button } from "react-bootstrap";

const Dashboard = () => {
  const [cardatas, setCardatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/car");
        const data = await response.json();
        setCardatas(data);
      } catch (error) {
        console.log("error while fetching cardatas:", error.message);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdate = (cardataId) => {
    navigate(`/car/${cardataId}`);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Dashboard Component</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>vehicle ID</th>
                  <th>brand</th>
                  <th>model</th>
                  <th>note</th>
                  <th>others</th>
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
                        variant="dark"
                        onClick={() => handleUpdate(cardata._id)}
                      >
                        Update
                      </Button>{" "}
                      {/* <Button
                        variant="danger"
                        onClick={() => handleDelete(cardata._id)}
                      >
                        Delete
                      </Button>{" "} */}
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
