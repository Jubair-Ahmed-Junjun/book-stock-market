import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/manageItems");
  }

  const handleSignUpData = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password.length <= 5) {
      setErrorMessage("Password must have at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Password not matched");
      return;
    }

    setErrorMessage("");
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  return (
    <section className="my-5">
      <Container>
        <Card className="rafat-form-resize mx-auto">
          <Card.Header className="bg-primary text-white fw-bold">
            Create your new account
          </Card.Header>
          <Card.Body className="py-4">
            <Form onSubmit={handleSignUpData}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter your password again"
                  required
                />
              </Form.Group>
              {error && <p className="text-danger fw-bold">{error.message}</p>}
              {errorMessage && (
                <p className="text-danger fw-bold">{errorMessage}</p>
              )}
              <Button
                variant="primary"
                type="submit"
                className="fw-bold w-100 mt-3"
              >
                Sign up
              </Button>
              <p className="my-2">
                Already have an account{" "}
                <Link
                  to="/login"
                  className="text-decoration-none fw-bold text-primary"
                >
                  Login
                </Link>{" "}
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default SignUp;
