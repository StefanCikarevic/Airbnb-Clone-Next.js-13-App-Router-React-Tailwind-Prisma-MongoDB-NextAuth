"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt=""
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      width={100}
      height={100}
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
