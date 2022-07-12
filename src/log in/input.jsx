import React, { useState } from "react";
import "./z2 2home.css";
import { useNavigate } from "react-router";
// jshint ignore:start

const initialValues = {
  mail: "",
  password: "",
};
export default function Form() {
  const [signed, setSigned] = useState(false);
  const navigate = useNavigate();
  const SignUp = (e) => {
    // dispatch(authActions.login());
    e.preventDefault();

    const userData = {
      name: e.target.name.value,
      mail: e.target.mail.value,
      password: e.target.password.value,
    };

    sendUserData(userData);
  };

  // const SignIn = (e) => {
  //   // dispatch(authActions.login());
  //   e.preventDefault();

  //   const userData = {
  //     mail: e.target.mail.value,
  //     password: e.target.password.value,
  //   };

  //   sendUserData(userData);
  // };

  const sendUserData = async (data) => {
    const response = await fetch("https://localhost:5000/signUp", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.found) {
      const date = new Date();

      document.cookie = `token=${result.token}; path=/; expires=${date.setDate(
        date.getDate() + 1
      )}${date.toGMTString()}`;

      setSigned(true);
      navigate(`/${result.username}`);
    } else {
      setSigned(false);
    }
  };

  const [values, setvalues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className="Form2" onSubmit={SignUp}>
      <input
        className="input1"
        value={values.mail}
        onChange={handleInputChange}
        name="mail"
        placeholder="Mail"
      />
      <input
        className="input1"
        value={values.password}
        onChange={handleInputChange}
        name="password"
        placeholder="Password"
      />
      <input type="submit" value="Создать аккаунт" className="buttonz2" />
    </form>
  );
}
// jshint ignore:end
