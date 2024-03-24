"use client";

import { useEffect, useState } from "react";
import SportCord from "./SportCord";
import Image from "next/image";

const Sports = () => {
  const [stores, setStores] = useState(null);

  useEffect(() => {
    fetch("/sports.json")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);
  // console.log(stores);
  return (
    <div>
      {/** First  Part and Player Content  show   */}
      <div className="px-6 flex justify-center lg:flex-row flex-col mt-10 gap-3">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {stores?.map((store) => (
            <SportCord key={store?.id} store={store} />
          ))}
        </div>

        {/** Second Part and add show   */}
        <div className="lg:w-[300px] lg:h-[470px]">
          <div className="border-2 p-2 dark:shadow-2xl dark:bg-[#3B3E47]  dark:border-none shadow-md relative">
            <Image
              className="rounded-md w-full h-[200px] "
              src="https://i.ibb.co/5YVyQS2/add1.jpg"
              width={300}
              height={50}
              alt="Players"
            />
            <p className="bg-black p-1 text-white  w-12 text-center rounded absolute top-2 right-2">
              {" "}
              Ad
            </p>
            <h3 className=" font-bold  my-2 font-inter dark:text-white">
              {" "}
              Advertisement title
            </h3>
            <p className="text-[13px] pb-14 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>

      {/** See More Button  */}
      <div className="text-center my-7 ">
        <button className="btn bg-[#2C9CF0] hover:bg-[#4d9bd6] text-white  border-none">
          See More
        </button>
      </div>
    </div>
  );
};

export default Sports;
