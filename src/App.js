
import { Route, Routes } from 'react-router-dom';
import './App.css';
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


    </div>
  );
}

export default App;
