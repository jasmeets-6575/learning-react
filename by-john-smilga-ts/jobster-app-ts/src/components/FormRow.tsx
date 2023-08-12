import React, { ChangeEvent } from "react";

interface FormRowProps {
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
}

const FormRow: React.FC<FormRowProps> = ({
  type,
  name,
  value,
  handleChange,
  labelText,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
