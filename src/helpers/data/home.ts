import imgCollection1 from "@/public/images/home/collection-1.png";
import imgCollection2 from "@/public/images/home/collection-2.png";
import imgCollection3 from "@/public/images/home/collection-3.png";
import imgCollection4 from "@/public/images/home/collection-4.png";
import imgCollection5 from "@/public/images/home/collection-5.png";
import imgCollection6 from "@/public/images/home/collection-6.png";

import icVideo from "@/public/icons/home/ic-video.svg";
import icNewNfts from "@/public/icons/home/ic-new-nfts.svg";
import icRanking from "@/public/icons/home/ic-ranking.svg";
import icHowToBuy from "@/public/icons/home/ic-how-to-buy.svg";
import icRoadMaps from "@/public/icons/home/ic-roadmaps.svg.svg";
import icFreeToEarn from "@/public/icons/home/ic-free-to-earn.svg";

const newNFTCollections = [
  {
    key: "collection-1",
    thumb: imgCollection1,
  },
  {
    key: "collection-2",
    thumb: imgCollection2,
  },
  {
    key: "collection-3",
    thumb: imgCollection3,
  },
  {
    key: "collection-4",
    thumb: imgCollection4,
  },
  {
    key: "collection-5",
    thumb: imgCollection5,
  },
  {
    key: "collection-6",
    thumb: imgCollection6,
  },
  {
    key: "collection-7",
    thumb: imgCollection1,
  },
  {
    key: "collection-7",
    thumb: imgCollection2,
  },
];

const options = [
  { label: "Free to earn", logo: icFreeToEarn },
  { label: "Ranking", logo: icRanking },
  { label: "Video-NFT", logo: icVideo },
  { label: "How to buy", logo: icHowToBuy },
  { label: "New NFTS", logo: icNewNfts },
  { label: "Roadmaps", logo: icRoadMaps },
];
export { newNFTCollections, options };
