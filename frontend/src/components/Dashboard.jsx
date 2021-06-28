import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
    } catch {}
  }

  return (
    <>
      <div>
        <strong>Email:</strong> {currentUser.email}
        <button onClick={handleLogout}>logout</button>
      </div>
    </>
  );
}
