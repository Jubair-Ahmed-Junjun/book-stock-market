import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/manageItems");
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div>
      {error && <p className="text-danger">{error?.message}</p>}
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
  );
};

export default SocialLogin;
