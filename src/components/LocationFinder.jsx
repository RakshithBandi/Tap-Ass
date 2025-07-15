import React, { useState } from "react";

const LocationFinder = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setError("");
      },
      () => setError("Permission denied or error.")
    );
  };

  return (
    <div className="card">
      <h2> Find Nearby Study Places</h2>
      <button onClick={fetchLocation}>Get Location</button>
      {location && (
        <>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
          <a
            href={`https://www.google.com/maps/search/libraries+or+coaching+centers+near+${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Search on Google Maps
          </a>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LocationFinder;
