import * as React from "react";
import AsideHeader from "../components/AsideHeader";

export default function AdminSettings() {
    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950 mb-5">
                        Landing Pages
                    </div>
                </div>
                <div className="flex flex-col p-5 text-xl font-semibold text-black bg-white rounded-3xl max-w-[900px] shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className="text-2xl max-md:max-w-full">Notifications</div>
                    <div className="mt-6 max-md:max-w-full">Email Notification</div>
                    <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                        <p className="text-start font-normal text-md">Receive Updates via Email</p>
                        <input type="checkbox" name="" id="" value="" className="w-[20px]" defaultChecked/>
                    </div>
                    <div className="mt-6 max-md:max-w-full">Customer Reviews Alert</div>
                    <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                        <p className="text-start font-normal text-md">Receive alerts when customer give a review</p>
                        <input type="checkbox" name="" id="" value="" className="w-[20px]" defaultChecked/>
                    </div>
                    <div className="mt-6 max-md:max-w-full">Trial Requests</div>
                    <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                        <p className="text-start font-normal text-md">Receive trial requests when the user makes a request</p>
                        <input type="checkbox" name="" id="" value="" className="w-[20px]" defaultChecked/>
                    </div>
                    <div className="mt-6 max-md:max-w-full">Payment Notification</div>
                    <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                        <p className="text-start font-normal text-md">Receive notification when user make a subscription</p>
                        <input type="checkbox" name="" id="" value="" className="w-[20px]" defaultChecked/>
                    </div>
                </div>
            </div>
        </div>
    );
}

