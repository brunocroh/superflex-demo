import Image from 'next/image';

export const Ad2 = () => {
  return (
    // Depth 0: FRAME (Ads 2)
    <div className="relative w-[640px] h-[360px] rounded-[10px] bg-[#3563e9] overflow-hidden">
      {/* Depth 1: GROUP (BG) */}
      <div className="absolute w-[758px] h-[360px]">
        {/* Depth 2: Multiple VECTOR rectangles */}
        <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-10">
          {Array(24).fill(0).map((_, i) => (
            <div 
              key={i}
              className="w-[75px] h-[120px] bg-white transform -skew-x-[20deg]"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Depth 2: RECTANGLE (image 8) */}
        <div className="absolute right-0 bottom-0">
          <Image
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c38cd625-082f-478b-92ba-9db7db0a3713"
            alt="Luxury car"
            width={340}
            height={108}
            className="object-contain"
          />
        </div>
      </div>

      {/* Depth 1: FRAME (Ads) */}
      <div className="relative flex flex-col gap-5 p-6 w-[284px] h-[224px]">
        {/* Depth 2: FRAME (Title) */}
        <div className="flex flex-col gap-4">
          {/* Depth 3: TEXT (Title) */}
          <h2 className="text-[32px] font-semibold text-white font-['Plus_Jakarta_Sans'] leading-[48px] w-[272px]">
            Easy way to rent a car at a low price
          </h2>
          {/* Depth 3: TEXT (Description) */}
          <p className="text-[16px] font-medium text-white font-['Plus_Jakarta_Sans'] leading-[24px] w-[284px]">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
        </div>
        
        {/* Depth 2: FRAME (Button Rent) */}
        <button className="flex items-center justify-center w-[120px] h-[44px] bg-[#54a6ff] rounded-[4px] px-5">
          {/* Depth 3: TEXT (Rental Car) */}
          <span className="text-[16px] font-semibold text-white font-['Plus_Jakarta_Sans'] leading-[24px]">
            Rental Car
          </span>
        </button>
      </div>
    </div>
  );
};
