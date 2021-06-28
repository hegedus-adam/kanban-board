import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <>
      <div>
        {error && <h2>{error}</h2>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" ref={emailRef} required />
          <input
            type="password"
            placeholder="pass"
            ref={passwordRef}
            required
          />
          <button disabled={loading} type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
