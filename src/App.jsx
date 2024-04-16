import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Csr from "./Pages/Csr";
import Investment from "./Components/Services/Investment";
import Solutions from "./Components/Services/Solutions";
import Consult from "./Components/Services/Consult";
import Gallery from "./Components/Media/Gallery";
import Blogs from "./Components/Media/Blogs";
import News from "./Components/Media/News";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="media/gallery" element={<Gallery />} />
            <Route path="media/news" element={<News />} />
            <Route path="media/blogs" element={<Blogs />} />
            <Route
              path="service/hospitality-investment"
              element={<Investment />}
            />
            <Route
              path="service/hospitality-solutions"
              element={<Solutions />}
            />
            <Route
              path="service/hospitality-consulting"
              element={<Consult />}
            />
            <Route path="csr" element={<Csr />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
