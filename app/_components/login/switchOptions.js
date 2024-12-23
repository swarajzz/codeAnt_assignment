import { options } from "@/public/data";

export const SwitchOptions = ({ selectedOption, onSelect }) => (
  <div className="flex w-full">
    {options.map(({ label, value }) => (
      <button
        key={value}
        onClick={() => onSelect(value)}
        className={`w-full px-4 py-3 rounded-lg font-medium text-xl ${
          selectedOption === value
            ? "bg-accent-200 text-white"
            : "hover:bg-gray-100 bg-primary-dark-white text-primary-100"
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);
