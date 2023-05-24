import "./App.css";
import StaticLayout from "./components/StaticLayout";
import Contact from "./components/Contact";
import ChartAndMaps from "./ChartAndMaps/ChartAndMaps";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CreateContact from "./ContactComponents/CreateContact";
import UpdateContact from "./ContactComponents/UpdateContact";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  // useEffect(() => {
  //   if (path === "/contact_management")
  //     navigate("/contact_management/ChartAndMaps");
  // }, [navigate, path]);
  return (
    <StaticLayout>
      <Routes>
        {/* contact route */}
        <Route path="/contact_management/contact" element={<Contact />} />
        {/* creating contact route */}
        <Route path="/contact_management/create" element={<CreateContact />} />
        {/* updating contact route */}
        <Route
          path="/contact_management/update/:id"
          element={<UpdateContact />}
        />
        {/* chart and map section */}
        <Route
          path="/contact_management/ChartAndMaps"
          element={<ChartAndMaps />}
        />
      </Routes>
    </StaticLayout>
  );
}

export default App;
