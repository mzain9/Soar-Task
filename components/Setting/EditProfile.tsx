"use client";

import { useEffect, useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import { toast } from "sonner";
import DateOfBirthPicker from "./DatePicker";

interface FormData {
  name: string;
  email: string;
  username: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  country: string;
  postalCode: string;
  profilePic: string;
}

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    username: "",
    password: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    country: "",
    postalCode: "",
    profilePic: "",
  });
  console.log(formData);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setFormData({
          name: "Charlene Reed",
          email: "charlenereed@gmail.com",
          username: "CharleneReed",
          password: "12345678",
          dob: "1990-01-25",
          presentAddress: "San Jose, California, USA",
          permanentAddress: "San Jose, California, USA",
          city: "San Jose",
          country: "USA",
          postalCode: "45962",
          profilePic: "/icons/profile-icon.png",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();
      if (age < 13 || (age === 13 && today < new Date(dobDate.setFullYear(today.getFullYear())))) {
        newErrors.dob = "You must be at least 13 years old";
      }
    }
    if (!formData.presentAddress.trim()) newErrors.presentAddress = "Present address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.postalCode.match(/^\d{5}$/)) newErrors.postalCode = "Invalid postal code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, profilePic: event.target?.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    toast.success("Profile Updated Successfully");
    console.log("Form Data Submitted:", formData);
  };

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-8 w-full pl-4">
      <ProfileAvatar avatar={formData.profilePic} onChange={handleFileChange} />
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 w-full mb-8">
          {[{ label: "Your Name", name: "name", type: "text" },
          { label: "User Name", name: "username", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Date of Birth", name: "dob", type: "text" },
          { label: "Present Address", name: "presentAddress", type: "text" },
          { label: "Permanent Address", name: "permanentAddress", type: "text" },
          { label: "City", name: "city", type: "text" },
          { label: "Postal Code", name: "postalCode", type: "text" },
          { label: "Country", name: "country", type: "text" }
          ].map(({ label, name, type }) => {
            if (name === "dob") {
              return <DateOfBirthPicker key={name} label={label} name={name} type={type} value={formData[name]} onChange={handleChange} error={errors[name]} />
            }
            return <InputField key={name} label={label} name={name} type={type} value={formData[name]} onChange={handleChange} error={errors[name]} />
          })}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="relative cursor-pointer bg-black text-white rounded-2xl px-20 py-3 hover:bg-gray-800 text-[18px] font-normal">Save</button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;


interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black font-normal">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}