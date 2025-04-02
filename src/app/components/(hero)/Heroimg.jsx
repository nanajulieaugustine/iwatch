"use client";
import { useState } from "react";
import Image from "next/image";
const Heroimg = () => {
  const [chosenWatch, setWatchClicked] = useState("/images/black_watch.png");
  return (
    <div className="flex items-center">
      <Image src={chosenWatch} width={500} height={500} alt="watch" />
      <div className="flex flex-col gap-5 cursor-pointer">
        <div
          className={`w-3.5 h-3.5 rounded-full border-2 border-white 
      bg-black ${chosenWatch === "/black_watch.png" ? "border-4" : ""}`}
        ></div>

        <div
          className={`w-3.5 h-3.5 rounded-full border-2 border-white 
      bg-pink-300 ${chosenWatch === "/pink_watch.png" ? "border-4" : ""}`}
        ></div>

        <div
          className={`w-3.5 h-3.5 rounded-full border-2 border-white 
      bg-green-200 ${chosenWatch === "/blue_watch.png" ? "border-4" : ""}`}
        ></div>
      </div>
      <div className="flex gap-2.5 justify-center">
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/black_watch.png")}
          src="/images/black_watch.png"
        />
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/blue_watch.png")}
          src="/images/blue_watch.png"
        />
        <Image
          className="w-1/4 h-1/4"
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
