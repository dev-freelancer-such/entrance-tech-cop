import React from "react";
import Image from "next/image";

import { DotButton, useDotButton } from "@/components/ui/dot-button";

import imgBannerMockup from "@/public/images/home/img-banner-mockup.png";

function Banner() {
  const { selectedIndex, scrollSnaps, onDotButtonClick, translateX } =
    useDotButton();

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 "
        style={{ transform: translateX }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="shrink-0 grow-0 basis-full">
            <div className="max-h-[450px] min-h-[180px] h-full w-full bg-gray-200">
              <Image
                src={imgBannerMockup}
                alt={`Banner Mockup ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-1 w-7 rounded-full lgMax:w-5 mdMax:w-4  ${
              selectedIndex === index ? "bg-button" : "bg-text"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
