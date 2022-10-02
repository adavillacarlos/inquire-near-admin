import { Form, Button } from "react-bootstrap";
import SignInController from "../../controllers/signin/SignInController";

const SignInForm = () => {
  const { email, setEmail, password, setPassword, handleSubmit } =
    SignInController();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder="Email"
          type="email"
          onBlur={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onBlur={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <div className="text-center pt-4 text-muted"></div>
    </Form>
  );
};

export default SignInForm;
