import React from "react";
import Text from "./Text";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import SearchRealEstate from "./SearchRealEstate";
import BlurContainer from "./BlurContainer";
import QuickActions from "./QuickActions";

const WelcomeSection = () => {
  return (
    <div className="lg:pb-20 relative pr-0 lg:pr-0 realtive pt-5 lg:pt-10 flex flex-col">
      <div className="absolute w-[250px] h-[250px] lg:w-[557px] lg:h-[557px] rounded-full bg-white bg-round-circle bg-transparent  -top-20 -right-20 lg:-right-40 -z-10"></div>
      <div className="lg:max-w-[545px] px-5 lg:px-10">
        <Text className="text-[20px] lg:text-[36px] font-bold block text-nowrap">
          Your first and last stop <br /> for all{" "}
          <Text className="text-estate-orange-1">Real Estate</Text> information
        </Text>
        <Text className="block text-sm text-estate-grey-2 tracking-normal mt-[10px] lg:mt-5 ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita
        </Text>
      </div>

      <div className="w-full lg:h-[705px] lg:w-[80%] lg:absolute lg:top-0 lg:right-0">
        <Image
          src="/images/hero.png"
          alt="building"
          className="w-full"
          width={1054}
          height={705}
        />
      </div>
      <SearchRealEstate />
      <QuickActions />
    </div>
  );
};

export default WelcomeSection;
