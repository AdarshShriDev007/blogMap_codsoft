
'use client';

import { Carousel } from 'flowbite-react';

function HeroSection() {
  return (
    <div className="hidden lg:block h-80">
      <Carousel>
        <img src="images/bannerThree.png" alt="..." />
        <img src="images/bannerOne.png" alt="..." />
        <img src="images/bannerTwo.png" alt="..." />
      </Carousel>
    </div>
  );
}

export default HeroSection;