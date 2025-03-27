import React, { useState } from "react";
import "./styles.css";

const ImageModal = ({ image, onClose }) => {
  const [annotations, setAnnotations] = useState([]);
  const [inputPosition, setInputPosition] = useState(null);
  const [comment, setComment] = useState("");

  if (!image) return null;

  // Handle image click → Show input box
  const handleImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setInputPosition({ x, y });
  };

  // Save annotation
  const handleSaveAnnotation = () => {
    if (comment.trim() !== "") {
      setAnnotations([...annotations, { ...inputPosition, text: comment }]);
      setComment("");
      setInputPosition(null);
    }
  };

  // Remove annotation on right-click
  const handleRightClick = (event, index) => {
    event.preventDefault();
    setAnnotations(annotations.filter((_, i) => i !== index));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>

        <div className="image-container">
          <img
            src={image.url}
            alt={image.name}
            className="modal-image"
            onClick={handleImageClick}
          />

           {/* Render existing annotations  */}
          {annotations.map((annotation, index) => (
            <div
              key={index}
              className="annotation"
              style={{ left: annotation.x, top: annotation.y }}
              onContextMenu={(e) => handleRightClick(e, index)}
            >
              {annotation.text}
            </div>
          ))}

          {/* Render input box when clicking on image */}
          {inputPosition && (
            <div
              className="annotation-input"
              style={{ left: inputPosition.x, top: inputPosition.y }}
            >
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="send-btn" onClick={handleSaveAnnotation}>➤</button>
              <button className="cancel-btn" onClick={() => setInputPosition(null)}>✕</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;