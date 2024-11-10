"use client";

import React from "react";
import Link from "next/link";

interface ServiceNavigationProps {
  previousService: { name: string; link: string };
  nextService: { name: string; link: string };
}

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  previousService,
  nextService,
}) => {
  // Debugging: Log props to ensure data is correct
  console.log("Previous Service:", previousService);
  console.log("Next Service:", nextService);

  return (
    <div className="flex justify-between items-center py-12">
      {/* Previous Service Link */}
      <div className="text-left">
        {previousService.link && (
          <Link href={previousService.link} className="flex items-center text-gray-500">
            <span className="mr-2">←</span>
            <span className="underline">{previousService.name}</span>
          </Link>
        )}
      </div>

      {/* Next Service Link */}
      <div className="text-right">
        {nextService.link && (
          <Link href={nextService.link} className="flex items-center text-black">
            <span className="underline">{nextService.name}</span>
            <span className="ml-2">→</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceNavigation;
