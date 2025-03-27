import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "./styles.css";
// import "..assets/"

const bin_image = require('../assets/bin_pic.png');

const UploadPage = ({ setImages }) => {
    const navigate = useNavigate();
  
    const handleFileUpload = (event) => {
      const files = Array.from(event.target.files);
      const fileURLs = files.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));
  
      setImages(fileURLs);
      navigate("/gallery");
    };
  
    return (
      <div className="upload-container">
        <div className="upload-box">
          <img src={bin_image} className="upload-box-img" />
          <p>Drop images here</p>
          <p className="text-muted">or use Upload button to upload images</p>
          <input type="file" multiple accept="image/*,application/json" className="upload-input" id="fileUpload" onChange={handleFileUpload} />
          <label htmlFor="fileUpload" className="upload-label">Upload</label>
        </div>
      </div>
    );
};

export default UploadPage;