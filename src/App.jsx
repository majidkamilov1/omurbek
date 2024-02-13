import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Discipline from "./pages/Discipline";
import ScientificWorks from "./pages/ScientificWorks";
import ElectronicResources from "./pages/ElectronicResources";
import Сontacts from "./pages/Сontacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="discipline" element={<Discipline />} />
            <Route path="Scientific-works" element={<ScientificWorks />} />
            <Route path="Electronic-resources" element={<ElectronicResources />} />
            <Route path="Сontacts" element={<Сontacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
