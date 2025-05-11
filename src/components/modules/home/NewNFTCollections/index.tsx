import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/utils/cn";
import { newNFTCollections } from "@/helpers/data/home";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";

import imgHotNFT from "@/public/images/home/img-hot-nft.png";
import nftDrops from "@/public/images/home/img-nft-drops.png";
import imgPromotion from "@/public/images/home/img-promotion.png";

function NewNFTCollections() {
  return (
    <div className="bg-background flex justify-center items-center border-b border-background-neutral">
      <div className="max-container py-20 lgMax:py-14 mdMax:py-10">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 1000,
            }),
          ]}
        >
          <div className="flex items-center justify-between">
            <Typography
              variant="h4"
              className="text-text-hover font-black italic uppercase font-condensed"
            >
              New NFT Collections
            </Typography>
            <div className="flex items-center justify-between gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="mt-2">
            {newNFTCollections?.map((collection, index) => (
              <CarouselItem
                key={index}
                className={cn("flex-shrink-0")}
                index={index}
              >
                <div className="max-h-[245px] h-full">
                  <Image
                    width={180}
                    height={245}
                    src={collection.thumb}
                    alt={`collection Mockup ${index}`}
                    className="mdMax:max-w-[102px] mdMax:max-h-[140px] rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex mt-20 gap-6 xxxlMax:gap-3 xlMax:flex-col xlMax:gap-6 lgMax:mt-14 mdMax:mt-10">
          <div className="w-[54%] xxxlMax:basis-1/2 xlMax:w-full">
            <Carousel className="w-full">
              <div className="flex items-center justify-between">
                <Typography
                  variant="h4"
                  className="text-text-hover font-black italic uppercase font-condensed"
                >
                  NFT Drops Calendar
                </Typography>
                <div className="flex items-center justify-between gap-2">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </div>
              <CarouselContent className="mt-2">
                {Array.from({ length: 9 }).map((_, index) => (
                  <CarouselItem
                    key={`nft-${index}`}
                    className="shrink-0 grow-0 basis-full"
                    index={index}
                  >
                    <div className="h-[240px] w-full smMax:max-h-[170px]">
                      <Image
                        src={nftDrops}
                        alt="Nft drops"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-[46%] flex gap-6 items-center justify-center xxxlMax:basis-1/2 xxxlMax:gap-3 xlMax:w-full xlMax:gap-6">
            <div className="w-full">
              <Typography
                variant="h4"
                className="text-text-hover font-black italic uppercase font-condensed"
              >
                HOT NFT
              </Typography>
              <div className="relative w-full pt-[100%] mt-2">
                <Image
                  src={imgHotNFT}
                  alt="Hot Nft"
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110 rounded-xl"
                />
              </div>
            </div>
            <div className="w-full">
              <Typography
                variant="h4"
                className="text-text-hover font-black italic uppercase font-condensed"
              >
                PROMOTION
              </Typography>
              <div className="relative w-full pt-[100%] mt-2">
                <Image
                  src={imgPromotion}
                  alt="Promotion"
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNFTCollections;
