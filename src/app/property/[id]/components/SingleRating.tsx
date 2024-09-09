import { GoKey } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsChatSquare } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import Sticker from "@icons/sticker.svg";
import Cleaner from "@icons/cleaner.svg";
import { SingleRatingProps } from "@/types";
import { SVGProps } from "react";

type CategoryIconComponent = React.ComponentType<SVGProps<SVGSVGElement>>;

const categoryIcons: Record<string, CategoryIconComponent> = {
  Cleanliness: Cleaner as CategoryIconComponent,
  Accuracy: IoIosCheckmarkCircleOutline,
  Checkin: GoKey,
  Communication: BsChatSquare,
  Location: CiMap,
  Value: Sticker as CategoryIconComponent,
};

const SingleRating: React.FC<SingleRatingProps> = ({ property }) => {
  const ratingCategories = property.ratingCategories;

  if (!ratingCategories?.OverallRating) {
    return null;
  }

  const { OverallRating } = ratingCategories;
  const ratings: number[] = Object.values(OverallRating).map((r) => Number(r));

  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

  const renderRatingLine = (rating: number) => {
    const levels = [5, 4, 3, 2, 1];
    return (
      <div className="flex flex-col items-start space-y-[-1px]">
        {levels.map((level) => {
          const background = rating >= level ? "bg-gray-300" : "black";

          return (
            <div key={level} className="flex items-center w-full">
              <span className="w-6 text-gray-600 text-[11px]">{level}</span>
              <div className="w-24 h-1 bg-gray-300 relative">
                <div
                  className={`absolute top-0 left-0 h-full ${background}`}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex-col border-b pb-5 hidden lg:flex my-10">
      <div className="flex items-start mb-4">
        <div className="flex flex-col items-start mr-10 xl:mr-20">
          <span className="font-medium mb-2">Overall Rating:</span>
          {renderRatingLine(averageRating)}
        </div>

        <div className="flex flex-wrap gap-10 items-center xl:gap-20">
          {Object.entries(OverallRating).map(([category, rating]) => {
            const Icon = categoryIcons[category] || GoKey;

            return (
              <div key={category} className="flex flex-col items-center">
                <span className="font-medium">{category}:</span>
                <span className="text-gray-600">
                  {Number(rating).toFixed(1)}
                </span>
                <Icon className="w-8 h-8 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleRating;
