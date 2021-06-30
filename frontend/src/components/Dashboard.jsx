import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import '../assets/dashboard.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Board from './Board';

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
      <div className="main-container">
        <Navbar user={currentUser.email} logout={handleLogout} />
        <Board />
        <Footer />
      </div>
  );
}
