import React from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";
import useItems from "../../../../hooks/useItems";

const Items = () => {
  const [items, setItems] = useItems();
  const sixItems = items.slice(0, 6);

  return (
    <section className="my-5">
      <h1 className="text-secondary text-center display-6 fw-bold mb-5">
        All Items
      </h1>
      <div>
        {items.length === 0 ? (
          <h1 className="display-6 fw-bold text-center text-danger">
            Empty items
          </h1>
        ) : (
          <Row xs={1} md={3} className="g-4">
            {sixItems.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </Row>
        )}
      </div>
    </section>
  );
};

export default Items;
