import React from "react";
import Image from "next/image";

import { footerMenus } from "@/helpers/data/layout";
import { FooterMenusEnums } from "@/helpers/enums/layout.enum";

import { Typography } from "../ui/typography";

import icInstallApp from "@/public/icons/common/ic-install-app.svg";

function Footer() {
  return (
    <div className="bg-background flex justify-center py-10">
      <div className="max-container flex gap-10 flex-wrap mdMax:gap-4 mdMax:gap-y-6">
        {footerMenus?.map((menu) => (
          <div key={menu?.key} className="w-[22%] smMax:w-[45%]">
            <Typography
              fontWeight="black"
              variant="h6"
              className="uppercase font-condensed italic"
            >
              {menu?.label}
            </Typography>
            <div className="mt-3">
              {menu?.children?.map((submenu) => (
                <Typography
                  key={submenu?.key}
                  className="mt-2
                relative w-fit before:absolute before:bottom-[-3px] before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:[transition:transform_0.4s_ease-out] hover:cursor-pointer hover:before:origin-bottom-left hover:before:scale-x-100 hover:before:bg-text
                "
                >
                  {submenu?.label}
                </Typography>
              ))}
              {menu?.key === FooterMenusEnums?.CONTACT_US && (
                <div className="mt-6">
                  <Image
                    src={icInstallApp}
                    alt="Install App"
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
