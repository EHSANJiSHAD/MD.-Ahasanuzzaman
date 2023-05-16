
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  document.body.style = 'background: #e0e4eb;';
  return (
    <div className='body'>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

      </Routes>

      <Footer></Footer>

      <ToastContainer toastStyle={{ backgroundColor: "#e0e4eb",color:"gray",boxShadow: "-5px -5px 8px #edeff1, 5px 5px 10px #cacfd8"}}/>
    </div>
  );
}

export default App;
