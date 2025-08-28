import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen grid items-center justify-center">
      <p>go to 
        <Link href='/dashboard' className="text-blue-400 hover:text-blue-700 mx-4">Dashboard</Link>
      </p>
    </div>
  );
}
