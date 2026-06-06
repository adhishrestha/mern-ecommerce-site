import React from 'react';

const variants = {
  underline:
    'w-[389px] h-10 gap-[10px] opacity-100 py-[14px] border-b border-[#3A3845]',
  outlined:
    'w-[401px] h-[52px] gap-[10px] opacity-100 py-[21px] px-4 border border-[#3A3845]',
};

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  variant = 'outlined',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full text-base leading-6 font-normal tracking-normal outline-none ${variants[variant]} ${className} `}
      {...props}
    />
  );
};

export default Input;
