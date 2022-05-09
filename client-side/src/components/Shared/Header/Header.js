import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
// import Loading from "../Loading/Loading";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // if (loading) {
  //   return <Loading></Loading>;
  // }

  const handleLoginButton = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <header>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Book Stock Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link>
              {user && (
                <Nav.Link as={Link} to="/manageItems">
                  Manage Books
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} to="/addItem">
                  Add Book
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} to="/myItems">
                  My Books
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} to="/myItems">
                  {user?.displayName}
                </Nav.Link>
              )}
              {user ? (
                <Button
                  variant="danger"
                  className="fw-bold"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={handleLoginButton}
                  variant="info"
                  className="fw-bold text-white"
                >
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
