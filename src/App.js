import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Buttons from "./components/pages/buttons/Buttons";
import DynamicForms from "./components/pages/dynamic-forms/DynamicForms";
import Forms from "./components/pages/forms/Forms";
import Home from "./components/pages/home/Home";
import Intro from "./components/pages/getting-started/GettingStarted";
import Layouts from "./components/pages/layouts/Layouts";
import Navbars from "./components/pages/navbars/Navbars";
import Typography from "./components/pages/typography/Typography";
import Cards from "./components/pages/cards/Cards";
import CardGroups from "./components/pages/card-groups/CardGroups";
import DynamicCards from "./components/pages/dynamic-cards/DynamicCards";
import SocialMediaFeed from "./components/pages/examples/social-media/SocialMediaFeed";
import LandingPage from "./components/pages/examples/landing-page/LandingPage";
import Magazine from "./components/pages/examples/magazine/Magazine";
import BottomNavigation from "./components/base-components/BottomNavigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/buttons" element={<Buttons/>} />
          <Route exact path="/dynamic-forms" element={<DynamicForms/>} />
          <Route exact path="/forms" element={<Forms/>} />
          <Route exact path="/getting-started" element={<Intro/>} />
          <Route exact path="/layouts" element={<Layouts/>} />
          <Route exact path="/navbars" element={<Navbars/>} />
          <Route exact path="/typography" element={<Typography/>} />
          <Route exact path="/cards" element={<Cards/>} />
          <Route exact path="/card-groups" element={<CardGroups/>} />
          <Route exact path="/dynamic-cards" element={<DynamicCards/>} />
          <Route exact path="/examples/social-media-feed" element={<SocialMediaFeed/>} />
          <Route exact path="/examples/landing-page" element={<LandingPage/>} />
          <Route exact path="/examples/magazine" element={<Magazine/>} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
