import * as React from "react";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VerifyEmailPopup from "../VerifyEmailPopup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/features/AuthenticationSlice";

export default function Login() {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const [searchParams] = useSearchParams();
    const paymentType = searchParams.get('payment');

    const handleSubmit = async () => {
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/auth?email=${userData.email}&password=${userData.password}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(async (res) => {
                if(!res.data.isVerified){
                    setOpen(true);
                }
                if(!res.data.payment && !res.data.isTrial){
                    if(!paymentType){
                        Navigate('/pricing')
                    }else{
                        if(paymentType.toLowerCase() === 'monthly'){
                            await axios.get(`${process.env.REACT_APP_BACKEND_PORT}/checkout/monthly?userId=${res.data.userId}`).then((res) => {
                                window.open(res.data.session.url)
                            })
                        }else{
                            await axios.get(`${process.env.REACT_APP_BACKEND_PORT}/checkout/yearly?userId=${res.data.userId}`).then((res) => {
                                window.open(res.data.session.url)
                            })
                        }
                    }
                }else{
                    dispatch(registerUser({
                        userId: res.data.userId,
                        name: res.data.name,
                        jwtToken: res.data.token,
                        ownerId: res.data.ownerId,
                        accountType: res.data.accountType,
                        isAdmin: res.data.name === 'Admin' ? true : false
                    }))
                    if(res.data.name === 'Admin'){
                        Navigate('/admin/dashboard')
                    }else{
                        Navigate('/dashboard')
                    }
                }
            }).catch((err) => {
                console.error(err)
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
                                Sign in to your account
                            </div>
                            <div className="mt-1 text-sm leading-5 text-slate-600">
                                Welcome back! Please enter your details.
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white min-h-[20px]" />
                </div>
                <div className="flex flex-col justify-center px-6 w-full">
                    <div className="flex flex-col rounded-xl">
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center mt-4">
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium leading-5 text-black">
                                        Email*
                                    </div>
                                    <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="email" placeholder="Enter your email" ref={emailRef} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mt-4 whitespace-nowrap">
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium leading-5 text-black">
                                        Password
                                    </div>
                                    <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="password" placeholder="••••••••" ref={passwordRef} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-0 pr-2 mt-2 text-sm leading-5 justify-between items-center text-gray-600" >
                            <p>Must be at least 8 characters.</p>
                        </div>
                    </div>
                    <div className="flex gap-0 pr-2 mt-5 text-sm leading-5 justify-between items-center">
                        <div className="flex gap-1 py-0.5 font-medium text-black">
                            <input type="checkbox" className="flex-auto my-auto mr-1" />
                            <div className="flex-auto my-auto">Remember me</div>
                        </div>
                        <div className="justify-end font-semibold text-indigo-400">
                            Forgot password?
                        </div>
                    </div>
                    <div className="flex gap-0 pr-2 mt-6 text-sm leading-5 justify-between items-center text-gray-600" >
                        <p>Not have an account <span className="text-blue-500 cursor-pointer" onClick={() => { Navigate('/register') }}>Register Now</span>.</p>
                    </div>
                </div>
                <div className="flex flex-col pt-8 w-full text-base font-semibold leading-6 whitespace-nowrap">
                    <div className="flex flex-col px-6 pb-6 w-full bg-white">
                        <button onClick={handleSubmit} className="justify-center text-center items-center px-5 py-2.5 text-white bg-indigo-400 rounded-lg shadow-sm cursor-pointer">
                            Confirm
                        </button>
                        <div onClick={()=>{Navigate('/')}} className="justify-center text-center items-center px-5 py-2.5 mt-3 text-black bg-white rounded-lg cursor-pointer border border-gray-300 border-solid shadow-sm">
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
            <VerifyEmailPopup open={open} setOpen={setOpen} email={emailRef?.current?.value}/>
        </div>
    );
}

