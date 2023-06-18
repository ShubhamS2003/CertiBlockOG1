import React from 'react';

function ValidTemplate() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-green-100 border border-green-500 text-green-900 px-4 py-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-semibold">Valid</span>
      </div>
    </div>
  );
}

export default ValidTemplate;
