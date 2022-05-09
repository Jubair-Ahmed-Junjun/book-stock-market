import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ height: "400px" }}
    >
      <div>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>{" "}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    </section>
  );
};

export default Loading;
