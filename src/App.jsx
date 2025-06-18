import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['React', 'Python', 'Django', 'SQL', 'Docker'],
  datasets: [
    {
      label: 'Skill Level',
      data: [90, 85, 80, 75, 70],
      backgroundColor: '#6366f1',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'My Skills' },
  },
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">My CV Dashboard</h1>
      <div className="w-full max-w-3xl">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
