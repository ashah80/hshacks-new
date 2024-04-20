import FindOpps from "./FindOpps";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadOpps from "./UploadOpps";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <>
        <NavBar></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path="/FindOpps" element={<FindOpps />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/UploadOpps" element={<UploadOpps />} />
            <Route path="/AboutUS" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
