import { CarCard } from './CarCard';

const POPULAR_CARS = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c35e6c85-fb3e-487b-be84-43afa8b45cca",
    price: 99.00,
    gasoline: "90L",
    transmission: "Manual",
    capacity: "2 People",
    isLiked: true
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58f91760-92d0-4960-8f72-481fcdf7516a",
    price: 80.00,
    originalPrice: 100.00,
    gasoline: "80L",
    transmission: "Manual",
    capacity: "2 People"
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82d2d7cb-ed0e-4fd1-a6a9-ac2a8333272c",
    price: 96.00,
    gasoline: "70L",
    transmission: "Manual",
    capacity: "4 People",
    isLiked: true
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a3287f0-e943-41bd-b51e-9c01e5295dc9",
    price: 80.00,
    originalPrice: 100.00,
    gasoline: "80L",
    transmission: "Manual",
    capacity: "2 People"
  }
];

export const PopularCarRent = () => {
  return (
    <div className="w-[1312px] flex flex-col gap-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="h-11 px-5 flex items-center">
          <span className="text-[#90a3bf] font-semibold text-base leading-5">
            Popular Car
          </span>
        </div>
        <button className="h-11 px-5 flex items-center">
          <span className="text-[#3563e9] font-semibold text-base leading-5">
            View All
          </span>
        </button>
      </div>

      {/* Car Cards */}
      <div className="flex gap-8">
        {POPULAR_CARS.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
};
