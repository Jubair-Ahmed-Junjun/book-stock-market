import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [showReset, setShowReset] = useState(false);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    userUsingEmailAndPasswordLogin,
    loadingEmailAndPassword,
    errorEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorForResetPassword] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (loading || loadingEmailAndPassword || sending) {
    return <Loading></Loading>;
  }

  if (user || userUsingEmailAndPasswordLogin) {
    navigate(from, { replace: true });
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleShowResetPassword = () => {
    setShowReset(true);
  };

  const handleSendEmailForResetPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    sendPasswordResetEmail(email);
    e.target.email.value = "";
    setShowReset(false);
    toast("Send Email Successfully");
  };

  return (
    <section className="my-5">
      <Container>
        <Card className="form-resize mx-auto">
          <Card.Header className="bg-secondary text-white fw-bold">
            {showReset ? "Reset Password" : "Login Form"}
          </Card.Header>
          <Card.Body className="py-4">
            <Form
              onSubmit={
                showReset ? handleSendEmailForResetPassword : handleLogin
              }
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              {!showReset && (
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
              )}
              {error && <p className="text-danger">{error?.message}</p>}
              {errorEmailAndPassword && (
                <p className="text-danger">{errorEmailAndPassword?.message}</p>
              )}
              {errorForResetPassword && (
                <p className="text-danger">{errorForResetPassword?.message}</p>
              )}
              {showReset ? (
                <Button
                  variant="secondary"
                  type="submit"
                  className="fw-bold w-100 mt-3"
                >
                  Send Email
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  type="submit"
                  className="fw-bold w-100 mt-3"
                >
                  Login
                </Button>
              )}
              {!showReset && (
                <>
                  <p className="my-2">
                    Create a new account{" "}
                    <Link
                      to="/signUp"
                      className="text-decoration-none fw-bold text-secondary"
                    >
                      SignUp
                    </Link>{" "}
                  </p>
                  <p className="my-2">
                    Forgot Password{" "}
                    <a
                      className="text-decoration-none text-secondary fw-bold"
                      onClick={handleShowResetPassword}
                      style={{ cursor: "pointer" }}
                    >
                      Reset Password
                    </a>
                  </p>
                </>
              )}
            </Form>
            {!showReset && (
              <div>
                <div className="mb-3 mt-4 d-flex align-items-center justify-content-center">
                  <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
                  <p className="text-primary fw-bold mx-2">Or</p>
                  <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
                </div>
                <Button
                  variant="success"
                  onClick={handleGoogleLogin}
                  type="button"
                  className="w-100 fw-bold"
                >
                  Sign in with Google
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
