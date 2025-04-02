"use client";
import HeroText from "./Herotext";
import Heroimg from "./Heroimg";
import { useState } from "react";
const Hero = () => {
  const [chosenWatch, setWatchClicked] = useState(false);
  return (
    !chosenWatch && (
      <section className="flex justify-between py-20">
        <HeroText></HeroText>
        <Heroimg chosenWatch={chosenWatch} setWatchClicked={setWatchClicked} />
      </section>
    )
  );
};

export default Hero;
