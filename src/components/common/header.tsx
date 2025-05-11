import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { cn } from "@/utils/cn";
import { headerMenus } from "@/helpers/data/layout";

import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

import icLogo from "@/public/icons/common/ic-logo.svg";
import icCloseMenu from "@/public/icons/common/ic-close.svg";
import icMenuMobile from "@/public/icons/common/ic-mobile-menu.svg";

function Header() {
  const router = useRouter();

  const [isOpenMobileMenus, setIsOpenMobileMenus] = useState<boolean>(false);

  function onToggleMenuMobile() {
    setIsOpenMobileMenus((prev) => !prev);
  }

  return (
    <div className="bg-background sticky top-0 left-0 z-10">
      <div className="max-w-[1600] px-10 py-[20.5px] flex items-center justify-between lgMax:px-5 lgMax:py-3">
        <div className="flex items-center gap-6 lgMax:gap-4">
          {isOpenMobileMenus ? (
            <Image
              src={icCloseMenu}
              alt="Close menu mobile"
              className="hidden lgMax:block cursor-pointer transform transition-transform duration-300 hover:rotate-180"
              onClick={onToggleMenuMobile}
            />
          ) : (
            <Image
              src={icMenuMobile}
              alt="Menu mobile"
              className="hidden lgMax:block cursor-pointer"
              onClick={onToggleMenuMobile}
            />
          )}

          <Image src={icLogo} alt="Logo" />
          <div className="flex items-center justify-between lgMax:hidden">
            {headerMenus?.map((menu) => (
              <div
                key={menu?.key}
                className={cn(
                  "py-2.5 px-[18px] cursor-pointer group hover:bg-background-neutral rounded-full",
                  router?.pathname === menu?.href && "bg-background-neutral"
                )}
              >
                <Typography
                  fontWeight="medium"
                  className={cn(
                    "uppercase group-hover:text-text-hover",
                    router?.pathname === menu?.href && "text-text-hover"
                  )}
                >
                  {menu.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button>Sign up</Button>
          <Button variant="secondary">Log in</Button>
        </div>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpenMobileMenus ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 h-full max-w-[300px] w-full bg-background-normal z-20 shadow-lg smMax:max-w-full"
      >
        <div className="p-5">
          <div className="flex flex-col gap-4">
            {headerMenus?.map((menu) => (
              <div
                key={menu?.key}
                className={cn(
                  "py-3.5 px-4 cursor-pointer hover:bg-background-neutral rounded-full group ",
                  router?.pathname === menu?.href && "bg-background-neutral"
                )}
                onClick={() => {
                  router.push(menu.href);
                  setIsOpenMobileMenus(false);
                }}
              >
                <Typography
                  className={cn(
                    "uppercase text-center lgMax:text-sm group-hover:text-text-hover",
                    router?.pathname === menu?.href && "text-text-hover"
                  )}
                  fontWeight="medium"
                >
                  {menu.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
