const SignUP = () => {
    return (
        <div className="min-h-screen w-full bg-[#0B0F19] relative overflow-hidden">
            <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-orange-500 rounded-full blur-[180px] opacity-70" />

            <div className="absolute top-[-200px] right-[20%] w-[600px] h-[600px] bg-teal-500 rounded-full blur-[200px] opacity-60" />

            <div className="absolute top-[20%] left-[30%] w-[700px] h-[700px] bg-emerald-500 rounded-full blur-[220px] opacity-40" />

            <div className=" relative z-10 flex items-center justify-center h-full">
                <div className=" w-1/2 min-h-screen h-full px-20 py-10  ">
                    <div className=" h-[80vh]  flex justify-between flex-col ">
                        <div className=" flex gap-4 items-center ">
                            <div className=" w-[40px] h-[40px] rounded-full bg-teal-500 flex justify-center items-center ">
                                <div className=" w-[15px] h-[15px] bg-white rounded-full "></div>
                            </div>
                            <p className=" font-semibold text-3xl ">aps</p>
                        </div>
                        <div className=" flex flex-col justify-center px-20">
                            <h1 className="text-5xl font-semibold leading-tight mb-6">
                                Expert level Cybersecurity <br />
                                in <span className="text-teal-400">hours</span> not weeks.
                            </h1>

                            <div className="space-y-4 text-white max-w-[600px] ">
                                <p className=" text-2xl ">What's included</p>
                                <div className=" flex flex-col gap-[24px] ">
                                    <div className=" flex items-start gap-4 ">
                                        <i className="fa-solid fa-check text-green-700 "></i>
                                        <p className=" text-xl ">Effortlessly spider and map targets to uncover hidden security flaws.</p>
                                    </div>
                                    <div className=" flex items-center gap-4 ">
                                        <i className="fa-solid fa-check text-green-700 "></i>
                                        <p className=" text-xl ">Deliver high-quality, validated findings in hours, not weeks.</p>

                                    </div>
                                    <div className=" flex items-center gap-4 ">
                                        <i className="fa-solid fa-check text-green-700 "></i>
                                        <p className=" text-xl ">Generate professional enterprise-grade security reports automatically.</p></div>
                                </div>
                                <div>

                                </div>
                            </div>

                            <div className="mt-10 text-sm text-white flex flex-col gap-[16px] ">
                                <div className=" flex gap-2 items-center ">
                                    <i class="fa fa-star text-green-700" aria-hidden="true"></i>
                                    <p>Trustpilot</p>
                                </div>
                                <div>
                                    <p className=" text-xl ">Rated 4.5/5.0 <span>(100k+ reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-1/2 min-h-screen flex justify-center items-center ">
                    <div className=" h-[700px] w-[500px] bg-white rounded-2xl flex flex-col gap-[16px] justify-center items-center px-[40px] py-[24px] ">
                        <p className=" text-3xl text-black font-semibold ">Sign UP</p>
                        <p className=" text-xl text-black ">Already have an account? <span className=" text-teal-600 underline ">Log in</span></p>
                        <input type="text" placeholder="Full Name*" className=" px-[24px] py-[16px] rounded-[8px] border border-gray-300 placeholder:text-gray-300 w-full "/>
                        <input type="text" placeholder="Last Name*" className=" px-[24px] py-[16px] rounded-[8px] border border-gray-300 placeholder:text-gray-300 w-full "/>
                        <input type="mail" placeholder="Email Address*" className=" px-[24px] py-[16px] rounded-[8px] border border-gray-300 placeholder:text-gray-300 w-full "/>
                        <input type="password" placeholder="Password*" className=" px-[24px] py-[16px] rounded-[8px] border border-gray-300 placeholder:text-gray-300 w-full "/>
                        <div className=" flex items-start gap-4 ">
                            <input type="checkbox" className=" mt-1.5 cursor-pointer "/>
                            <p className=" text-black  ">I agree to Apsˇs <span className=" cursor-pointer text-blue-500 underline ">Terms & Conditions</span> and acknowledge the <span className=" cursor-pointer text-blue-500 underline ">Privacy Policy</span></p>
                        </div>
                        <div className=" w-full flex flex-col gap-[16px] ">
                            <button className=" cursor-pointer w-full bg-teal-500 text-white py-[8px] rounded-[100px] font-medium text-xl ">Create Account</button>   
                            <div className=" flex gap-[12px] ">
                                <button className=" cursor-pointer w-full  bg-black text-white py-[8px] rounded-[100px] font-medium text-xl "><i className="fab fa-apple"></i></button>   
                                <button className=" cursor-pointer w-full  bg-mauve-300 text-white py-[8px] rounded-[100px] font-medium text-xl "><i className="fab fa-google"></i></button>   
                                <button className=" cursor-pointer w-full  bg-blue-600 text-white py-[8px] rounded-[100px] font-medium text-xl "><i className="fab fa-linkedin"></i></button>   
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUP;
