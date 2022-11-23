import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import OtherCharaters from "./Components/OtherCharaters";
import Saske from "./Components/Saske";
import Story from "./Components/Story";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Story />
      <Saske />
      <OtherCharaters />
    </div>
  );
}

export default App;
