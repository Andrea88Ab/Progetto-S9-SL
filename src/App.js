import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/Navbar";
import MyHome from "./Components/home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHome />
      <Footer/>
    </div>
  );
}

export default App;
