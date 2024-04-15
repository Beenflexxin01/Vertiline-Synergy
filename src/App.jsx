import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Csr from "./Pages/Csr";
import MediaPage from "./Pages/MediaPage";
import Services from "./Pages/Services";
import Investment from "./Components/Services/Investment";
import Solutions from "./Components/Services/Solutions";
import Consult from "./Components/Services/Consult";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="service/hospitality-investment" element={<Investment />} />
            <Route path="service/hospitality-solutions" element={<Solutions />} />
            <Route path="service/hospitality-consulting" element={<Consult />} />
            <Route path="csr" element={<Csr />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
