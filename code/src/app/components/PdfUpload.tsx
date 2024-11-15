'use client';

import React, { useState } from 'react';

const PdfUpload: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.error('No file selected.');
      return;
    }

    setIsLoading(true);

    try {
      // Read the file as an ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      // Send the file as binary data
      const response = await fetch('/api/uploadPdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/pdf',
        },
        body: arrayBuffer,
      });

      const contentType = response.headers.get('Content-Type');

      let result;
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error('Unexpected response format:', text);
        throw new Error('Server returned an unexpected response.');
      }

      if (!response.ok) {
        throw new Error(result.message || 'An error occurred during the upload.');
      }

      alert(result.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error uploading PDF content:', error.message);
        alert('Failed to upload PDF content.');
      } else {
        console.error('Unknown error:', error);
        alert('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Upload PDF and Save Content to Supabase
      </h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {isLoading ? <p>Loading...</p> : <p className="mt-4">Upload a PDF to get started.</p>}
    </div>
  );
};

export default PdfUpload;
