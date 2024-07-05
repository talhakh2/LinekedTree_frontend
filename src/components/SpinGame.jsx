import React, { useEffect, useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReviewModel from './ReviewModel';

const Picker = require('random-picker').Picker;

const SpinGame = () => {
    const { id } = useParams();
    const [gameFormat, setGameFormate] = useState([]);
    const [isSpined, setIsSpined] = useState(false);
    const [email, setEmail] = useState('');
    const Navigate = useNavigate();
    const [reviewModel, setReviewModel] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const [textColor, setTextColor] = useState('text-white')
    const [render, setRender] = useState(false)

    useEffect(() => {
        if (id) {
            try {
                axios.get(`${process.env.REACT_APP_BACKEND_PORT}/game/play?pageId=${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => {
                    setGameFormate(res.data);
                    setRender(true)
                });
            } catch (error) {
                console.log(error);
                console.error("Error fetching game format");
            }
        }
    }, [id]);


    useEffect(() => {
        if (gameFormat.buttonColor === '#E3F2FD')
            setTextColor('text-black')
        else
            setTextColor('text-white')
    }, [gameFormat.buttonColor])

    const spinedClick = (gameFormat) => {
        if (email) {
            axios.post(`${process.env.REACT_APP_BACKEND_PORT}/review/check`, { email })
                .then((res) => {
                    setIsSpined(true);
                    const wheel = document.querySelector('.wheel');
                    const picker = new Picker();
                    picker.option(0, gameFormat.options.option1frequency);
                    picker.option(45, gameFormat.options.option8frequency);
                    picker.option(90, gameFormat.options.option7frequency);
                    picker.option(135, gameFormat.options.option6frequency);
                    picker.option(180, gameFormat.options.option5frequency);
                    picker.option(225, gameFormat.options.option4frequency);
                    picker.option(270, gameFormat.options.option3frequency);
                    picker.option(315, gameFormat.options.option2frequency);
                    const selectedOption = picker.pick();
                    setSelectedIndex(selectedOption === 0 ? 1 : selectedOption === 45 ? 8 : selectedOption === 90 ? 7 : selectedOption === 90 ? 7 : selectedOption === 135 ? 6 : selectedOption === 180 ? 5 : selectedOption === 225 ? 4 : selectedOption === 270 ? 3 : 2);
                    wheel.style.transition = 'transform 5s ease-in-out';
                    wheel.style.transform = `rotate(${360 * 3 + selectedOption}deg)`;
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        } else {
            alert("Enter Email First to Spin")
        }
    };

    const sendEmail = () => {

        if (selectedIndex !== -1 && email) {
            try {
                axios.post(`${process.env.REACT_APP_BACKEND_PORT}/result`, {
                    email: email,
                    selectedGift: gameFormat.options[`option${selectedIndex}`],
                    message: gameFormat.content,
                    resturantName: gameFormat.resturantName,
                    resturantAddress: gameFormat.resturantAddress
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => {

                    alert(res.data.message);
                });
            } catch (error) {
                console.error("Error sending email")
            }
        }
    };

    const updateGame = (gameFormat1) => {
        const id = gameFormat1._id;
        axios.put(`${process.env.REACT_APP_BACKEND_PORT}/game/${id}`, { gameFormat: gameFormat1 }, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    return (
        <>
            {!render ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div className='flex justify-center mt-3'>
                        {
                            gameFormat.logo ? <img src={gameFormat.logo} alt="logo" className="shrink-0 rounded-full bg-zinc-300 h-[100px] w-[100px] max-md:mt-10" /> : <h1 className='font-bold font-sans text-2xl italic'>{gameFormat?.brandName}</h1>
                        }
                    </div>
                    <div className='flex flex-col md:flex-row max-w-[900px] justify-between mx-auto items-center mt-10'>
                    <div className="container mt-10 mr-10 mb-0 md:mb-0">

                            <div className="spinBtn" onClick={() => spinedClick(gameFormat)}></div>
                            <div className="wheel">
                                <div className="number" style={{ '--i': 1, '--clr': gameFormat?.wheelColorPair?.color1 ? gameFormat?.wheelColorPair?.color1 : '#8497FC' }}>
                                    <span className=' text-white'>{gameFormat?.options?.option1 || 'option 1'}</span>
                                </div>
                                <div className="number" style={{ '--i': 2, '--clr': gameFormat?.wheelColorPair?.color2 ? gameFormat?.wheelColorPair?.color2 : '#FDFDAF' }}>
                                    <span>{gameFormat?.options?.option2 || 'option 2'}</span>
                                </div>
                                <div className="number" style={{ '--i': 3, '--clr': gameFormat?.wheelColorPair?.color1 ? gameFormat?.wheelColorPair?.color1 : '#8497FC' }}>
                                    <span>{gameFormat?.options?.option3 || 'option 3'}</span>
                                </div>
                                <div className="number" style={{ '--i': 4, '--clr': gameFormat?.wheelColorPair?.color2 ? gameFormat?.wheelColorPair?.color2 : '#FDFDAF' }}>
                                    <span>{gameFormat?.options?.option4 || 'option 4'}</span>
                                </div>
                                <div className="number" style={{ '--i': 5, '--clr': gameFormat?.wheelColorPair?.color1 ? gameFormat?.wheelColorPair?.color1 : '#8497FC' }}>
                                    <span>{gameFormat?.options?.option5 || 'option 5'}</span>
                                </div>
                                <div className="number" style={{ '--i': 6, '--clr': gameFormat?.wheelColorPair?.color2 ? gameFormat?.wheelColorPair?.color2 : '#FDFDAF' }}>
                                    <span>{gameFormat?.options?.option6 || 'option 6'}</span>
                                </div>
                                <div className="number" style={{ '--i': 7, '--clr': gameFormat?.wheelColorPair?.color1 ? gameFormat?.wheelColorPair?.color1 : '#8497FC' }}>
                                    <span>{gameFormat?.options?.option7 || 'option 7'}</span>
                                </div>
                                <div className="number" style={{ '--i': 8, '--clr': gameFormat?.wheelColorPair?.color2 ? gameFormat?.wheelColorPair?.color2 : '#FDFDAF' }}>
                                    <span>{gameFormat?.options?.option8 || 'option 8'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col font-medium text-black leading-[140%] max-w-[454px]">
                            <div className="w-full text-3xl font-bold text-center">
                                Try Your Luck for a Reward!
                            </div>
                            <div className="mt-8 w-full text-xl text-center">
                                Get Spinning: Drop Your Email!
                            </div>
                            <div className="mt-8 w-full text-sm leading-5">Email</div>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' className="justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400" value={email} />
                            <div onClick={() => {
                                if (email && reviewModel) {
                                    console.log("mail");
                                    sendEmail();
                                } else {
                                    if (isSpined) {
                                        setReviewModel(true)
                                    } else {
                                        alert("Spin the wheel to confirm")
                                    }
                                }
                            }} className={`justify-center cursor-pointer items-center px-3 py-2.5 mt-8 w-full text-base font-semibold leading-6 ${textColor} whitespace-nowrap text-center rounded-lg shadow-sm`}
                                style={{ backgroundColor: gameFormat?.buttonColor ? gameFormat?.buttonColor : '#4F46E5' }}>
                                Confirm
                            </div>
                            <div className="mt-8 w-full text-xl text-center">
                                Note: One Spin per Participant Only
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center mt-32">
                        <a onClick={() => {
                            const data = { ...gameFormat, instagramClicks: gameFormat.instagramClicks + 1 };
                            updateGame(data)
                        }} href={gameFormat?.instagram} target="_blank"><img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/357f101341ddf98f66af8d3f23083bbaca5abcfd9acc131ab16b4f86548f66e9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[25px]"
                            /></a>
                        <a onClick={() => {
                            const data = { ...gameFormat, facebookClicks: gameFormat.facebookClicks + 1 };
                            updateGame(data)
                        }} href={gameFormat?.facebook} target="_blank"><img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7478fb7f2a263892712e4aa14999672df84ec24dda36a9b73c6b87ab35cfa?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[25px]"
                            /></a>
                        <a onClick={() => {
                            const data = { ...gameFormat, twitterClicks: gameFormat.twitterClicks + 1 };
                            updateGame(data)
                        }} href={gameFormat?.twitter} target="_blank"><img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/981bbe54100ad5fb3359a76a6d80f34022804d47da69407e294c32b6b305e5f3?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[25px]"
                            /></a>
                        <a onClick={() => {
                            const data = { ...gameFormat, googleMapsClicks: gameFormat.googleMapsClicks + 1 };
                            updateGame(data)
                        }} href={gameFormat?.googleMaps} target="_blank"><img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad647feebebd6e3ac712531bcfe244603e99a1e02f585c4702345d935b2f1dd6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[25px]"
                            /></a>
                    </div>
                    <div className="flex justify-center mt-5 text-sm text-slate-800">
                        © 2024 Company name . All rights reserved.
                    </div>
                    <ReviewModel open={reviewModel} setOpen={setReviewModel} gameFormat={gameFormat} sendEmail={sendEmail} />
                </div>
            )}
        </>
    );
};

export default SpinGame;
