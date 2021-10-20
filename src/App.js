import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import SafePage from "./pages/safes/safes.component";
import VaultPage from "./pages/vault/vault";
import IamPage from "./pages/iam/iam";
import AzurePage from "./pages/azure/azure";
import ServiceAcountPage from "./pages/serviceAcount/serviceAcount";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/safes" />;
              }}
            />
            <Route path="/safes" component={SafePage} />
            <Route path="/vault" component={VaultPage} />
            <Route path="/iam" component={IamPage} />
            <Route path="/azure" component={AzurePage} />
            <Route path="/service" component={ServiceAcountPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
