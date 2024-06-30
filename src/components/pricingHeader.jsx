import * as React from "react";
import women from '../assets/women.png'

export default function PricingHeader() {
    return (
        <div className="flex justify-center items-center self-stretch px-16 py-14 mt-5 w-full bg-[linear-gradient(90deg,#F6F7FC_0%,#4F5A96_30%)]  max-md:px-5 max-md:max-w-full">
            <div className="w-full max-w-[1060px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full relative">
                        <img
                            loading="lazy"
                            src={women}
                            alt=""
                            style={{zIndex: 10}}
                            className="max-w-[380px] h-auto aspect-square max-md:mt-10 max-md:max-w-full"
                            />
                        <img
                            style={{zIndex: 1}}
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9140dc000217fca1b41cba0834bdae83c473b09d1b9a987d32d64140fe94d070?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="w-full aspect-[2.13] max-w-[891px] absolute top-[30px]"
                        />

                    </div>
                    <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                            <div className="text-3xl font-bold leading-2 max-md:max-w-full max-md:text-4xl mb-4">
                                Subscription Options
                            </div>
                            <div className="mt-3.5 text-lg font-medium leading-2 max-md:max-w-full">
                                Explore Flexible Monthly and Yearly Plans Tailored to Your Needs              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

