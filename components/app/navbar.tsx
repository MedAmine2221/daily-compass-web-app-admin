"use client";;
import Image from 'next/image';
import { FiBell, FiLogOut } from 'react-icons/fi';
import { FaLanguage } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
export default function NavbarMenu() {
  const router = useRouter();
  const user = useSelector((state: any)=>state.user.items);
  return (
    <nav className="w-full relative bg-linear-to-r from-blue-950 to-[#4e4db0]">
      <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />
      <div className="relative px-6">
        <div className="flex items-center justify-between h-20">          
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/logo2.png"
              alt="Logo"
              width={60}
              height={60}
            />
            <span className="text-white font-bold text-xl">
              YOUR DAILY COMPASS
            </span>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            
            <div className="w-10 h-10 rounded-full bg-[#605fa8] flex items-center justify-center">
              <FaLanguage className="w-5 h-5 text-white" />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#605fa8] flex items-center justify-center">
              <FiBell className="w-5 h-5 text-white" />
            </div>

            <div className="flex items-center gap-3">
              <Image
                src={user?.imageUrl ? user?.imageUrl : "/user.png"}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div className="hidden md:block">
                <p className="text-white text-base font-medium">{user?.username}</p>
                <p className="text-gray-400 text-base">{user?.address}</p>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-[#605fa8] flex items-center justify-center">
              <FiLogOut onClick={()=> router.push("/auth")} className="w-5 h-5 text-white" />
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}