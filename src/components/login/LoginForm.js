import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "react-bootstrap/Form";
import Form from 'react-bootstrap/Form'


const schema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
      console.log(data);
      try {
        const response = 
        await axios.post("https://shielded-beach-74825.herokuapp.com/auth/local", {
            identifier: data.username,
            password: data.password,
        });
        console.log("response", response.data);
        setAuth(response.data);
		localStorage.setItem("Token", response.data.jwt);
        history.push("/Admin");

      } catch (error) {
        console.log("error", error);

        setLoginError(error.toString());
      } finally {
        setSubmitting(false);
      }
    }

  return (
    <>
    <h1 id="loginheader" class="text-center"> Please enter you admin credentials</h1>
    <div className="login-form">
    
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
          <Form.Control name="username" placeholder="Username" ref={register} />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>
          <div>
          <Form.Control 
              name="password"
              placeholder="Password"
              ref={register}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button class="standard-button">{submitting ? "Logging in." : "Login"}</button>
        </fieldset>
      </form>
      </div>
    </>
    
  );
}