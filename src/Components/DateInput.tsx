import React from "react";

export interface IDateInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} id={label} {...props} />
    </div>
  );
};

export default DateInput;
