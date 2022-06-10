
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  document.body.style = 'background: #e0e4eb;';
  return (
    <div className='body'>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
