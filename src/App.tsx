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
  useEffect(() => {
    if (path === "/") navigate("ChartAndMaps");
  }, [navigate, path]);
  return (
    <StaticLayout>
      <Routes>
        {/* contact route */}
        <Route path="/contact" element={<Contact />} />
        {/* creating contact route */}
        <Route path="/create" element={<CreateContact />} />
        {/* updating contact route */}
        <Route path="/contact/update/:id" element={<UpdateContact />} />
        {/* chart and map section */}
        <Route path="/ChartAndMaps" element={<ChartAndMaps />} />
      </Routes>
    </StaticLayout>
  );
}

export default App;
