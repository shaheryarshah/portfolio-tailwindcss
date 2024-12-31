import Link from "next/link";


export default function Navbar() {
  return (
  <div className="bg-blue-500 w-[1440px] mx-[200px]">
    <div>
      <h1 className="font-bold">MUHAMMAD SHAHERYAR</h1>
    </div>
    <div className="flex gap-2">
    <Link href="/contact">Contact</Link> <br />
    <Link href="/about">About</Link>
    </div>
    </div>
  );
}