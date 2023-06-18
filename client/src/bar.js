import React from 'react';

function CredentialBar() {
  return (
    <div className="bg-gray-100 py-4 px-8 flex items-center justify-between mt-20">
      <div className="flex-1">
        <p className="text-gray-600 font-semibold">Name:</p>
        <p className="text-lg text-gray-800">John Doe</p>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 font-semibold">Date of Issue:</p>
        <p className="text-lg text-gray-800">June 18, 2023</p>
      </div>
    </div>
  );
}

export default CredentialBar;
