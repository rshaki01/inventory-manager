import Home from "./pages/home/Home";
import Inventory from "./pages/inventory/Inventory";
import './components/sidebar/sidebar.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/inventory" element={<Inventory />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
