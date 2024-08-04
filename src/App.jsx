import NavBar from "./components/NavBar";
import Home from './components/Home';
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import { Contact } from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Company from "./components/Company";
function App() {
  return (
    <div>
      <CustomCursor></CustomCursor>
      <NavBar></NavBar>
      <Home></Home>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Company/>
      <Experience/>
      
      <Contact/>
    </div>
  );
}

export default App;
