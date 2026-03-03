export const ScanRow = ({ scan }) => {
  return (
    <div className=" grid grid-cols-6 text-black items-center ">
        <p>{scan.name}</p>
        <p>{scan.type}</p>
        {scan.status === "Completed" && <span className=" bg-green-100 px-[12px] py-[8px] rounded-[8px] w-min text-green-500 border border-green-200 ">Completed</span> }
        {scan.status === "Scheduled" && <span className=" bg-gray-100 px-[12px] py-[8px] rounded-[8px] w-min text-gray-500 border border-gray-200">Scheduled</span> }
        {scan.status === "Failed" && <span className=" bg-red-100 px-[12px] py-[8px] rounded-[8px] w-min text-red-500 border border-red-200">Failed</span> }
        <div className=" flex  items-center gap-2 ">
            <div className=" flex gap-2 w-[100px] items-center h-[8px] bg-gray-200 rounded-full ">
                <div style={{ width:scan.progress }} className={` h-full bg-teal-500 rounded-full `}></div>
            </div>
            <span>{scan.progress}</span>
        </div>
        <div className=" grid grid-cols-4 gap-2  text-white w-[150px] ">
            <span className=" w-[30px] h-[25px] text-[11px] px-[8px] py-[4px] flex justify-center items-center rounded-[8px] bg-red-500 ">{scan.vulnerabilities.critical}</span>
            <span className=" w-[30px] h-[25px] text-[11px] px-[8px] py-[4px] flex justify-center items-center rounded-[8px] bg-orange-500 ">{scan.vulnerabilities.high}</span>
            <span className=" w-[30px] h-[25px] text-[11px] px-[8px] py-[4px] flex justify-center items-center rounded-[8px] bg-yellow-500 ">{scan.vulnerabilities.medium}</span>
            <span className=" w-[30px] h-[25px] text-[11px] px-[8px] py-[4px] flex justify-center items-center rounded-[8px] bg-green-500 ">{scan.vulnerabilities.low}</span>
        </div>
        <div className=" text-gray-400 ">{scan.lastScan}</div>
    </div>
  )
}