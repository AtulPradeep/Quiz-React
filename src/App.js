import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./components/CSS/Default.css";

function App() {
  return (
    <div className="App1">
      {/* <video autoPlay muted loop id="myVideo">
        <source src={black} type="video/mp4"></source>
      </video> */}

      <Home />
    </div>
  );
}

export default App;
