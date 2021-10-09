import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import SafePage from "./pages/safes/safes.component";

import ValutPage from "./pages/valut/vault";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SafePage />
      </div>
    </div>
  );
}

export default App;
