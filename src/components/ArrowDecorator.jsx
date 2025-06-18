import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

export default function ArrowDecorator({ from, to }) {
  const map = useMap();

  useEffect(() => {
    const angle = Math.atan2(to[0] - from[0], to[1] - from[1]);
    const latOffset = 0.5 * Math.cos(angle);
    const lngOffset = 0.5 * Math.sin(angle);

    const arrow = L.polyline([to, [to[0] - latOffset, to[1] - lngOffset]], {
      color: 'blue',
      weight: 2,
      opacity: 1,
    });

    arrow.addTo(map);
    return () => map.removeLayer(arrow);
  }, [map, from, to]);

  return null;
}