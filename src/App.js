import Home from './pages/Home/Home';
import Transacoes from './pages/Transacoes/Transacoes';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
