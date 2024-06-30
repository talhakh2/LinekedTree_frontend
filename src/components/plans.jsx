import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function PricingPlan() {
    const Navigate = useNavigate();
    return (
        <div className="max-w-[876px] mt-10 mx-auto">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 mx-auto">
                <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full mx-auto" style={{boxShadow: '0px 4px 13px 0px #00000099', borderRadius: "20px"}}>
                    <div className="flex flex-col grow px-6 pt-12 pb-6 w-full text-3xl font-bold bg-white rounded-3xl shadow-sm text-gray-950 max-md:px-5 max-md:mt-10">
                        <div className="self-center text-center">Monthly Plan</div>
                        <div className="flex flex-col mx-4 mt-9 text-lg text-black max-md:mx-2.5">
                            <div className="text-2xl text-neutral-400">What You’ll Get</div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b10c657ed950499012f5a3695971d358963b11e5373fb5f9427dd1b936135e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Monitoring and Support</div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Access to Application </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Data</span>{" "}
                                    <span className="">gathering</span>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Dashboard</span>{" "}
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b7222b04389a5335095a5d90b72a8c7e06d9a1b0ac97ba52e5a3a0081259055?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>10 landing pages per account</div>
                            </div>
                        </div>
                        <div className="shrink-0 mx-4 mt-10 w-80 max-w-full h-px border border-dashed bg-neutral-400 border-neutral-400 max-md:mx-2.5" />
                        <div className="self-center mt-12 leading-10 text-center max-md:mt-10">
                            <span className="">$97</span>
                            <span className="text-lg  text-gray-950">/month</span>
                        </div>
                        <button onClick={()=>{Navigate('/login?payment=Monthly')}} className="justify-center cursor-pointer items-center px-16 py-2 mt-10 text-2xl font-semibold leading-10 text-center text-white bg-indigo-400 rounded-xl max-md:px-5 max-md:mt-10">
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full mx-auto" style={{boxShadow: '0px 4px 13px 0px #00000099', borderRadius: "20px"}}>
                    <div className="flex flex-col grow px-6 pt-12 pb-6 w-full text-3xl font-bold bg-white rounded-3xl shadow-sm text-gray-950 max-md:px-5 max-md:mt-10">
                        <div className="self-center text-center">Yearly Plan</div>
                        <div className="flex flex-col mx-4 mt-9 text-lg text-black max-md:mx-2.5">
                            <div className="text-2xl text-neutral-400">What You’ll Get</div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b10c657ed950499012f5a3695971d358963b11e5373fb5f9427dd1b936135e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Monitoring and Support</div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Access to Application </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Data</span>{" "}
                                    <span className="">gathering</span>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Dashboard</span>{" "}
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b7222b04389a5335095a5d90b72a8c7e06d9a1b0ac97ba52e5a3a0081259055?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>12 months</div>
                            </div>
                        </div>
                        <div className="mt-7"></div>
                        <div className="shrink-0 mx-4 mt-10 w-80 max-w-full h-px border border-dashed bg-neutral-400 border-neutral-400 max-md:mx-2.5" />
                        <div className="self-center mt-12 leading-10 text-center max-md:mt-10">
                            <span className="">$970</span>
                            <span className="text-lg  text-gray-950">/year</span>
                        </div>
                        <button onClick={()=>{Navigate('/login?payment=Yearly')}} className="cursor-pointer justify-center items-center px-16 py-2 mt-10 text-2xl font-semibold leading-10 text-center text-white bg-indigo-400 rounded-xl max-md:px-5 max-md:mt-10">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

