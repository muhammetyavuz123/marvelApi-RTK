import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
