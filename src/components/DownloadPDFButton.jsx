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
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      title="Download this CV as PDF"
      type="button"
    >
      📥 Download as PDF
    </button>
  );
}
