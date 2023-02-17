import { Route, Routes } from "react-router-dom";
import Admin from "layouts/Admin.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() { 
  return (
    <Routes>
      <Route path="/*" element={<Admin key={"admin"}  />} />
    </Routes>
    
  )
}