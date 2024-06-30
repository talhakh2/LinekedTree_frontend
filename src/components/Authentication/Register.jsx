import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import VerifyEmailPopup from "../VerifyEmailPopup";

export default function Register() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const Navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [isTrial, setIsTrial] = React.useState(false);

    const registerUser = async () => {
        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            isTrial: isTrial
        };
        try {
            axios.post(`${process.env.REACT_APP_BACKEND_PORT}/auth`, userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(()=>{
                setOpen(true);
            })
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <div className="h-full flex justify-center items-center mt-10">
            <div className="flex flex-col bg-white rounded-3xl shadow-xl max-w-[400px] w-full">
                <div className="flex flex-col w-full text-center bg-white">
                    <div className="flex flex-col px-6 pt-6 w-full bg-white">
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold leading-7 text-gray-900">
                                Sign up to create an account
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white min-h-[20px]" />
                </div>
                <div className="flex flex-col justify-center px-6 w-full">
                    <div className="flex flex-col rounded-xl">
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium leading-5 text-black">
                                        Name
                                    </div>
                                    <input ref={nameRef} className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="text" placeholder="Enter your name" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col mt-4">
                                    <div className="text-sm font-medium leading-5 text-black">
                                        Email
                                    </div>
                                    <input ref={emailRef} className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mt-4 whitespace-nowrap">
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium leading-5 text-black">
                                        Password
                                    </div>
                                    <input ref={passwordRef} className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="password" placeholder="••••••••" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className="text-sm font-medium leading-5 text-black mt-4">Registering for Trial or Pay First</label>
                    <div className="flex mt-2">
                        <div onClick={()=>{setIsTrial(false)}} className="mr-7 flex items-center">
                            <input type='radio' id="pay" name="paymentType"/>
                            <label htmlFor="pay" className="text-sm font-medium leading-5 text-black ml-2">Pay First</label>
                        </div>
                        <div onClick={()=>{setIsTrial(true)}} className="flex items-center">
                            <input type='radio' id="trial" name="paymentType" />
                            <label htmlFor="trial" className="text-sm font-medium leading-5 text-black ml-2">Trial</label>
                        </div>
                    </div>
                    <div className="flex gap-0 pr-2 mt-6 text-sm leading-5 justify-between items-center text-gray-600" >
                        <p>Already have an account <span className="text-blue-500 cursor-pointer" onClick={() => { Navigate('/login') }}>Login Now</span>.</p>
                    </div>
                </div>
                <div className="flex flex-col pt-8 w-full text-base font-semibold leading-6 whitespace-nowrap">
                    <div className="flex flex-col px-6 pb-6 w-full bg-white">
                        <div onClick={registerUser} className="cursor-pointer justify-center text-center items-center px-5 py-2.5 text-white bg-indigo-400 rounded-lg shadow-sm">
                            Confirm
                        </div>
                        <div className="justify-center text-center items-center px-5 py-2.5 mt-3 text-black bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
            <VerifyEmailPopup open={open} setOpen={setOpen} email={emailRef?.current?.value}/>
        </div>
    );
}
