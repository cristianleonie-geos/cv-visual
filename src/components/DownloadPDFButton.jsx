import React from 'react';
import html2pdf from 'html2pdf.js';

export default function DownloadPDFButton({ targetRef, filename = 'CV.pdf' }) {
  const handleDownload = () => {
    if (!targetRef.current) return;
    const opt = {
      margin: 0.2,
      filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(targetRef.current).save();
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
      title="Download this CV as PDF"
      type="button"
    >
      <span className="text-xl">📄</span>
      <span>Download CV</span>
    </button>
  );
}