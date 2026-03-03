import { activityLogs } from "@/constants/activityLogs";
import { findingLogs } from "@/constants/findingLogs";

const Scans = () => {
    return (
        <div className=" p-[16px] flex flex-col gap-[16px] ">
            <div className=" bg-white p-[16px] rounded-[8px] flex gap-[24px] ">
                <div className=" min-w-[150px] h-[150px] rounded-full bg-black flex flex-col items-center justify-center  ">
                    <span className=" text-3xl text-teal-400 ">0%</span>
                    <span className=" text-[11px] text-gray-500 ">In Progresss</span>
                </div>
                <p className="border border-gray-200" />
                <div className=" flex flex-col gap-[24px] w-full ">
                    <div className="relative flex justify-between items-center px-[24px] ">


                        <div className="absolute top-7 left-0 w-full h-[2px] bg-gray-200 px-[16px] " />


                        <div className="relative flex flex-col items-center z-10">
                            <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center border border-gray-300 text-gray-200 bg-teal-400">
                                <i class="fa-solid fa-magnifying-glass text-white"></i>
                            </div>
                            <p className="mt-4 text-sm font-medium text-teal-600">
                                Spidering
                            </p>
                        </div>


                        <div className="relative flex flex-col items-center z-10">
                            <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-200">
                                <i class="fa-solid fa-code-branch text-gray-400"></i>
                            </div>
                            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Mapping
                            </p>
                        </div>


                        <div className="relative flex flex-col items-center z-10">
                            <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-200">
                                <i class="fa-solid fa-vial text-gray-400"></i>
                            </div>
                            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Testing
                            </p>
                        </div>


                        <div className="relative flex flex-col items-center z-10">
                            <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-200">
                                <i class="fa-solid fa-check-double text-gray-400"></i>
                            </div>
                            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Validating
                            </p>
                        </div>

                        {/* Step 5 */}
                        <div className="relative flex flex-col items-center z-10">
                            <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-200">
                                <i class="fa-regular fa-file-lines text-gray-400"></i>
                            </div>
                            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Reporting
                            </p>
                        </div>

                    </div>
                    <div className=" flex justify-between items-center w-full px-[24px] ">
                        <div className=" flex flex-col ">
                            <span className=" text-gray-500 text-[12px] ">Scan Type</span>
                            <span className=" text-black font-semibold text-[16px] ">Grey Box</span>
                        </div>
                        <div className=" flex flex-col ">
                            <span className=" text-gray-500 text-[12px] ">Targets</span>
                            <span className=" text-black font-semibold text-[16px] ">google..com</span>
                        </div>
                        <div className=" flex flex-col ">
                            <span className=" text-gray-500 text-[12px] ">Started At</span>
                            <span className=" text-black font-semibold text-[16px] ">Nov 22, 09:00AM</span>
                        </div>
                        <div className=" flex flex-col ">
                            <span className=" text-gray-500 text-[12px] ">Credentials</span>
                            <span className=" text-black font-semibold text-[16px] ">2 Active</span>
                        </div>
                        <div className=" flex flex-col ">
                            <span className=" text-gray-500 text-[12px] ">Files</span>
                            <span className=" text-black font-semibold text-[16px] ">Control.pdf</span>
                        </div>
                        <div className=" flex flex-col ">
                            <span className=" text-gray-500 text-[12px] ">Checklists</span>
                            <span className=" text-teal-400 font-semibold text-[16px] ">40/350</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white  rounded-[8px] ">
                <div className="flex justify-between items-center border-b border-gray-200 py-[8px] px-[16px]  ">
                    <div className="flex gap-[24px]">
                        <div className=" flex gap-2 items-center ">
                            <span className=" w-[10px] h-[10px] rounded-full bg-teal-400 "></span>
                            <span className=" text-[16px] text-black font-semibold ">Live Scan Console</span>
                        </div>
                        <div className=" flex flex items-center gap-2 p-[8px] bg-teal-50 rounded-2xl text-gray-400 ">
                            <i class="fa-solid fa-stopwatch"></i>
                            <span>Running....</span>
                        </div>
                    </div>
                    <div className=" flex gap-[24px] items-center text-gray-400 ">
                        <i class="fa-solid fa-angle-down"></i>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className=" pl-[16px] flex ">
                    <div className=" w-1/2 border-r border-gray-200 ">
                        <div className=" flex gap-6  items-center ">
                            <p className=" px-[34px] py-[12px] text-teal-400 border-b border-teal-400 ">Activity Log</p>
                            <p className=" text-gray-500 ">Verification Loops</p>
                        </div>
                        <div className=" flex flex-col gap-4 pt-[8px] ">
                            {activityLogs.map((log, index) => {
                                return (
                                    <div className=" ">
                                        <p className="flex gap-2 "><span className=" text-gray-400 ">[{log.time}]</span><span className=" text-black ">{log.message}</span></p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className=" w-1/2 h-full ">
                        <div className=" px-[34px] py-[12px] text-black font-medium border-b border-gray-200 ">Finding Logs</div>
                        <div className=" bg-[#F1F2F5] p-[8px] h-full flex gap-[16px] flex-col ">
                            {findingLogs.map((log, index) => {
                                return (
                                    <div className=" flex flex-col px-[16px] py-[12px] bg-white rounded-[8px] flex gap-3  ">
                                        <div className=" flex justify-between w-full ">
                                            {log.severity === "Critical" && <span className=" px-[8px] py-[4px] text-sm rounded-full bg-red-500 inline-block mr-2 ">Critical</span>}
                                            {log.severity === "High" && <span className=" px-[8px] py-[4px] text-sm rounded-full bg-orange-500 inline-block mr-2 ">High</span>}
                                            {log.severity === "Medium" && <span className=" px-[8px] py-[4px] text-sm rounded-full bg-yellow-500 inline-block mr-2 ">Medium</span>}
                                            {log.severity === "Low" && <span className=" px-[8px] py-[4px] text-sm  rounded-full bg-green-500 inline-block mr-2 ">Low</span>}
                                            <span className=" text-gray-400 ">{log.timestamp}</span>
                                        </div>
                                        <p className=" text-black ">{log.title}</p>
                                        <p className=" text-teal-400 ">{log.endpoint}</p>
                                        <p className=" text-[12px] text-gray-400 ">{log.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scans;