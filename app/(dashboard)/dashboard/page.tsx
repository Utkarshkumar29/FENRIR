import { scanTableData } from "@/constants/scanTableData";
import { ScanRow } from "@/features/dashboard/ScanRow";

const Dashboard = () => {
    return (
        <div className=" bg-[#F1F2F5] p-[24px] flex flex-col gap-[24px] ">
            <div className=" bg-white rounded-[8px] ">
                <div className=" flex justify-between p-[16px] ">
                    <div className=" flex items-center ">
                        <p className=" text-[12px] text-gray-400 ">Org: <span className=" text-[16px] text-black ">Project X</span></p>
                    </div>
                    <div className=" flex items-center ">
                        <p className=" text-[12px] text-gray-400 ">Owner: <span className=" text-[16px] text-black ">Utkarsh Kumar</span></p>
                    </div>
                    <div className=" flex items-center ">
                        <p className=" text-[12px] text-gray-400 ">Total Scans: <span className=" text-[16px] text-black ">100</span></p>
                    </div>
                    <div className=" flex items-center ">
                        <p className=" text-[12px] text-gray-400 ">Scheduled: <span className=" text-[16px] text-black ">1000</span></p>
                    </div>
                    <div className=" flex items-center ">
                        <p className=" text-[12px] text-gray-400 ">Recans: <span className=" text-[16px] text-black ">100</span></p>
                    </div>
                    <div className=" flex items-center ">
                        <p className=" text-[12px] text-gray-400 ">Failed Scans: <span className=" text-[16px] text-black ">100</span></p>
                    </div>
                    <div className=" flex items-center gap-2 ">
                        <i class="fas fa-sync-alt text-teal-400"></i>
                        <span className=" text-gray-400 ">10 mins ago</span>
                    </div>
                </div>
                <div className="flex justify-between px-[16px] py-[12px] ">
                    <div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[16px] text-gray-400  "> Critical Severity</p>
                            <i class="fas fa-ban p-[8px] rounded-[8px] bg-red-50 text-red-500 "></i>
                        </div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[24px] text-black  ">86</p>
                            <div className=" text-[11px] flex gap-2 text-red-500 items-center "><i class="fas fa-arrow-up"></i>+2% increase than yesterday</div>
                        </div>
                    </div>
                    <div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[16px] text-gray-400  "> High Severity</p>
                            <i class="fas fa-exclamation-triangle bg-orange-50 text-orange-500 p-[8px] rounded-[8px] "></i>
                        </div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[24px] text-black  ">16</p>
                            <div className=" text-[11px] flex gap-2 text-orange-500 items-center "><i class="fas fa-arrow-up"></i>+2% increase than yesterday</div>
                        </div>
                    </div>
                    <div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[16px] text-gray-400  "> Medium Severity</p>
                            <i class="fas fa-exclamation-triangle p-[8px] rounded-[8px] bg-green-50 text-green-500 "></i>
                        </div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[24px] text-black  ">26</p>
                            <div className=" text-[11px] flex gap-2 text-green-500 items-center "><i class="fas fa-arrow-down"></i>+2% increase than yesterday</div>
                        </div>
                    </div>
                    <div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[16px] text-gray-400  "> Low Severity</p>
                            <i class="fas fa-search-location p-[8px] rounded-[8px] bg-blue-50 text-blue-500 "></i>
                        </div>
                        <div className=" flex items-center gap-6 ">
                            <p className=" text-[24px] text-black  ">86</p>
                            <div className=" text-[11px] flex gap-2 text-blue-500 items-center "><i class="fas fa-arrow-up"></i>+0.9% increase than yesterday</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-full bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px] ">
                <div className=" flex gap-4 ">
                    <div className=" w-full px-[16px] py-[8px] border border-gray-300 flex gap-4 items-center  rounded-[8px] ">
                        <i class="fas fa-search text-gray-400 "></i>
                        <input placeholder="Search scans by name or type...." className="placeholder:text-gray-400 w-full "/>
                    </div>
                    <div className=" text-gray-400 px-[16px] py-[8px] rounded-[8px] flex gap-4 items-center border border-gray-300">
                        <i class="fas fa-filter"></i>
                        <span>Filters</span>
                    </div>
                    <div className=" text-gray-400 px-[16px] py-[8px] rounded-[8px] flex gap-4 items-center border border-gray-300">
                        <i class="fas fa-columns"></i>
                        <span>Columns</span>
                    </div>
                    <div className=" text-white px-[16px] py-[8px] rounded-[8px] flex gap-4 items-center border bg-teal-400">
                        <i class="fas fa-plus"></i>
                        <span className=" whitespace-nowrap ">New Scan</span>
                    </div>
                </div>

                <div className=" p-[16px] border border-gray-300 rounded-[8px] flex flex-col gap-[16px] ">
                    <div className=" grid grid-cols-6 ">
                        <p className=" text-[12px] text-gray-400 ">Scan Name</p>
                        <p className=" text-[12px] text-gray-400 ">Type</p>
                        <p className=" text-[12px] text-gray-400 ">Status</p>
                        <p className=" text-[12px] text-gray-400 ">Progress</p>
                        <p className=" text-[12px] text-gray-400 ">Vulnerability</p>
                        <p className=" text-[12px] text-gray-400 ">LAst Scan</p>
                    </div>
                    <div className="  flex flex-col gap-[34px] justify-between ">
                        {scanTableData.map((scan) => (
                            <ScanRow key={scan.id} scan={scan} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;