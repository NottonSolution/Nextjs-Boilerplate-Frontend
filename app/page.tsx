import Image from "next/image";
import Button from "./shared/components/form/button/button";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-center flex flex-col items-center justify-center h-[500px] aspect-square rounded-full relative">
        <div className="w-full h-full flex justify-center items-center flex-col ">
          <div className="rouned-full relative rounded-full overflow-hidden w-[170px] h-[150px] bg-white">
            <Image
              src={"/notton-logo.png"}
              alt="notton-logo.png"
              fill
              className="object-fit "
            />
          </div>
          <h1 className="text-[3rem] font-bold ">Nextjs Boilerplate</h1>
          <p className="font-semibold text-gray-400">by Notton Solution</p>
          <div className="flex gap-2">
            <Button label="Getting Start" variant="primary" className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
