import Image from 'next/image';
import { Heart, Bell, Settings, Search, SlidersHorizontal } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="w-[1440px] h-[124px] bg-white border-b border-[#c3d4e9] px-6 py-4 flex items-center justify-between">
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
        {/* Like Button */}
        <button className="w-[44px] h-[44px] rounded-full border border-[#c3d4e9] flex items-center justify-center">
          <Heart className="w-5 h-5 text-[#596780]" />
        </button>

        {/* Notification Button */}
        <div className="relative">
          <button className="w-[44px] h-[44px] rounded-full border border-[#c3d4e9] flex items-center justify-center">
            <Bell className="w-5 h-5 text-[#596780]" />
          </button>
          <div className="absolute top-0 right-0 w-[11px] h-[11px] bg-[#ff4423] rounded-full" />
        </div>

        {/* Settings Button */}
        <button className="w-[44px] h-[44px] rounded-full border border-[#c3d4e9] flex items-center justify-center">
          <Settings className="w-5 h-5 text-[#596780]" />
        </button>

        {/* Profile Image */}
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
    </nav>
  );
};
