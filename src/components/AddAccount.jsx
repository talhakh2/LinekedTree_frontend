import React, { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

export default function AddAcccountModel({ open, setOpen }) {
    const theme = useTheme();
    const userId = useSelector(state => state.authentication.userId);
    const handleClose = () => {
        setOpen(false);
    };
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const registerUser = async () => {
        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            ownerId: userId,
        };
        try {
            axios.post(`${process.env.REACT_APP_BACKEND_PORT}/sub/auth`, userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(() => {
                alert('account created')
                setOpen(false)
            })
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const customTheme = createTheme({
        breakpoints: {
            values: {
                xs: theme.breakpoints.values.xs,
                sm: 600, // Adjust breakpoint for 'sm' size (optional)
                md: theme.breakpoints.values.md,
                lg: theme.breakpoints.values.lg,
                xl: theme.breakpoints.values.xl,
            },
        },
    });

    return (
        <ThemeProvider theme={customTheme}>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                width="sm"
                fullWidth
            // className='rounded-lg shadow-xl'
            >
                <DialogContent>
                    <div className="flex w-full flex-col items-center px-7 pt-1 pb-4 text-center bg-white" style={{ borderRadius: "40px" }}>
                        <h1 className='text-md font-semibold mb-2'>Add a new Account</h1>
                        <div className="flex w-full self-stretch p-1 mt-2.5 text-base leading-5 text-black">
                            <div className="flex w-full flex-col rounded-xl">
                                <div className="flex flex-col">
                                    <div className="flex flex-col">
                                        <div className="flex flex-col">
                                            <div className="text-sm font-medium leading-5 text-black text-start">
                                                Name
                                            </div>
                                            <input ref={nameRef} className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="text" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex flex-col mt-4">
                                            <div className="text-sm font-medium leading-5 text-black text-start">
                                                Email
                                            </div>
                                            <input ref={emailRef} className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="email" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center mt-4 whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <div className="text-sm font-medium leading-5 text-black text-start">
                                                Password
                                            </div>
                                            <input ref={passwordRef} className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="password" placeholder="••••••••" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-8 w-full text-base font-semibold leading-6 whitespace-nowrap">
                            <div className="flex flex-col px-6 pb-6 w-full bg-white">
                                <div onClick={registerUser} className="cursor-pointer justify-center text-center items-center px-5 py-2.5 text-white bg-indigo-400 rounded-lg shadow-sm">
                                    Confirm
                                </div>
                                <div onClick={()=> {setOpen(false)}} className="justify-center text-center items-center px-5 py-2.5 mt-3 text-black bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </ThemeProvider >
    );
}