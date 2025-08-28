import { User } from "@/types/user";
import Image from "next/image";

type WelcomeBoxProps = Omit<User, "email">;

const WelcomeBox = ({ name, picture }: WelcomeBoxProps) => {
  return (
    <div className="flex flex-col items-center gap-24">
      <Image
        src={picture}
        alt={`${name}'s profile picture`}
        width={120}
        height={120}
        className="rounded-full object-cover"
      />
      <p className="text-xl font-bold text-center">Hello {name}!</p>
    </div>
  );
};

export default WelcomeBox