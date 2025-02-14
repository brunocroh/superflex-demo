import Image from 'next/image';

export const Ad = () => {
  return (
    <div className="relative w-[640px] h-[360px] rounded-[10px] bg-[#54a6ff] overflow-hidden">
      {/* BG Group with Ellipses */}
      <div className="absolute w-[775px] h-[775px]">
        <div className="absolute w-[50px] h-[50px] rounded-full border border-white opacity-20" />
        <div className="absolute w-[150px] h-[150px] rounded-full border border-white opacity-20" />
        <div className="absolute w-[275px] h-[275px] rounded-full border border-white opacity-20" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white opacity-20" />
        <div className="absolute w-[525px] h-[525px] rounded-full border border-white opacity-20" />
        <div className="absolute w-[650px] h-[650px] rounded-full border border-white opacity-20" />
        <div className="absolute w-[775px] h-[775px] rounded-full border border-white opacity-20" />
        
        {/* Car Image */}
        <div className="absolute right-0 bottom-0">
          <Image
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7e3a4fd-c3d6-4df2-9c9f-14290e754650"
            alt="Luxury sports car"
            width={406}
            height={116}
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-5 p-6 w-[284px] h-[224px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] font-semibold text-white font-['Plus_Jakarta_Sans'] leading-[48px]">
            The Best Platform for Car Rental
          </h2>
          <p className="text-[16px] font-medium text-white font-['Plus_Jakarta_Sans'] leading-[24px]">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
        </div>
        
        <button className="flex items-center justify-center w-[120px] h-[44px] bg-[#3563e9] rounded-[4px] px-5">
          <span className="text-[16px] font-semibold text-white font-['Plus_Jakarta_Sans'] leading-[24px]">
            Rental Car
          </span>
        </button>
      </div>
    </div>
  );
};
