import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen grid items-center justify-center">
      <p>go to 
        <Link href='/dashboard'>Dashboard</Link>
      </p>
    </div>
  );
}
