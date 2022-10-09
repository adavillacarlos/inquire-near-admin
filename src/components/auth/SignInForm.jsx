import { Form, Button } from "react-bootstrap";
import SignInController from "../../controllers/signin/SignInController";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const SignInForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleSignIn,
    handleGoogleSignIn,
  } = SignInController();
  const client = process.env.REACT_APP_CLIENT_ID;

  return (
    <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit">
        Sign In
      </Button>
      {error && (
        <div className="text-center pt-3">
          <span>Wrong email or password</span>
        </div>
      )}

      <div className="justify-content-center" style={{ marginTop: "1rem" }}>
        <GoogleOAuthProvider clientId={client}>
          <GoogleLogin
            onSuccess={handleGoogleSignIn}
            onFailure={(e) => console.log("Error! ", e)}
          />
        </GoogleOAuthProvider>
      </div>
    </Form>
  );
};

export default SignInForm;
