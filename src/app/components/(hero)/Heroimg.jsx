"use client";
import { useState } from "react";
import Image from "next/image";
const Heroimg = () => {
  const [chosenWatch, setWatchClicked] = useState("/images/black_watch.png");
  return (
    <div>
      <div className="overviewWatch">
        <Image src={chosenWatch} width={500} height={500} alt="watch" />
        <div className="colorContainer">
          <div
            className={
              chosenWatch == "/black_watch.png" ? "active black" : "black"
            }
          ></div>
          <div className="blue"></div>
          <div className="pink"></div>
        </div>
      </div>
      <div className="displayWatches">
        <Image
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/black_watch.png")}
          src="/images/black_watch.png"
        />
        <Image
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/blue_watch.png")}
          src="/images/blue_watch.png"
        />
        <Image
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/pink_watch.png")}
          src="/images/pink_watch.png"
        />
      </div>
    </div>
  );
};

export default Heroimg;
