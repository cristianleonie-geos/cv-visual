import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ArrowDecorator from './ArrowDecorator';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configure default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function FitBounds({ careerMovements }) {
  const map = useMap();
  const bounds = L.latLngBounds(careerMovements.map(loc => loc.coords));
  useEffect(() => {
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [map, careerMovements]);
  return null;
}

export default function CareerMap({ careerMovements }) {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let i = 0;
    let interval;

    function startAnimation() {
      i = 0;
      setVisibleLines([]);
      interval = setInterval(() => {
        if (i >= careerMovements.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setVisibleLines([]);
            startAnimation();
          }, 2000);
          return;
        }
        const nextLine = [careerMovements[i].coords, careerMovements[i + 1].coords];
        setVisibleLines((lines) => [...lines, nextLine]);
        i++;
      }, 1000);
    }

    startAnimation();

    return () => clearInterval(interval);
  }, [careerMovements]);

  return (
    <div className="w-full h-96 rounded overflow-hidden border border-blue-200">
      <MapContainer zoom={4} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <FitBounds careerMovements={careerMovements} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {careerMovements.map((loc, idx) => (
          <Marker key={idx} position={loc.coords}>
            <Popup>{loc.city}</Popup>
          </Marker>
        ))}
        {visibleLines.map((line, idx) => (
          <React.Fragment key={`line-${idx}`}>
            <Polyline
              positions={line}
              pathOptions={{ color: 'blue', weight: 3, opacity: 0.8 }}
            />
            <ArrowDecorator from={line[0]} to={line[1]} />
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
}