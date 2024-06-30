import React, { useState } from 'react'
import Hero from '../../components/Hero'

const Index = () => {
    const [open, setOpen] = useState(0);
    const data = [
        {
            question: 'What is EGO and how does it work?',
            answers: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor'
        },
        {
            question: 'Who can benefit from using EGO?',
            answers: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor'
        },
        {
            question: 'What are the subscription options available?',
            answers: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor'
        },
        {
            question: 'What kind of support is available for users?',
            answers: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor'
        },
        {
            question: 'Can I customize my restaurants online presence with EGO?',
            answers: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor'
        },
        {
            question: 'What are the payment options available?',
            answers: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor'
        }
    ]

    return (
        <div>
            <Hero Image="https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a5661b5941c5d5b93c08c93373d187d718bd3e7e37062a3a727b8a30e1bb108?apiKey=cf358c329e0d49a792d02d32277323ef&" heading="Frequently Asked Questions" para1="Your Answers Await: Explore Our" para2="FAQs for Clarity and Confidence" />

            <div>
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="grid grid-cols-2 max-md:ml-0 max-w-[1100px] mx-auto mt-10">
                        {
                            data.map((item, index) => (
                                <div className="flex flex-col px-8 pt-7 pb-10 bg-white rounded-2xl max-md:px-5 max-md:max-w-full shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] m-3">
                                    <div className="flex gap-5 text-2xl font-medium leading-7 text-indigo-950 max-md:flex-wrap max-md:max-w-full ">
                                        <div className="flex-auto my-auto">
                                            What is EGO and how does it work?
                                        </div>
                                        {
                                            index === open ? <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 rounded-lg aspect-[0.91] w-[42px] cursor-pointer"
                                                onClick={()=>{setOpen(index)}}
                                            /> : <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9c68f78790a475aa43ae8df4da8cbf82a52109d95070ad77097588d81cddf8e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 rounded-lg aspect-[0.91] w-[42px] cursor-pointer"
                                                onClick={()=>{setOpen(index)}}
                                            />
                                        }
                                    </div>
                                    {
                                        index === open && <div className="mt-3.5 text-lg leading-8 text-slate-500 max-md:max-w-full">
                                            Ut enim ad minim veniam quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat aute irure dolor
                                        </div>
                                    }
                                </div>
                            ))
                        }
                        {/* <div className="flex flex-col max-md:mt-6 mx-3 ">
                            <div className="flex flex-col px-8 pt-11 pb-20 bg-white rounded-2xl max-md:px-5 max-md:max-w-full shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                <div className="flex gap-5 text-2xl font-medium leading-7 text-indigo-950 max-md:flex-wrap max-md:max-w-full ">
                                    <div className="flex-auto my-auto">
                                        What is EGO and how does it work?
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf5c901f60bdd85a14efc2507e7ae9f100db1b45b8624ebbb209fd28082a13?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 rounded-lg aspect-[0.91] w-[42px]"
                                    />
                                </div>
                                <div className="mt-3.5 text-lg leading-8 text-slate-500 max-md:max-w-full">
                                    Ut enim ad minim veniam quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat aute irure dolor
                                </div>
                            </div>
                            <div className="flex gap-5 items-start px-8 py-10 mt-7 text-2xl font-medium leading-7 bg-white rounded-2xl shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] text-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="flex-auto mt-3">
                                    What are the subscription options available?
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/be634e22f30fba0447006dc55faebb79ef4525b2906751714f94eac8490e2015?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-[0.91] w-[42px]"
                                />
                            </div>
                            <div className="flex gap-5 items-start px-8 py-10 mt-7 text-2xl font-medium leading-7 bg-white rounded-2xl shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] text-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="flex-auto mt-2.5">
                                    Can I customize my restaurant's online presence with EGO?
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fc29f317916132a65402fb86c8c8f44c2da33dd346a806549bffd653fa06d2f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-[0.89] w-[41px]"
                                />
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-2xl font-medium leading-7 text-indigo-950 max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-5 px-8 py-11 bg-white rounded-2xl shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] leading-[127%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="flex-auto my-auto">
                                    Who can benefit from using EGO?
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1c8b9ba4e40c0021b90fa1cd328861aaff073ce44b5254b0b87f30619bd753?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-[0.89] w-[41px]"
                                />
                            </div>
                            <div className="flex gap-5 items-start px-8 py-10 mt-7 bg-white rounded-2xl shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="flex-auto mt-2.5">
                                    What kind of support is available for users?
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/152b72dc07a453f7ac1fb49102dfbad8a3c54ca60f72e7d199447e8cf99a8057?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-[0.89] w-[41px]"
                                />
                            </div>
                            <div className="flex gap-5 items-start px-8 py-10 mt-7 bg-white rounded-2xl shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="flex-auto mt-2.5">
                                    What are the payment options available?
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d27b7ce24684e8aeb5c5e4b696415b4876a7bd6a895c958059f028db277491f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-[0.89] w-[41px]"
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Index
