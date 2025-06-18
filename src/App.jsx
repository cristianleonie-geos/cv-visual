import React from 'react';
import profilePic from './assets/profile.jpg';

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
        </main>
      </div>
    </div>
  );
}
