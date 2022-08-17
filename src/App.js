import ReactGA from "react-ga";
import "./App.css";
import { Link } from "react-router-dom";

ReactGA.initialize("UA-237915805-1");
ReactGA.plugin.require("ec");

function App() {
  const handleButtonClick = () => {
    ReactGA.plugin.execute("ec", "addProduct", {
      id: 1,
      name: "test product",
      category: "fake test",
      brand: "jane tests inc",
      price: 30,
      quantity: 2,
    });
    ReactGA.plugin.execute("ec", "setAction", "purchase", {
      id: 1,
      revenue: 60,
    });
    ReactGA.ga("send", "event", "UX", "click", "checkout success");
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">home</Link> | <Link to="/invoices">Demo page</Link> |{" "}
        <Link to="/expenses">About us</Link>
      </nav>
      <div>Some landing page content</div>
      <button onClick={handleButtonClick}>Send purchase event</button>
    </div>
  );
}

export default App;
