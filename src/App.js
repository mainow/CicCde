import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import OnlineEducation from "./pages/OnlineEducation";
import Us from "./pages/Us";
import News from "./pages/News";
import NewsAdmin from "./pages/NewsAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout active="/"><Home /></Layout>} /> 
        <Route path="/educacion-online" element={<Layout active="/educacion-online"><OnlineEducation /></Layout>} /> 
        <Route path="/nosotros" element={<Layout active="/nosotros"><Us /></Layout>} /> 
        <Route path="/noticias/admin" element={<Layout active="/"><NewsAdmin /></Layout>} /> 
        <Route path="/noticias" element={<Layout active="/noticias"><News /></Layout>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
