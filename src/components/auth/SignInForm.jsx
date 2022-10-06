import { Form, Button } from "react-bootstrap";
import useSignInController from "../../controllers/signin/useSignInController";

const SignInForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleSignIn,
  } = useSignInController();

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

      <div>
        Hello
      </div>
    </Form>
  );
};

export default SignInForm;
