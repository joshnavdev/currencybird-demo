import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Sharing from './views/Sharing/Sharing';
import Register from './views/Register/Register';
import InvitationManagment from './views/InvitationManagment/InvitationManagment';
import APIErrorProvider from './commons/providers/APIErrorProvider';
import APIErrorNotification from './components/APIErrorNotification';

function App() {
  return (
    <APIErrorProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/sharing" />} />
            <Route path="/sharing" element={<Sharing />} />
            <Route path="/manage" element={<InvitationManagment />} />
            <Route path="/register/invite/:code" element={<Register />} />
          </Routes>
          <APIErrorNotification />
        </Layout>
      </Router>
    </APIErrorProvider>
  );
}

export default App;
