import Image from 'next/image';
import { Heart, Bell, Settings, Search, SlidersHorizontal } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-[#c3d4e9]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full max-w-[1440px] h-[124px] px-6 py-4 items-center justify-between">
        {/* Logo */}
        <h1 className="text-[32px] font-bold text-[#3563e9] font-['Plus_Jakarta_Sans'] leading-[48px]">
          MORENT
        </h1>

        {/* Search Bar */}
        <div className="relative w-[492px] h-[44px]">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search className="w-5 h-5 text-[#596780]" />
          </div>
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full px-12 rounded-[70px] border border-[#c3d4e9] text-[14px] font-['Plus_Jakarta_Sans'] font-medium text-[#596780] leading-[21px]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <SlidersHorizontal className="w-5 h-5 text-[#596780]" />
          </div>
        </div>

        {/* Profile & Notifications */}
        <div className="flex items-center gap-5">
          <button className="w-[44px] h-[44px] rounded-full border border-[#c3d4e9] flex items-center justify-center">
            <Heart className="w-5 h-5 text-[#596780]" />
          </button>
          <div className="relative">
            <button className="w-[44px] h-[44px] rounded-full border border-[#c3d4e9] flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#596780]" />
            </button>
            <div className="absolute top-0 right-0 w-[11px] h-[11px] bg-[#ff4423] rounded-full" />
          </div>
          <button className="w-[44px] h-[44px] rounded-full border border-[#c3d4e9] flex items-center justify-center">
            <Settings className="w-5 h-5 text-[#596780]" />
          </button>
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
            <Image
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f58e45d-32f4-47cb-b5e0-6455dc3af43e"
              alt="Profile"
              width={44}
              height={44}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col w-full h-[288px] px-6 py-8">
        {/* Top Section with Logo and Profile */}
        <div className="flex justify-between items-center w-full mb-8">
          <h1 className="text-[24px] font-bold text-[#3563e9] font-['Plus_Jakarta_Sans'] leading-[29px]">
            MORENT
          </h1>
          <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
            <Image
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6598585e-0323-4052-a281-27adc21e9e86"
              alt="Profile"
              width={28}
              height={28}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Search Section */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <div className="w-full h-[48px] rounded-[10px] border border-[#c3d4e9] flex items-center px-4">
              <Search className="w-6 h-6 text-[#596780] mr-2" />
              <input
                type="text"
                placeholder="Search something here"
                className="w-full h-full text-[14px] font-['Plus_Jakarta_Sans'] font-medium text-[#596780] leading-[21px] focus:outline-none"
              />
            </div>
          </div>
          <button className="w-[48px] h-[48px] rounded-[10px] border border-[#c3d4e9] flex items-center justify-center">
            <SlidersHorizontal className="w-6 h-6 text-[#596780]" />
          </button>
        </div>
      </div>
    </nav>
  );
};
