import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import Nabvar from "./components/Nabvar/Nabvar";

function App() {
  return (
   <div className="max-w-7xl mx-auto">
    <Nabvar></Nabvar>
    <Banner></Banner>
    <MainSection></MainSection>
    <Footer></Footer>
   </div>
  );
}

export default App;
