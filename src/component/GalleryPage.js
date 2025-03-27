import React, { useState } from "react";
import "./styles.css";
import ImageModal from "./ImageModal";

const GalleryPage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Folder</h2>

      {images.length === 0 ? (
        <p>No images uploaded. Please go back and upload some images.</p>
      ) : (
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-card" onClick={() => setSelectedImage(image)}>
              <img src={image.url} alt={image.name} />
              <div className="image-name">{image.name}</div>
            </div>
          ))}
        </div>
      )}

      {/* Image Modal */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default GalleryPage;