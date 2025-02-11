import Image from "next/image";
import plate from "@/assets/plate.png"; // Adjust the path

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="justify-center"><h1 className="text-8xl font-bold"> Bajra Foods </h1> </div>

      div <Image src={plate} alt="Logo" width={600} height={600} />
    </div>
  );
}
