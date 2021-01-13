import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../forms/InputField';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <InputField label="User" type="text" name="username" {...username} />
        <InputField
          label="Password"
          type="password"
          name="password"
          {...password}
        />
        <Button>Get in</Button>
      </form>
      <Link to="/login/register">Sign up</Link>
    </div>
  );
};

export default LoginForm;
