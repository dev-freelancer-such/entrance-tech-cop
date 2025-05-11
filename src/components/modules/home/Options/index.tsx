import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { cn } from "@/utils/cn";
import { options } from "@/helpers/data/home";

import { Typography } from "@/components/ui/typography";

import icNew from "@/public/icons/home/ic-new.svg";

function Options() {
  const { t } = useTranslation("home");

  return (
    <div className="w-full bg-background-normal flex justify-center">
      <div className="flex max-container py-6 align-center justify-between gap-4 xlMax:py-4 xlMax:gap-2 xsMax:flex-wrap xsMax:justify-start">
        {options.map((option) => (
          <div
            key={option?.label}
            className={cn(
              "h-fit flex flex-col items-center gap-3 cursor-pointer",
              "hover:animate-scaleEffect"
            )}
          >
            <div className="relative h-fit">
              <Image
                src={option?.logo}
                alt={option?.label}
                className="xlMax:w-8 xlMax:h-8"
              />
              {option?.label === "new-nfts" && (
                <Image
                  src={icNew}
                  alt="New option"
                  className="xlMax:w-7 xlMax:h-7 absolute -top-3 -right-3"
                />
              )}
            </div>
            <Typography className="uppercase text-center text-sm">
              {option?.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Options;
