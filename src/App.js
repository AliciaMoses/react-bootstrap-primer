import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Buttons from "./components/pages/buttons/Buttons";
import Forms from "./components/pages/forms/Forms";
import Home from "./components/pages/home/Home";
import Intro from "./components/pages/getting-started/GettingStarted";
import Layouts from "./components/pages/layouts/Layouts";
import Navbars from "./components/pages/navbars/Navbars";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/buttons" element={<Buttons/>} />
          <Route exact path="/forms" element={<Forms/>} />
          <Route exact path="/getting-started" element={<Intro/>} />
          <Route exact path="/layouts" element={<Layouts/>} />
          <Route exact path="/navbars" element={<Navbars/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
