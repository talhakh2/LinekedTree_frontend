import * as React from "react";
import Bubble from '../assets/bubble.png'

export default function Steps() {
    const Data = [
        {
            step: '01',
            title: 'The customer scans the QR code provided on the flyer',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '02',
            title: 'Upon scanning, the customer is redirected to the game',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '03',
            title: 'To access the game, customers are required to leave a Google review and subscribe to our social media platforms',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '04',
            title: 'Participants will spin the fortune wheel to claim their prize (limited to one spin per participant)',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '05',
            title: 'Upon winning, the customer will be sent an email notification',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329*e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
    ]
    return (
        <div>
            <div className="justify-center px-5 w-full max-md:max-w-full">
                <div className="flex gap-10 flex-wrap max-md:flex-col justify-center items-center md:items-start max-md:gap-0 max-w-[1100px] mx-auto">
                    {
                        Data.map((Item) => (
                            <div className="flex flex-col flex-wrap max-w-[270px] md:mx-7 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col pb-5 text-2xl text-center text-black max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet={Item.image}
                                        className="self-center max-w-full aspect-square w-[150px]"
                                    />
                                    <div className="flex flex-col mt-8">
                                        <div className="font-semibold leading-2 mt-1">Step {Item.step} </div>
                                        <div className="font-normal leading-9 mt-2 w-[100%]">
                                            {Item.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-14 bg-[linear-gradient(90deg,#8497FC_0%,#4F5A96_100%)] max-md:px-5 mt-10 overflow-hidden">
                <div className="flex justify-center items-center px-16 w-full max-w-[1069px] max-md:px-5 max-md:max-w-full">
                    <div className="flex relative flex-col items-center max-w-full w-[849px]">
                        <div className="text-4xl font-bold text-center text-white max-md:max-w-full">
                            Here is what our Clients are saying About us
                        </div>
                        <img style={{zIndex: 1}} className="absolute h-[400px] top-[20%] hidden md:block right-[-30%]" src={Bubble} alt=""/>
                        <div style={{zIndex: 10}} className="justify-center self-stretch px-10 py-12 mt-24 bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b762813b2e45e39676cc331af813d2b65ecfa12b28720b69721ac4bf9803e11d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 mt-3 mx-auto max-w-full rounded-full aspect-square w-[181px] max-md:mt-10"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow text-neutral-700 max-md:mt-10 max-md:max-w-full">
                                        <div className="text-2xl font-bold text-center max-md:max-w-full">
                                            Hannah Schmitt
                                        </div>
                                        <div className="mt-5 text-lg max-md:max-w-full">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cursus nibh mauris, nec turpis orci lectus maecenas.
                                            Suspendisse sed magna eget nibh in turpis. Consequat duis
                                            diam lacus arcu. Faucibus venenatis felis id augue sit
                                            cursus pellentesque enim Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Cursus nibh mauris, nec turpis
                                            orci lectus maecenas. Suspendisse{" "}
                                        </div>
                                        <div className="mt-5 text-xs text-center text-neutral-600 max-md:max-w-full">
                                            May 8, 2020
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-11 max-w-full w-[466px] max-md:flex-wrap max-md:mt-10 relative">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41606841d6bd09a441d9fe08154e70623b248c165f66f36438abab63e6b8a081?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[58px]"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e65f8414a85d97b55d5c456f8be7d59accfc2cee1ae61cb5755fbb7318500ad0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="my-auto w-56 aspect-[14.29]"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7420a840b6ac2c00d8ef24bb09c9e81187c97b3e67032e1cc8c7db81c52e82f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[58px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

