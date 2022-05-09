import React from "react";
import { Button } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const EmailVerification = () => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user?.emailVerified || !user) {
    navigate("/");
  }

  const handleEmailVerificationSend = () => {
    const email = user.email;
    sendEmailVerification(email);
    toast("Send email successfully");
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{ height: "400px" }}
    >
      <div className="text-center">
        <h3 className="text-danger mb-3 display-6">Please verify your email</h3>
        {error && <p className="text-danger mb-3">{error.message}</p>}
        <Button variant="primary" onClick={handleEmailVerificationSend}>
          Send Verification Email
        </Button>
      </div>
    </section>
  );
};

export default EmailVerification;
