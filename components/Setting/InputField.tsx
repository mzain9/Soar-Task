interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-text-primary font-normal">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-white rounded-2xl border-[1] border-background-muted p-3 text-secondary font-normal outline-primary"
      />
      {error && (
        <span className="absolute -bottom-5 left-2 text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
