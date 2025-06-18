import React, { useRef, useEffect } from 'react';
import profilePic from './assets/profile.jpg';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const careerMovements = [
  { city: 'Rome', coords: [41.9028, 12.4964] },
  { city: 'Berlin', coords: [52.52, 13.405] },
  { city: 'London', coords: [51.5072, -0.1276] },
  { city: 'Stockholm', coords: [59.3293, 18.0686] },
];

function FitBounds() {
  const map = useMap();
  const bounds = L.latLngBounds(careerMovements.map(loc => loc.coords));
  useEffect(() => {
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [map]);
  return null;
}

function CareerMap() {
  const arrowHead = {
    color: 'blue',
    weight: 3,
    opacity: 0.8,
    smoothFactor: 1,
    lineCap: 'round',
    lineJoin: 'round',
  };

  return (
    <div className="w-full h-96 rounded overflow-hidden border border-blue-200">
      <MapContainer zoom={4} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <FitBounds />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {careerMovements.map((loc, idx) => (
          <Marker key={idx} position={loc.coords}>
            <Popup>{loc.city}</Popup>
          </Marker>
        ))}
        {careerMovements.slice(1).map((loc, idx) => (
          <Polyline
            key={idx}
            positions={[careerMovements[idx].coords, loc.coords]}
            pathOptions={arrowHead}
            dashArray="6,10"
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-start py-10 px-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-5xl">
        {/* Sidebar */}
        <aside className="bg-gray-200 w-full md:w-1/3 p-6 text-sm space-y-6">
          <div className="text-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto border border-white shadow"
            />
            <h1 className="text-lg font-bold mt-4">John Doe</h1>
            <p className="text-sm">Software Engineer</p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase text-gray-600 mb-1">Contact</h2>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 1234 Code Lane, Devville</p>
            <p>LinkedIn: linkedin.com/in/johndoe</p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase text-gray-600 mb-1">Key Skills</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Team Leadership</li>
              <li>UI/UX Design</li>
              <li>Performance Optimization</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase text-gray-600 mb-1">Technical Skills</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>React, Python, Node.js</li>
              <li>SQL, Git, Docker</li>
              <li>Linux, REST APIs</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-6">
          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2">Profile Summary</h2>
            <p>
              Passionate and detail-oriented developer with experience designing and building scalable software solutions.
              Proficient in modern web technologies and agile practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2">Education</h2>
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold">B.Sc. in Computer Science</h3>
                <p className="text-sm text-gray-600">University of Technology, 2013 – 2017</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2">Work Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Senior Developer at Example Corp</h3>
                <p className="text-sm text-gray-600">Jan 2020 – Present</p>
                <p>
                  Led a team of 5 developers building scalable React apps for enterprise clients. Focused on performance,
                  security, and usability.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Junior Developer at Another Inc</h3>
                <p className="text-sm text-gray-600">Jun 2017 – Dec 2019</p>
                <p>
                  Developed backend services in Python and contributed to frontend features in AngularJS. Collaborated in agile teams.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2">Languages</h2>
            <p>English (Native), French (B2), Japanese (A2)</p>
          </section>

          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2">Career Map</h2>
            <p className="text-sm text-gray-600 mb-2">Visualizing my journey across cities I've worked in.</p>
            <CareerMap />
          </section>

        </main>
      </div>
    </div>
  );
}