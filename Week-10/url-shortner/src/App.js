import { Header,MainSection,Footer } from "./Home/Home";
import { Feature } from "./Features/Feature";
import { Pricing } from "./Pricing/Pricing";
import { Resource } from "./Resource/Resource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/merriweather";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSection />}>
          <Route index element={<MainSection />} />
          <Route path="features" element={<Feature />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resource" element={<Resource />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
      {/* <MainSection></MainSection> */}
      {/* <Feature></Feature> */}
      {/* <Pricing></Pricing> */}
      {/* <Resource></Resource> */}
    </div>
  );
}

export default App;
