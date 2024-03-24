"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";

const Collection = () => {
  const [alls, setAlls] = useState(null);

  useEffect(() => {
    fetch("/run.json")
      .then((res) => res.json())
      .then((data) => setAlls(data));
  }, []);

  return (
    <div className="mt-20 pb-20">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold text-black dark:text-white ">
          Collection Spotlight{" "}
        </h1>
        <p className="w-[912px] mx-auto text-[14px] text-black dark:text-white ">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <div className="px-40 pt-7">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: false,
            }}
            modules={[]}
            className="mySwiper "
          >
            {alls?.map((item) => (
              <SwiperSlide key={item?._id}>
                <div className="bg-white">
                  <Image
                    className=" h-[500px]  w-full rounded-lg"
                    src={item?.image}
                    width={300}
                    height={50}
                    alt=""
                  />

                  <div className=" my-3 p-2">
                    <h3 className="text-2xl font-bold mb-2"> {item?.name}</h3>
                    <span> {item?.date} </span> | <span>{item?.day} </span> |{" "}
                    <span> {item?.time}</span>
                    <p className="pt-2 px-3 text-[#A9ACB2]"> {item?.title} </p>
                  </div>

                  <button className="btn w-full bg-[#1D1D1F] hover:bg-[#1D1D1F] text-white px-2">
                    {item?.cardLook}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Collection;
