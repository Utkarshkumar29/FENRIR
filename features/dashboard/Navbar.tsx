const Navbar=()=>{
    return(
        <nav className=" h-[60px] flex items-center px-6 bg-white border-b px-[32px] justify-between ">
            <div className=" text-md flex gap-4 ">
                <p className=" flex gap-2 items-center text-black "><span>Scan</span><i className="fa fa-home text-[12px] "></i></p>
                <p className=" text-gray-400 ">/ Private Assets /</p>
                <p className=" text-teal-500 "> New Scan</p>
            </div>
            <div className=" flex gap-4 ">
                <button className=" text-black border border-gray-300 px-[16px] py-[8px] rounded-[8px] ">Export Report</button>
                <button className=" text-red-600 border border-red-200 bg-red-50 px-[16px] py-[8px] rounded-[8px] ">Stop Scan</button>
            </div>
        </nav>
    )
}

export default Navbar