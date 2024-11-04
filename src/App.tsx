import Dashboard from "./pages/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Register from "./pages/Register";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GermanyBlog from "./components/Main/Blog/GermanyBlog";
import GermanBlok from "./components/Main/Blog/GermanBlok";
import News from "./pages/News";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/dashboard" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="german" element={<GermanBlok />} />
          <Route path="germany" element={<GermanyBlog />} />
        </Route>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/dashboard" && <Footer />}
    </div>
  );
}

export default App;
