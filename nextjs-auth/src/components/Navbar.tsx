import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HandMetal } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import BtnLoggout from "./ui/BtnLoggout";
import Image from "next/image";
import img1 from "../../public/0106_hinh-nen-4k-may-tinh7.jpg";
const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <HandMetal />
        </Link>
        <div className="w-[170px] flex items-center justify-between">
          {session?.user?.image&&<Image
            className="object-cover rounded-[100%] h-[50px] "
            src={session?.user?.image}
            width={50}
            height={50}
            alt="Picture of the author"
          />}
          {session?.user ? (
            <BtnLoggout />
          ) : (
            <Link className={buttonVariants()} href="/sign-in">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
