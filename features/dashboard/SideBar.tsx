"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import profileImage from "../../public/profileImage.jpg"

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: "fas fa-border-all" },
  { name: "Projects", href: "/projects", icon: "fas fa-clipboard-check" },
  { name: "Scans", href: "/scans", icon: "far fa-file-alt" },
  { name: "Schedule", href: "/schedule", icon: "far fa-calendar-minus" },
]

const bottomMenu = [
  { name: "Notification", href: "/notification", icon: "far fa-bell" },
  { name: "Settings", href: "/settings", icon: "fas fa-cog" },
  { name: "Support", href: "/support", icon: "far fa-question-circle" },
]

const SideBar = () => {
  const pathname = usePathname()

  const renderItem = (item: any) => {
    const isActive = pathname === item.href

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`flex gap-4 items-center px-4 py-2 rounded-[100px] transition-all
          ${isActive
            ? "bg-teal-100 text-teal-600"
            : "text-gray-500 hover:bg-gray-100"
          }`}
      >
        <i className={item.icon}></i>
        <p>{item.name}</p>
      </Link>
    )
  }

  return (
    <div className="w-[300px] h-screen rounded-[8px] p-[16px] flex flex-col gap-[60px] justify-between fixed left-0 top-0">
      <div className="flex gap-4 items-center">
        <div className="w-[24px] h-[24px] rounded-full bg-teal-500 flex justify-center items-center">
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
        </div>
        <p className="font-semibold text-3xl text-teal-500">aps</p>
      </div>


      <div className=" h-full flex flex-col justify-between ">
        <div>
          <div className=" flex gap-4 flex-col">
            {menuItems.map(renderItem)}
          </div>

          <hr className="border my-6" />
          <div className=" flex gap-4 flex-col">
            {bottomMenu.map(renderItem)}
          </div>
        </div>
        <div className=" mb-4 flex gap-4 items-center px-[8px]  ">
          <Image src={profileImage} width={40} height={40} className=" min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded-full" alt="Error" />
          <div className="flex justify-between items-center w-full ">
            <div className=" flex flex-col ">
              <span className=" text-gray-400 ">admin@edu.com</span>
              <span className=" text-black ">Security Lead</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SideBar