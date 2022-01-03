import { useState } from "react";
import { SelectBirthDay } from "./SelectBirthDay";
import { SelectBirthMonth } from "./SelectBirthMonth";
import { SelectBirthYear } from "./SelectBirthYear";

export const SelectBirthDate = ({ onChange, ...field }) => {
  const [invalidMessage, setInvalidMessage] = useState();

  const handleChange = (value, invalidMessage) => {
    onChange(value);
    setInvalidMessage(invalidMessage);
  };
  return (
    <>
      <div className="sm:col-span-2 grid grid-cols-3 gap-4 mb-2">
        <div className="mt-1">
          <SelectBirthYear onChange={handleChange} {...field} />
        </div>
        <div className="mt-1">
          <SelectBirthMonth onChange={handleChange} {...field} />
        </div>
        <div className="mt-1">
          <SelectBirthDay onChange={handleChange} {...field} />
        </div>
      </div>
      <span className="mt-2 text-sm text-gray-500">{invalidMessage}</span>
    </>
  );
};

