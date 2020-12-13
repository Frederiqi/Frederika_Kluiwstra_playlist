import "../src/";
import Container from "./Container";
import Nav from "./components/Nav";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>

      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

export default App;
