import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';

import '../assets/login.scss';
import { BiKey } from 'react-icons/bi';

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
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" ref={emailRef} />
              <span className="icon is-small is-left">
                <AiOutlineMail />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" ref={passwordRef} />
              <span className="icon is-small is-left">
                <BiKey />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" className="button is-success" disabled={loading}>
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
