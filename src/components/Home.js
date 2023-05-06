import React from "react";
import Cta from "./homeComponents/Cta";
import WhoWeAre from "./homeComponents/WhoWeAre";
import WhatWeDo from "./homeComponents/WhatWeDo";
import JoinUs from "./homeComponents/JoinUs.js";

import { AnimationOnScroll } from 'react-animation-on-scroll';
  
  
  const Home = () => {
    return (
      <>
      <Cta></Cta>
<AnimationOnScroll animateIn="animate__bounceIn">
      <WhoWeAre></WhoWeAre>
      </AnimationOnScroll>
      <WhatWeDo></WhatWeDo>
      <JoinUs></JoinUs>
    </>
  );
};

export default Home;
