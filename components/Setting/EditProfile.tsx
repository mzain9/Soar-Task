"use client";

import { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import { toast } from "sonner";
import DateOfBirthPicker from "./DatePicker";

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "Charlene Reed",
    email: "charlenereed@gmail.com",
    username: "Charlene Reed",
    password: "12345678",
    dob: "1990-01-25",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    country: "USA",
    postalCode: "45962",
    profilePic: "/icons/profile-icon.png",
  });

  console.log("Form Data:", formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, profilePic: e.target?.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile Updated Successfully");
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-8 w-full pl-4">
      <ProfileAvatar avatar={formData.profilePic} onChange={handleFileChange} />
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 w-full mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">User Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
          <DateOfBirthPicker
            selectedDate={new Date(formData.dob)}
            setSelectedDate={handleChange}
          />
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">Present Address</label>
            <input
              type="text"
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-normal">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="right-0 relative cursor-pointer bg-black text-white rounded-2xl px-20 py-3 hover:bg-gray-800 text-[18px] font-normal"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
