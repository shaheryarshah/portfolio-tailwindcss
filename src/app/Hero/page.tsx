import Image from "next/image";
export default function Hero() {
  return (
    <div className=" grid-cols-4 w-[1440px] h-[500px] bg-pink-300 mx-[200px]">
      <div className="gap-10 ml-10 flex flex-row">
        <div className="mt-[100px]">
        <Image src="/shaheryar.jpg" alt="Picture" height={50} width={50} className="h-[250px] w-[250px] "></Image>
        </div>
        <div className="mt-[150px]">
          <h1 className="text-2xl font-bold text-red-500">I am a Full Stack Developer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quia, <br /> nobis voluptas aspernatur similique aut culpa tempora perspiciatis quo facilis,<br /> placeat repellendus. Placeat laboriosam molestiae vero, quia in asperiores dicta?</p><br />
          <button className="px-[50px] bg-blue-500 items-center justify-center align-center rounded-xl ">Hire Me</button>
        </div>
      </div>
    </div>
  );
}