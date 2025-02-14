import { ArrowUpDown } from 'lucide-react';

export const Switch = () => {
  return (
    // Depth 0: GROUP (Switch)
    <div className="relative w-[60px] h-[60px]">
      {/* Depth 1: RECTANGLE (Shadow) */}
      <div 
        className="absolute top-[18px] w-[60px] h-[42px] rounded-[10px] bg-[#103293] blur-[12px]"
        aria-hidden="true"
      />
      
      {/* Depth 1: RECTANGLE (Bg Button) */}
      <button 
        className="relative w-[60px] h-[60px] rounded-[10px] bg-[#3563e9] flex items-center justify-center"
        aria-label="Switch view"
      >
        {/* Depth 1: INSTANCE (Iconly/Light/Swap) */}
        <div className="w-6 h-6 flex items-center justify-center">
          {/* Depth 2: GROUP (Swap) */}
          <ArrowUpDown className="w-[18px] h-[16px] text-white" />
        </div>
      </button>
    </div>
  );
};
