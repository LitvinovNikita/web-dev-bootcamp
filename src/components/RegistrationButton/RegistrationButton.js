import React from 'react';

const RegistrationButton = () => {
  return (
    <div className="text-center mt-4">
      <a
        href="https://docs.google.com/forms/your-google-form-id/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
      >
        Зарегистриоваться!
      </a>
    </div>
  );
};

export default RegistrationButton;
