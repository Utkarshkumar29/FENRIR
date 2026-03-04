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

      <div className="ml-[300px] flex-1 flex flex-col">
        <Navbar />
        <main className="bg-[#F1F2F5] flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;