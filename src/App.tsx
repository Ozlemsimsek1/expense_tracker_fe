import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={() => <div>Welcome to Home Page!</div>} exact />
        <Route path="/register" component={SignUp} />
      </React.Fragment>
    </Router>
  );
}

export default App;
