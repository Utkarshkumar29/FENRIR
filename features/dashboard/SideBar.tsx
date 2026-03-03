"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

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
          ${
            isActive
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
    <div className="w-[300px] min-h-screen bg-white rounded-[8px] p-[16px] flex flex-col gap-[60px] ">
      <div className="flex gap-4 items-center">
        <div className="w-[24px] h-[24px] rounded-full bg-teal-500 flex justify-center items-center">
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
        </div>
        <p className="font-semibold text-3xl text-teal-500">aps</p>
      </div>


      <div>
        <div className=" flex gap-4 flex-col">
        {menuItems.map(renderItem)}
      </div>

      <hr className="border my-6" />
      <div className=" flex gap-4 flex-col">
        {bottomMenu.map(renderItem)}
      </div>
      </div>
    </div>
  )
}

export default SideBar