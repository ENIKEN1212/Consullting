import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/nav';
import Main from './components/home/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='*' element={<Navbar/>} /> */}
      <Route path='/' element={<Main/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
