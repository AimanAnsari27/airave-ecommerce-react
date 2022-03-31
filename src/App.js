import "./App.css";
import Routers from "./Router";
import {Header, Footer} from './Components/index'
import Home from "./pages/Home/Home";

import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <div className="App">
      
      <Header />
      {/* <Home /> */}
      <Routers />

      <Footer />

    </div>
  );
}

export default App;
