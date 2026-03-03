import Navbar from "@/features/dashboard/Navbar";
import SideBar from "@/features/dashboard/SideBar";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen w-full bg-white flex">
      <SideBar />
      <div className=" w-full min-h-full h-full flex flex-col  ">
        <Navbar/>
        <main className=" bg-[#F1F2F5] w-full h-full ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;