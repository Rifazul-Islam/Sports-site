import Image from "next/image";

const SportCord = ({ store }) => {
  return (
    <div>
      <div className="border-2 dark:border-none p-3 shadow-md dark:shadow-2xl h-[470px] dark:bg-[#3B3E47] rounded ">
        <Image
          className="rounded-md h-[300px] w-full"
          src={store?.image}
          width={300}
          height={50}
          alt="Players"
        />

        <h3 className=" font-bold my-5 dark:text-white font-inter text-[20px]">
          {store?.name}
        </h3>
        <div className="border bg-[#F7F7F8] dark:text-white  p-2 rounded-lg dark:bg-[#292B32] dark:border-none shadow-md">
          <p className="flex items-center gap-6">
            <span>{store?.event} </span>
            <span>{store?.sport} </span>
          </p>

          <p className="mt-2 text-black dark:text-white  font-bold flex items-center gap-10">
            <span> {store?.totalEvents} </span>
            <span> {store?.boll} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportCord;
