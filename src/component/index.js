import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import GalleryPage from "./GalleryPage";
import UploadPage from "./UploadPage";


const ImportImage = () => {
  const [images, setImages] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage setImages={setImages} />} />
        <Route path="/gallery" element={<GalleryPage images={images} />} />
      </Routes>
    </Router>
  );
};

export default ImportImage;