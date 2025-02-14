import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface DropdownProps {
  label: string;
  placeholder: string;
  className?: string;
}

const Dropdown = ({ label, placeholder, className = '' }: DropdownProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Depth 3: Label */}
      <span className="text-[#1a202c] font-['Plus_Jakarta_Sans'] font-bold text-base leading-6">
        {label}
      </span>
      
      {/* Depth 3: Dropdown Frame */}
      <div className="flex items-center gap-2">
        {/* Depth 4: Placeholder Text */}
        <span className="text-[#90a3bf] font-['Plus_Jakarta_Sans'] font-medium text-xs leading-[15px]">
          {placeholder}
        </span>
        {/* Depth 4: Arrow Icon */}
        <ChevronDown className="w-[14px] h-[14px] text-[#90a3bf]" />
      </div>
    </div>
  );
};

export const PickUp = () => {
  return (
    <div className="w-[582px] h-[132px] rounded-[10px] bg-white p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-4 h-4 rounded-full bg-[#3563e9] flex items-center justify-center p-1">
          <Image
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2809491e-9d51-41ad-9933-e4ab64a4b146"
            alt=""
            width={16}
            height={16}
            className="w-full h-full object-contain"
          />
        </div>
        {/* Depth 2: Title Text */}
        <span className="text-[#1a202c] font-['Plus_Jakarta_Sans'] font-semibold text-base leading-6">
          Pick - Up
        </span>
      </div>

      {/* Depth 1: Main Content Frame */}
      <div className="flex items-center gap-6">
        {/* Depth 2: Locations Dropdown */}
        <Dropdown
          label="Locations"
          placeholder="Select your city"
          className="w-[126px]"
        />

        {/* Depth 2: Vertical Line */}
        <div className="w-[1px] h-12 bg-[#c3d4e9]" />

        {/* Depth 2: Date Dropdown */}
        <Dropdown
          label="Date"
          placeholder="Select your date"
          className="w-[134px]"
        />

        {/* Depth 2: Vertical Line */}
        <div className="w-[1px] h-12 bg-[#c3d4e9]" />

        {/* Depth 2: Time Dropdown */}
        <Dropdown
          label="Time"
          placeholder="Select your time"
          className="w-[130px]"
        />
      </div>
    </div>
  );
};
