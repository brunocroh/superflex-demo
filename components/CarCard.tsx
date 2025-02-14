import Image from 'next/image';
import { Heart, GlassesIcon, Users } from 'lucide-react';
import { CarIcon } from './icons/CarIcon';

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  price: number;
  originalPrice?: number;
  gasoline: string;
  transmission: string;
  capacity: string;
  isLiked?: boolean;
}

export const CarCard = ({
  name,
  type,
  image,
  price,
  originalPrice,
  gasoline,
  transmission,
  capacity,
  isLiked = false
}: CarCardProps) => {
  return (
    <div className="w-[304px] h-[388px] rounded-[10px] bg-white p-6 relative">
      {/* Car Name and Like Button */}
      <div className="flex justify-between items-start mb-[52px]">
        <div className="flex flex-col gap-1">
          <h3 className="text-[20px] text-[#1a202c] font-bold leading-[30px]">
            {name}
          </h3>
          <span className="text-[14px] text-[#90a3bf] font-bold leading-[21px]">
            {type}
          </span>
        </div>
        <button aria-label={isLiked ? "Unlike" : "Like"}>
          <Heart 
            className={`w-6 h-6 ${isLiked ? 'fill-[#ed3f3f] stroke-[#ed3f3f]' : 'stroke-[#90a3bf]'}`}
          />
        </button>
      </div>

      {/* Car Image */}
      <div className="relative w-full h-[72px] mb-[52px]">
        <Image
          src={image}
          alt={name}
          width={232}
          height={72}
          className="object-contain"
        />
        <div className="absolute bottom-0 w-full h-[68px] bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Specifications */}
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-1.5">
          <GlassesIcon className="w-6 h-6 text-[#90a3bf]" />
          <span className="text-[14px] text-[#90a3bf] font-medium leading-[21px]">
            {gasoline}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CarIcon />
          <span className="text-[14px] text-[#90a3bf] font-medium leading-[21px]">
            {transmission}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-6 h-6 text-[#90a3bf]" />
          <span className="text-[14px] text-[#90a3bf] font-medium leading-[21px]">
            {capacity}
          </span>
        </div>
      </div>

      {/* Price and Rent Button */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span className="text-[20px] font-bold leading-[25px]">
            ${price.toFixed(2)}
            <span className="text-[#90a3bf]">/ day</span>
          </span>
          {originalPrice && (
            <span className="text-[14px] text-[#90a3bf] font-bold leading-[18px]">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="h-11 px-5 bg-[#3563e9] rounded text-white font-semibold">
          Rent Now
        </button>
      </div>
    </div>
  );
};
