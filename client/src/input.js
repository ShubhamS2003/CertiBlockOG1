import React, { useState } from 'react';
import CredentialBar from './bar';
import ValidTemplate from './valid';
import InvalidTemplate from './invalid';

function Input() {
  const [credentialNumber, setCredentialNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log('Submitted credential number:', credentialNumber);
    if (credentialNumber.trim() !== '' && credentialNumber.trim() !== '0') {
      console.log('valid');
      setIsValid(true);
    } else {
      console.log('invalid');
      setIsValid(false);
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setCredentialNumber('');
    setIsValid(false);
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg px-8 py-6" onSubmit={handleSubmit}>
        {/* Form fields here */}
        <div className="mb-6">
          <label htmlFor="credentialNumber" className="block text-gray-700 text-lg font-bold mb-2">
            Certificate Credential Number
          </label>
          <input
            type="text"
            id="credentialNumber"
            value={credentialNumber}
            onChange={(e) => setCredentialNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            placeholder="Enter Credential Number"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline text-xl font-bold text-black"
          >
            Submit
          </button>
          {submitted && (
            <button
              onClick={handleReset}
              className="bg-blue-600 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline text-xl font-bold text-black"
            >
              Reset
            </button>
          )}
        </div>
      </form>

      {submitted && isValid && (
        <div className="mt-8">
          <div>
            <ValidTemplate />
            <CredentialBar />
          </div>
        </div>
      )}
      {submitted && !isValid && (
        <div className="mt-8">
          <InvalidTemplate />
        </div>
      )}
    </div>
  );
}

export default Input;
