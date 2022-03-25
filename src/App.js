import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Routers from './Router'
function App() {
  return (
    <div className="App">
      {/* <h1>hello world</h1> */}
      <Header />
      {/* <Home /> */}
      <Routers />
    </div>
  );
}

export default App;
