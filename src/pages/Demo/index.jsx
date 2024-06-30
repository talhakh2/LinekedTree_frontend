import { Link } from "react-router-dom";

export default function BookADemo() {
    return (
        <div className="w-full flex justify-center mt-10">
            <div className="flex flex-col font-semibold bg-rose-700 rounded-3xl shadow-xl max-w-[400px] w-full">
                <div className="px-6 pt-6 text-lg leading-7 text-center text-black bg-white">
                    Book a demo
                </div>
                <div className="w-full bg-white min-h-[20px]" />
                <div className="flex flex-col px-6 w-full text-sm font-medium leading-5 text-black bg-white">
                    <div>Email*</div>
                    <input className="justify-center px-3.5 py-2.5 mt-3 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm outline-none" type="email" name="" id=""  placeholder="Enter your email" />

                    <div className="mt-4">Restaurant Name*</div>
                    <input className="justify-center px-3.5 py-2.5 mt-3 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm outline-none" type="text" name="" id=""  placeholder="Enter restaurant names" />

                    <div className="mt-4">Owner*</div>
                    <input className="justify-center px-3.5 py-2.5 mt-3 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm outline-none" type="text" name="" id=""  placeholder="Enter owner name" />
                    <div className="mt-5">Select Date*</div>
                    <input className="justify-center px-3.5 py-2.5 mt-3 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm outline-none" type="date" name="" id=""  />
                    <div className="mt-5">Select Time*</div>
                    <input className="justify-center px-3.5 py-2.5 mt-3 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm outline-none" type="time" name="" id=""  />
                    <div className="mt-5">Subject*</div>
                    <input className="justify-center px-3.5 py-2.5 mt-3 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm outline-none" type="text" name="" id=""  placeholder="Subject" />
                    <div className="flex gap-4 mt-7">
                        <input type="checkbox" className="my-auto mr-1" />
                        <div>Request a demo</div>
                    </div>
                </div>
                <div className="flex flex-col pt-8 w-full text-base leading-6 whitespace-nowrap bg-white">
                    <div className="flex flex-col px-6 pb-6 w-full">
                        <div className="justify-center items-center px-5 py-2.5 text-white bg-indigo-400 rounded-lg shadow-sm cursor-pointer">
                            Confirm
                        </div>
                        <Link to="/" className="justify-center items-center px-5 py-2.5 mt-3 text-black bg-white rounded-lg border border-gray-300 border-solid shadow-sm cursor-pointer">
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

