import { Route } from 'react-router';
import './App.css';
import InventoryPage from './pages/InventoryPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MapDiscoveryPage from './pages/MapDiscoveryPage';
import RegisterPage from './pages/RegisterPage';
import VendorPage from './pages/VendorPage';

function App() {
  return (
    <>
      <Route component={MainPage} path={['/', '/@:userid']} exact />
      <Route component={LoginPage} path={'/login'} />
      <Route component={RegisterPage} path={'/register'} />
      <Route component={InventoryPage} path={'/inventory/@:userid'} />
      <Route component={VendorPage} path={'/vendor/@:vendorid'} />
      <Route component={MapDiscoveryPage} path={'/search'} />
    </>
  );
}

export default App;
