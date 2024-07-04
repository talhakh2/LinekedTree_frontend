import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/features/AuthenticationSlice';

const AsideHeader = () => {
    const Location = useLocation();
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
        Navigate('/login')
    }

    const isAdmin = useSelector(state => state.authentication.isAdmin);
    const accountType = useSelector(state => state.authentication.accountType);

    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <Menu className='md:hidden m-2' onClick={() => setOpen(!open)} />
            <div style={{ zIndex: 10 }} className={`flex flex-col mr-10 leading-[100%] w-[300px] md:relative top-0 left-0 ${open ? 'fixed md:relative' : 'hidden md:block'}`}>
                <div className="flex flex-col px-5 pt-5 pb-20 w-full bg-gray-100">
                    <div className='flex justify-between items-center'>
                        <div className="flex gap-2 self-start ml-5 text-xs font-bold whitespace-nowrap">
                            <div className="flex justify-center items- w-6 py-1 text-white rounded-full bg-[linear-gradient(90deg,#F6F7FC_0%,#4F5A96_100%)]">
                                E
                            </div>
                            <div className="my-auto tracking-wide bg-clip-text bg-[linear-gradient(90deg,#F6F7FC_0%,#4F5A96_100%)]">
                                EGO
                            </div>
                        </div>
                        <X onClick={() => setOpen(!open)} className='md:hidden'/>
                    </div>
                    <div className="flex flex-col justify-center mt-12">
                        <div className="justify-center p-2.5 text-xs tracking-wider whitespace-nowrap text-teal-950">
                            MENU
                        </div>
                        <div className="flex flex-col mt-2.5 ml-3 text-xs tracking-wide text-slate-800">
                            {
                                !isAdmin && <>
                                    <div onClick={() => { Navigate('/dashboard') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/dashboard' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83bf9071f71546dfc5b8154f9dafac814829352ac2910b0ca1f7089e28c2a851?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[18px]"
                                        />
                                        <div className="my-auto">Dashboard</div>
                                    </div>
                                    {
                                        accountType === 'main' && <div onClick={() => { Navigate('/accounts') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/accounts' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b017c6aca6b5480099eb7c245d9d9b5d6b002f158d1c92cff798a8725015ad0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 aspect-square w-[18px]"
                                            />
                                            <div className="my-auto">Account Management</div>
                                        </div>
                                    }
                                    {
                                        accountType === 'main' && <div onClick={() => { Navigate('/game') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/game' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e5b60070049e5d2d007c6439222d7b9c7350335eaf8564e414d56c4facca8e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 aspect-square w-[18px]"
                                            />
                                            <div className="flex-auto my-auto">Game Management</div>
                                        </div>
                                    }
                                    <div onClick={() => { Navigate('/landing-pages') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/landing-pages' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e5b60070049e5d2d007c6439222d7b9c7350335eaf8564e414d56c4facca8e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[18px]"
                                        />
                                        <div className="flex-auto my-auto">Landing Pages</div>
                                    </div>
                                    {
                                        accountType === 'main' && <div className="flex gap-3 p-2.5 mt-3.5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfe905d3fddf8af89b233e4ae1f7f3edf0f522538d19de6bffa145b688697ee2?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 aspect-square w-[18px]"
                                            />
                                            <div className="my-auto">Flyer Customization</div>
                                        </div>
                                    }
                                    {
                                        accountType === 'main' && <div onClick={() => { Navigate('/reviews') }} className={`flex gap-3 p-2.5 cursor-pointer mt-3.5 ${Location.pathname === '/reviews' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d20cffe5d2d85d40bbd4885090ef46de93a89d1ba8a5332cdd99874ab3f44be9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 aspect-square w-[18px]"
                                            />
                                            <div className="my-auto">Customer Reviews</div>
                                        </div>
                                    }
                                </>
                            }

                            {
                                isAdmin && <>
                                    <div onClick={() => { Navigate('/admin/dashboard') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/admin/dashboard' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83bf9071f71546dfc5b8154f9dafac814829352ac2910b0ca1f7089e28c2a851?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[18px]"
                                        />
                                        <div className="my-auto">Dashboard</div>
                                    </div>
                                    <div onClick={() => { Navigate('/user-management') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/user-management' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f263971a40afd4316e3583297949cb8c04fec8a4a90d6a3ee175bf8dcea7cd56?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[18px]"
                                        />
                                        <div className="my-auto">User Management</div>
                                    </div>
                                    <div onClick={() => { Navigate('/subscription') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/subscription' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fedb3eb9f42b1aa7e1799b755edfbce7a8fba5a9e2f4cede826619c6d84b2589?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[18px]"
                                        />
                                        <div className="my-auto">Subscription</div>
                                    </div>
                                    <div onClick={() => { Navigate('/trial-management') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/trial-management' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fedb3eb9f42b1aa7e1799b755edfbce7a8fba5a9e2f4cede826619c6d84b2589?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[18px]"
                                        />
                                        <div className="my-auto">Trial Management</div>
                                    </div>
                                    {/* <div onClick={() => { Navigate('/user-management') }} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname === '/user-management' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f263971a40afd4316e3583297949cb8c04fec8a4a90d6a3ee175bf8dcea7cd56?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[18px]"
                                    />
                                    <div className="my-auto">User Management</div>
                                </div> */}
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col mt-3.5 mb-60 text-xs tracking-wide text-slate-800">
                        <div className="justify-center p-2.5 text-xs tracking-wider whitespace-nowrap text-teal-950">
                            OTHERS
                        </div>
                        <div className="flex flex-col mt-2.5 ml-3">
                            {
                                accountType === 'main' && <div onClick={() => {
                                    if (isAdmin) Navigate('/admin/settings')
                                    else Navigate('/settings')
                                }} className={`flex gap-3 p-2.5 cursor-pointer mt-3.5 ${Location.pathname === '/settings' || Location.pathname === '/admin/settings' && 'bg-[#8497FC] bg-opacity-25'}`}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eb21f38b279ed6c9265babf52586876a1bd635c06970b30dc5bb859ad1222bc?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[18px]"
                                    />
                                    <div className="my-auto">Settings</div>
                                </div>
                            }
                            {
                                accountType === 'main' && <div onClick={() => {
                                    if (isAdmin) {
                                        Navigate('/all/pages')
                                    } else {
                                        Navigate('/history')
                                    }
                                }} className={`flex gap-3 p-2.5 cursor-pointer mt-3.5 ${(Location.pathname === '/history' || Location.pathname === '/all/pages') && 'bg-[#8497FC] bg-opacity-25'}`}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18169ef36f571eb46211b765f3f3e4e2f435ec3daf87ae648872bd24ba147897?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[18px]"
                                    />
                                    <div className="my-auto">{isAdmin ? 'Analytics' : 'Payment History'}</div>
                                </div>
                            }
                        </div>
                        <button onClick={logout} className="flex gap-3 p-2.5 mt-2.5 ml-3 whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a34cdd663df3ea160a5e3efb6d2b67c3621b6cb392ffec29be33774096da946f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">Logout</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideHeader
