import Header from "./components/header/Header";
import css from './styles/app.module.scss';
import Hero from './components/header/hero/Hero'
import Expertise from "./components/Expertises/Expertise";
import Work from "./components/Works/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Keyskill from "./components/Keyskill/Keyskill";
import Project from "./components/Project/Project";

const App = () => {
  return <div className= {`bg-primary ${css.conatiner}`}>
      <Header/>
      <Hero/>
      <Keyskill/>
      <Expertise/>
      <Work/>
      <Portfolio/>
      <Project/>
      <People/>
      <Slider/>
      <Footer/>
     
  </div>
};

export default App;
