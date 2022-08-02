import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">home</Link> | <Link to="/invoices">Demo page</Link> |{" "}
        <Link to="/expenses">About us</Link>
      </nav>
      <div>Some landing page content</div>
    </div>
  );
}

export default App;
