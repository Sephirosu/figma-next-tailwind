import { FC } from "react";
import { PiDesk } from "react-icons/pi";
import { BsBuildingCheck } from "react-icons/bs";
import { RiCalendarCheckLine } from "react-icons/ri";
import { ApartmentFeaturesProps } from "@/types";

const featureIcons = {
  dedicatedWorkspace: <PiDesk />,
  selfCheckIn: <BsBuildingCheck />,
  cancellationPolicy: <RiCalendarCheckLine />,
};

const ApartmentFeatures: FC<ApartmentFeaturesProps> = ({ property }) => {
  return (
    <div className="text-base my-6">
      {property.features?.dedicatedWorkspace?.isAvailable ? (
        <div className="flex items-start py-1">
          <div className="mr-2 text-gray-600 mt-[1px]">
            {featureIcons.dedicatedWorkspace}
          </div>
          <div>
            <div className="font-semibold">
              {property.features.dedicatedWorkspace.title}
            </div>
            <div className="text-xs smxs:text-sm text-gray-600">
              {property.features.dedicatedWorkspace.description}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start py-1">
          <div className="mr-2 text-gray-400 mt-[3px]">
            {featureIcons.dedicatedWorkspace}
          </div>
          <div>
            <div className="font-semibold text-gray-400 underline">
              Dedicated Workspace
            </div>
            <div className="text-xs smxs:text-sm text-gray-400">
              Not available
            </div>
          </div>
        </div>
      )}

      {property.checkIn?.selfCheckIn?.isAvailable ? (
        <div className="flex items-start py-1">
          <div className="mr-2 text-gray-600 mt-[3px]">
            {featureIcons.selfCheckIn}
          </div>
          <div>
            <div className="font-semibold">
              {property.checkIn.selfCheckIn.title}
            </div>
            <div className="text-xs smxs:text-sm text-gray-600">
              {property.checkIn.selfCheckIn.description}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start py-1">
          <div className="mr-2 text-gray-400 mt-[3px]">
            {featureIcons.selfCheckIn}
          </div>
          <div>
            <div className="font-semibold text-gray-400 underline">
              Self Check-In
            </div>
            <div className="text-xs smxs:text-sm text-gray-400">
              Not available
            </div>
          </div>
        </div>
      )}

      {property.cancellationPolicy?.isAvailable ? (
        <div className="flex items-start py-1">
          <div className="mr-2 text-gray-600 mt-[3px]">
            {featureIcons.cancellationPolicy}
          </div>
          <div>
            <div className="font-semibold">
              {property.cancellationPolicy.messageTemplate.replace(
                "{date}",
                property.cancellationPolicy.cancellationDate
              )}
            </div>
            <div className="text-xs smxs:text-sm text-gray-600">
              {property.cancellationPolicy.description}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start py-1">
          <div className="mr-2 text-gray-400 mt-[3px]">
            {featureIcons.cancellationPolicy}
          </div>
          <div>
            <div className="font-semibold text-gray-400 underline">
              Cancellation Policy
            </div>
            <div className="text-xs smxs:text-sm text-gray-400">
              Not available
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentFeatures;
