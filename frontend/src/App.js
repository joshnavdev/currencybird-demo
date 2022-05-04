import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Sharing from './views/Sharing/Sharing';
import Register from './views/Register/Register';

const Manage = () => <div>Manage</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/sharing" />} />
          <Route path="/sharing" element={<Sharing />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/register/invite/:code" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
