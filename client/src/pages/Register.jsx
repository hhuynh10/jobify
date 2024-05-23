import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, redirect, useNavigation, Link } from "react-router-dom";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    return redirect("/login");
  } catch (error) {
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="John" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Smith"
        />
        <FormRow type="text" name="location" defaultValue="Earth"/>
        <FormRow type="email" name="email" defaultValue="john@gmail.com"/>

        <FormRow type="password" name="password" defaultValue="secret123"/>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
