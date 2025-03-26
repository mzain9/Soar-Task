"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, parse } from "date-fns";
import Image from "next/image";

const DateOfBirthPicker = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  console.log(selectedDate);
  const [inputValue, setInputValue] = useState(
    format(selectedDate, "dd MMMM yyyy")
  );
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const parsedDate = parse(e.target.value, "dd MMMM yyyy", new Date());
    if (!isNaN(parsedDate.getTime())) {
      e.target.value = format(parsedDate, "yyyy-MM-dd");
      setSelectedDate(e);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-black font-normal">Date of Birth</label>
      <div className="relative" ref={pickerRef}>
        <input
          type="text"
          name="dob"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="DD MMMM YYYY"
          className="bg-white rounded-2xl border-[1] border-border p-3 text-secondary font-normal outline-primary w-full pr-10"
        />
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="w-[20px] h-[20px] flex items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="Calendar"
            width={12}
            height={6}
            className={`transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        {open && (
          <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 p-2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                if (date) {
                  const e = {
                    target: { name: "dob", value: format(date, "yyyy-MM-dd") },
                  } as React.ChangeEvent<HTMLInputElement>;
                  setSelectedDate(e);
                  setInputValue(format(date, "dd MMMM yyyy"));
                  setOpen(false);
                }
              }}
              defaultMonth={selectedDate || new Date()}
              fromYear={1900}
              toYear={new Date().getFullYear()}
              captionLayout="dropdown"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateOfBirthPicker;
