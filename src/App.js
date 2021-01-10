import './App.css';
import NavBar from "./NavBar/NavBar";
import "./NavBar/NavBar.css";
import Map from "./Map/Map";
import "./Map/Map.css";
import WeatherArea from "./WeatherArea/WeatherArea";
import "./WeatherArea/WeatherArea.css";
import WeatherCard from "./WeatherCards/WeatherCard"
import "./WeatherCards/WeatherCard.css";

function App() {
  return (
    <div id="main">

        <NavBar/>

        <WeatherArea/>

        <Map/>

    </div>
  );
}

export default App;
