"use client";

import { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";
import FormFields from "./FormFields";
import { User } from "@/types";
import { useUser } from "@/context/UserContext";

const EditProfile: React.FC = () => {
  const { user, loading, setUser } = useUser();

  const [formData, setFormData] = useState<User>(
    user || {
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
    }
  );
  console.log(formData);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email format";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!formData.dob) {
      newErrors.dob = "Invalid date format";
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();
      if (
        age < 13 ||
        (age === 13 &&
          today < new Date(dobDate.setFullYear(today.getFullYear())))
      ) {
        newErrors.dob = "You must be at least 13 years old";
      }
    }
    if (!formData.presentAddress.trim())
      newErrors.presentAddress = "Present address is required";
    if (!formData.permanentAddress.trim())
      newErrors.permanentAddress = "Permanent address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.postalCode.match(/^\d{5}$/))
      newErrors.postalCode = "Invalid postal code";

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
        setFormData({
          ...formData,
          profilePic: event.target?.result as string,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setUser(formData); // Update context
    sessionStorage.setItem("user", JSON.stringify(formData)); // Persist update

    toast.success("Profile Updated Successfully");
    console.log("Form Data Submitted:", formData);
  };

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-300px)] flex-col items-center justify-center text-center">
        <ClipLoader color="var(--primary)" />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center md:justify-between items-center md:items-start md:flex-row gap-14 w-full pl-4"
    >
      <ProfileAvatar avatar={formData.profilePic} onChange={handleFileChange} />
      <div className="w-full">
        <FormFields
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="relative w-full md:w-fit cursor-pointer bg-background-dark text-white rounded-2xl px-20 py-3 hover:opacity-90 text-[18px] font-normal"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
