import React from "react";

interface ButtonProps {
  disabled: boolean;
  onClick: () => void;
  name: string;
}

const Button = ({ disabled, onClick, name }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="mb-5 p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
    >
      {name}
    </button>
  );
};

export default Button;
