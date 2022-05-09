import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateItem = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [stock, setStock] = useState(0);

  useEffect(() => {
    const url = `https://limitless-anchorage-63563.herokuapp.com/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setStock(data.stock);
      });
  }, [stock]);

  const handleDelivered = (id) => {
    const newStock = parseInt(item.stock) - 1;

    const data = { stock: newStock };
    const url = `https://limitless-anchorage-63563.herokuapp.com/item/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Stock decrease successfully");
          setStock(newStock);
        }
      });
  };

  const handleInsertStockValue = (event) => {
    event.preventDefault();

    const currentStock = parseInt(item.stock);
    const newStock = parseInt(event.target.insert_stock.value);
    const totalStock = currentStock + newStock;

    const data = { stock: totalStock };
    const url = `https://limitless-anchorage-63563.herokuapp.com/item/${itemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Stock inserted successfully");
          setStock(totalStock);
        }
      });
    event.target.reset();
  };

  return (
    <section className="my-5">
      <Container>
        <Card>
          <Card.Header>
            <Row>
              <Col xs="10">
                <Card.Title>{item.name}</Card.Title>
              </Col>
              <Col xs="2" className="text-end">
                <span className="badge bg-primary">{stock}</span>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="text-center">
            <Row>
              <Col md="4">
                <img src={item.image} alt="Item_image" className="img-fluid" />
              </Col>
              <Col md="8">
                <Card.Text>Description : {item.description}</Card.Text>
                <p className="fw-bold fs-6">
                  Supplier's Name : {item.supplier}
                </p>
                <div className="mb-3">
                  <span className="badge bg-danger m-1">
                    Price : {item.price}
                  </span>
                  <span className="badge bg-success m-1">
                    Quantity : {item.quantity}
                  </span>
                  <span className="badge bg-primary m-1">Stock : {stock}</span>
                </div>
                <Button
                  variant="danger"
                  onClick={() => handleDelivered(item._id)}
                >
                  Delivered
                </Button>
                <div className="my-3">
                  <form
                    className="d-flex justify-content-center"
                    onSubmit={handleInsertStockValue}
                  >
                    <input
                      type="text"
                      name="insert_stock"
                      id="quantity"
                      className="form-control w-50"
                      placeholder="Enter new stock value"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      className="px-2 ms-1"
                    >
                      Add Now
                    </Button>
                  </form>
                </div>
              </Col>
            </Row>
          </Card.Body>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
      </Container>
    </section>
  );
};

export default UpdateItem;
