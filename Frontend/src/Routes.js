import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DummyComponent from "./dummyComponent";
import ButtonPage from "./link";
import App from "./App";
import ImageUploader from "./upload";
import PatientReport from "./report";
import GeneratePasskey from "./generatepasskeu";

const IndexComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/speech" element={<DummyComponent />} />
        <Route path="/" element={<App />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/upload" element={<ImageUploader />} />
        <Route path="/report" element={<PatientReport />} />
        <Route path="/passkey" element={<GeneratePasskey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexComponent;
