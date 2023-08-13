
import './App.css';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Success from './Components/Success/Success';
import Customer from './Components/Customers/Customer';
import Home from './Components/Landing/Home';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={ <Success/> } />
        <Route path="/customers" element={ <Customer/> } />
      </Routes>

  
  
    </div>
  );
}

export default App;
