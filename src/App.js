import "./App.css";
import Routers from "./Router";
import { Footer, Header } from "./Components/index";
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app-container'>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
