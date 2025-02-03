import React from "react";

const HoverZoomImage = ({ src, alt }) => {
  return (
    <div className="tile-container">
      <div className="white-tile">
        <div className="green-tile">
          <img src={src} alt={alt} className="hover-zoom-image" />
        </div>
      </div>
    </div>
  );
};

export default HoverZoomImage;
