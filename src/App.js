import "./App.css";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Transactions />
    </div>
  );
}

export default App;
