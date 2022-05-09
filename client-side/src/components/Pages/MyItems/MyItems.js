import React, { useEffect, useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const email = user.email;

  useEffect(() => {
    const url = `https://limitless-anchorage-63563.herokuapp.com/items/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleShowBtn = (id) => {
    const url = `/updateItem/${id}`;
    navigate(url);
  };

  const handleDeleteBtn = (id) => {
    const url = `https://limitless-anchorage-63563.herokuapp.com/item/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Delete item successfully!");
        }
      });
    const restItem = items.filter((item) => item._id !== id);
    setItems(restItem);
  };

  return (
    <section className="py-5">
      <Container>
        <Card>
          <Card.Header className="bg-secondary fw-bold text-white text-center fs-5">
            My All Items
          </Card.Header>
          <Card.Body>
            {items.length === 0 ? (
              <h1 className="text-danger text-center">Empty Items</h1>
            ) : (
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Stock</th>
                    <th>Supplier Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={item.image}
                          alt="item_img"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.stock}</td>
                      <td>{item.supplier}</td>
                      <td>
                        <Button
                          variant="secondary"
                          onClick={() => handleShowBtn(item._id)}
                        >
                          Show
                        </Button>
                        <Button
                          variant="danger"
                          type="submit"
                          className="fw-bold ms-1"
                          onClick={() => handleDeleteBtn(item._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default MyItems;
