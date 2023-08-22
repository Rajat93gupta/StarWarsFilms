
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home';
import Detail from './Component/Detail/Detail';

function App() {
  return (
    <div>
      {/* <Home/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/Details/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
