export const ShowMore = () => {
  return (
    // Depth 0: FRAME (Show More)
    <div className="flex items-center justify-between w-[734px] h-[44px]">
      {/* Depth 1: FRAME (Show More) */}
      <button className="flex items-center justify-center w-[156px] h-[44px] px-5 bg-[#3563e9] rounded-[4px] gap-2">
        {/* Depth 2: TEXT (Show more car) */}
        <span className="text-white font-['Plus_Jakarta_Sans'] font-semibold text-[16px] leading-[24px]">
          Show more car
        </span>
      </button>

      {/* Depth 1: TEXT (120 Car) */}
      <span className="text-[#90a3bf] font-['Plus_Jakarta_Sans'] font-medium text-[14px] leading-[21px]">
        120 Car
      </span>
    </div>
  );
};
