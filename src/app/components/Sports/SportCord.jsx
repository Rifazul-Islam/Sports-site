import Image from "next/image";

const SportCord = ({ store }) => {
  return (
    <div>
      <div className="border-2 p-2 shadow-md h-[470px]">
        <Image
          className="rounded-md h-[300px] w-full"
          src={store?.image}
          width={300}
          height={50}
          alt="Players"
        />

        <h3 className=" font-bold my-5"> {store?.name} </h3>
        <div className="border bg-[#F7F7F8] p-3 rounded-lg">
          <p className="flex items-center justify-around">
            <span>{store?.event} </span>
            <span>{store?.sport} </span>
          </p>

          <p className="mt-2 text-black font-bold flex items-center justify-around">
            <span> {store?.totalEvents} </span>
            <span> {store?.boll} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportCord;
