import React from 'react';

const RegistrationButton = () => {
  return (
    <div className="text-center mt-8">
      <a
        href="https://forms.gle/TuvXLeJSTZP3J7fk8"
        target="_blank"
        rel="noopener noreferrer"
        className=" inline-block text-lg px-4 py-3 leading-none border-4 rounded-lg text-white font-bold  border-white hover:border-transparent
         hover:text-teal-500 hover:bg-white w-full mb-8"
      >
        Зарегистриоваться!
      </a>
    </div>
  );
};

export default RegistrationButton;