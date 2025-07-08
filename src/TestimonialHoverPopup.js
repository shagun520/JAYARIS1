import React, { useState, useEffect } from "react";
import sampleImage from "./image/sample-site.jpeg"; // make sure this exists
import "./App.css"; // if styles are in App.css
import { useMemo } from "react";
export default function TestimonialHoverPopup() {
  

const testimonials = useMemo(() => [
  {
    name: "Client 1",
    text: "Jayaris revolutionized our workflow...",
  },
  {
    name: "Client 2",
    text: "We launched 3x faster...",
  },
  {
    name: "Client 3",
    text: "They captured our brand perfectly.",
  }
], []);


  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (hoveredIndex === null) {
      setTypedText("");
      return;
    }

    let i = 0;
    const fullText = testimonials[hoveredIndex].text;
    setTypedText("");

    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
}, [hoveredIndex, testimonials]);


  return (
    <div className="testimonial-container">
      {testimonials.map((client, idx) => (
        <div
          className="client-box"
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {client.name}
        </div>
      ))}

      {hoveredIndex !== null && (
        <div className="testimonial-popup-centered">
          <div className="testimonial-popup-content">
            <div className="popup-text">
              <h3>{testimonials[hoveredIndex].name}</h3>
              <p>{typedText}</p>
            </div>
            <div className="popup-image">
              <img src={sampleImage} alt="Sample Work" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
