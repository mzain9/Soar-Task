"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, parse, isValid } from "date-fns";
import Image from "next/image";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const DateOfBirthPicker: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
}) => {
  // Ensure `selectedDate` is valid or null
  const selectedDate = value ? parse(value, "yyyy-MM-dd", new Date()) : null;
  const [inputValue, setInputValue] = useState(
    selectedDate && isValid(selectedDate)
      ? format(selectedDate, "dd MMMM yyyy")
      : ""
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

    if (isValid(parsedDate)) {
      e.target.value = format(parsedDate, "yyyy-MM-dd");
    } else {
      e.target.value = ""; // Ensure empty input remains empty
    }
    onChange(e);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-text-primary font-normal">{label}</label>
      <div className="relative" ref={pickerRef}>
        <input
          type={type}
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="DD MMMM YYYY"
          className="bg-white rounded-2xl border-[1] border-background-muted p-3 text-secondary font-normal outline-primary w-full pr-10"
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
        {error && (
          <span className="absolute -bottom-5 left-2 text-red-500 text-sm">
            {error}
          </span>
        )}
        {open && (
          <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 p-2">
            <DayPicker
              mode="single"
              selected={
                selectedDate && isValid(selectedDate) ? selectedDate : undefined
              }
              onSelect={(date) => {
                if (date) {
                  const formattedDate = format(date, "yyyy-MM-dd");
                  const e = {
                    target: { name, value: formattedDate },
                  } as React.ChangeEvent<HTMLInputElement>;
                  onChange(e);
                  setInputValue(format(date, "dd MMMM yyyy"));
                } else {
                  setInputValue("");
                  onChange({
                    target: { name, value: "" },
                  } as React.ChangeEvent<HTMLInputElement>);
                }
                setOpen(false);
              }}
              defaultMonth={
                selectedDate && isValid(selectedDate)
                  ? selectedDate
                  : new Date()
              }
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
