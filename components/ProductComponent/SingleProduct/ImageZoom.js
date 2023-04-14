import { useState } from "react";
import styles from "../css/ImageZoom.module.css";

export default function ImageZoom({ src, alt }) {
  const [zoom, setZoom] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });

  function handleMouseEnter(e) {
    setZoom(true);
    handleMouseMove(e);
  }

  function handleMouseMove(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setCoords({ left: x, top: y });
  }

  function handleMouseLeave() {
    setZoom(false);
  }

  return (
    <div className={styles.imageZoomContainer}>
      <div
        className={styles.imageContainer}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={src} alt={alt} />
      </div>
      {zoom && (
        <div
          className={styles.zoomContainer}
          style={{ left: `${coords.left}%`, top: `${coords.top}%` }}
        >
          <img src={src} alt={alt} />
        </div>
      )}
    </div>
  );
}
