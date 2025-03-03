import React from "react";
import Image from 'next/image';

const HoverZoomImage = ({ src, alt }) => {
  return (
    <div className="tile-container">
      <div className="white-tile">
        <div className="green-tile">
          <Image src={src} alt={alt} className="hover-zoom-image" />
        </div>
      </div>
    </div>
  );
};

export default HoverZoomImage;
