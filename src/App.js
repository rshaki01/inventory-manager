import Home from "./pages/home/Home";
import Inventory from "./pages/inventory/Inventory";
import Sales from "./pages/sales/Sales";
import Expenses from "./pages/expenses/Expenses";
import './components/sidebar/sidebar.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/inventory" element={<Inventory />}/>
          <Route path="/expenses" element={<Expenses />}/>
          <Route path="/sales" element={<Sales />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
