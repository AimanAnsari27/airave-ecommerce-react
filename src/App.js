import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Routers from "./Router";
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
