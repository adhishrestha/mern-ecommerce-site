import React from 'react';
const variants = {
  underline:
    'border-b border-[#3A3845] py-3.5 px-1 bg-transparent focus:border-black resize-none',
  outlined:
    'border border-[#3A3845] py-3.5 px-4 bg-white focus:border-black focus:ring-1 focus:ring-black resize-none',
};
const TextArea = ({
  name,
  id,
  label,
  labelHidden = false,
  placeholder,
  value,
  onChange,
  rows = '5',
  variant = 'outlined',
  className = '',
  ...props
}) => {
  const textareaId = id || name;
  return (
    <div className="flex w-full flex-col text-left">
      {label && (
        <label
          htmlFor={textareaId}
          className={
            labelHidden
              ? 'sr-only'
              : 'mb-3 text-sm font-semibold tracking-wider text-[#3A3845]'
          }
        >
          {label}
        </label>
      )}

      <textarea
        name={name}
        id={textareaId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full text-base leading-6 font-normal placeholder-gray-400 transition-colors duration-200 outline-none ${variants[variant]} ${className}`}
        {...props}
      />
    </div>
  );
};

export default TextArea;
