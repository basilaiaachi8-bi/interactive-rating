import React, { useState } from "react";
import "./RatingComponent.css";

function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRating !== null) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card thank-you-card">
        <div className="thank-you-img">
          {}
          <svg width="108" height="108" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M78.447 80.203H29.553c-4.475 0-8.103-3.628-8.103-8.103V22.25c0-4.475 3.628-8.103 8.103-8.103h48.894c4.475 0 8.103 3.628 8.103 8.103V72.1c0 4.475-3.628 8.103-8.103 8.103z"
                fill="#232C3A"
              />
              <path
                d="M68.514 69.45H39.486c-2.457 0-4.45-1.992-4.45-4.45V14.147h37.928V65c0 2.458-1.993 4.45-4.45 4.45z"
                fill="#181E27"
              />
              <path
                d="M51.107 55.454h5.786a2.893 2.893 0 012.893 2.893v8.678H48.214v-8.678a2.893 2.893 0 012.893-2.893z"
                fill="#7C8798"
              />
              <path
                d="M35.036 14.147h37.928v11.571H35.036V14.147z"
                fill="#7C8798"
              />
              <circle fill="#FC7614" cx="89.143" cy="49.179" r="8.679" />
              <path
                d="M14.464 45.321h22.179a1.929 1.929 0 011.929 1.928v12.536a1.929 1.929 0 01-1.929 1.929H14.464a1.929 1.929 0 01-1.928-1.929V47.25a1.929 1.929 0 011.928-1.928z"
                transform="rotate(-28 25.554 52.554)"
                fill="#FC7614"
              />
            </g>
          </svg>
        </div>

        <div className="selection-badge">
          You selected {selectedRating} out of 5
        </div>

        <h1 className="title">Thank you!</h1>
        <p className="description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    );
  }

  return (
    <div className="card rating-card">
      <div className="star-icon">
        {}
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.958 3.966 4.378.636-3.168 3.087.748 4.36-3.916-2.06-3.916 2.06.748-4.36L.74 5.032l4.378-.636L7.076.43a1.124 1.124 0 0 1 1.991 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>

      <h1 className="title">How did we do?</h1>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-buttons">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="button"
            className={`rating-btn ${selectedRating === num ? "active" : ""}`}
            onClick={() => setSelectedRating(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={selectedRating === null}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default RatingComponent;
