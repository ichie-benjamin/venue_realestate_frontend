import React from "react";
import SectionWrapper from "./SectionWrapper";
import Text from "./Text";
import { Button } from "./ui/button";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const AboutUs = () => {
  return (
    <SectionWrapper className="flex flex-col lg:flex-row mt-5">
      <div className="w-full lg:w-1/2">
        <SectionHeader
          title="About us"
          subTitle="We are here to help you find your dream home."
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita"
        />
        <Button className=" rounded-estate-border-radius-3 flex items-center gap-[10px] mt-5">
          <div className="w-[29px] h-[29px] bg-white rounded-full flex items-center justify-center">
            <Image src="/icons/play.svg" alt="play" width={7} height={10} />
          </div>
          Watch Documentry
        </Button>
      </div>
      <div className="w-full lg:w-1/2 mt-5 h-[530px] grid grid-cols-12 grid-rows-12 gap-5">
        <div className="bg-[url('/images/vertical-house.jpg')] bg-center bg-cover rounded-estate-border-radius col-start-3 col-span-5 row-start-1 row-span-5"></div>
        <div className="bg-[url('/images/vertical-house.jpg')] bg-center bg-cover rounded-estate-border-radius col-start-8 col-span-5 row-start-3 row-span-5"></div>
        <div className="bg-[url('/images/horizontal-house.jpg')] bg-center bg-cover rounded-estate-border-radius col-start-1 col-span-7 row-start-6 row-span-4 "></div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
