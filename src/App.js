import "./App.css";
import Routers from "./Router";
import {Header, Footer} from './Components/index'


function App() {
  return (
    <div className="App">
      <Header />
        <Routers />
      <Footer />

    </div>
  );
}

export default App;
