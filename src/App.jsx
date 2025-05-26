import Hero from "./pages/Hero";
import Synopsis from "./pages/Synopsis";
import Promotion from "./pages/Promotion";
import PromotionTop from "./pages/PromotionTop";
import Scroll from "./Components/Scroll";
// import Cast from "./pages/Cast";
// import LogoPage from "./pages/LogoPage";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App__Container">
      <Scroll />
      <ParallaxProvider>
        <Hero />
        <PromotionTop />
        <Synopsis />
        <Promotion />
        {/* <Cast /> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
