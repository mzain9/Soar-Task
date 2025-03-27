import React from "react";
import InputField from "./InputField";
import DateOfBirthPicker from "./DatePicker";
import { FormData } from "./EditProfile";

const FormFields = ({
  formData,
  handleChange,
  errors,
}: {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}) => {
  const fields = [
    { label: "Your Name", name: "name", type: "text" },
    { label: "User Name", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Date of Birth", name: "dob", type: "text" },
    { label: "Present Address", name: "presentAddress", type: "text" },
    {
      label: "Permanent Address",
      name: "permanentAddress",
      type: "text",
    },
    { label: "City", name: "city", type: "text" },
    { label: "Postal Code", name: "postalCode", type: "text" },
    { label: "Country", name: "country", type: "text" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
      {fields.map(({ label, name, type }) => {
        if (name === "dob") {
          return (
            <DateOfBirthPicker
              key={name}
              label={label}
              name={name}
              type={type}
              value={formData[name as keyof FormData]}
              onChange={handleChange}
              error={errors[name]}
            />
          );
        }
        return (
          <InputField
            key={name}
            label={label}
            name={name}
            type={type}
            value={formData[name as keyof FormData]}
            onChange={handleChange}
            error={errors[name]}
          />
        );
      })}
    </div>
  );
};

export default FormFields;
