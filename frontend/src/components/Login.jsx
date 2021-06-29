import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

import '../assets/login.scss';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      alert('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="email" ref={emailRef} required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" ref={passwordRef} required />
          <label>Password</label>
        </div>
        <button className="sign-button" type="submit" disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
}
