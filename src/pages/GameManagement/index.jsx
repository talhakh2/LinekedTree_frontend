import { useEffect, useState } from "react";
import AsideHeader from "../../components/AsideHeader";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function GameManagement() {
    const [selectedRow, setSelectedRow] = useState(1);
    const { id } = useParams();

    const temp = {
        value: ''
    };

    const Navigate = useNavigate();
    const userId = useSelector(state => state.authentication.userId);
    const [data, setData] = useState(new Array(8).fill(temp))
    const [uploadLogo, setUploadLogo] = useState(true);
    const [total, setTotal] = useState(100);
    const [gameFormat, setGameFormate] = useState({
        ownerId: userId,
        brandName: '',
        resturantName: '',
        resturantAddress: '',
        logo: '',
        options: {
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            option5: '',
            option6: '',
            option7: '',
            option8: '',
            option1frequency: '',
            option2frequency: '',
            option3frequency: '',
            option4frequency: '',
            option5frequency: '',
            option6frequency: '',
            option7frequency: '',
            option8frequency: ''
        },
        instagram: '',
        tiktok: '',
        facebook: '',
        googleMaps: '',
        twitter: '',
        content: '',
    });
    const [options, setOptions] = useState({
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        option6: '',
        option7: '',
        option8: '',
    })
    useEffect((Item) => {
        if (id) {
            try {
                axios.get(`${process.env.REACT_APP_BACKEND_PORT}/game/update?pageId=${id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then((res) => {
                    setGameFormate(res.data)
                })
            } catch (error) {
                console.error("Error sending email");
            }
        }
    }, [id])
    const optionsArray = Array.from({ length: 100 }, (_, i) => i + 1);
    const createLandingPage = () => {
        if (id) {
            try {
                axios.put(`${process.env.REACT_APP_BACKEND_PORT}/game/${id}`, { gameFormat }, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then((res) => {
                    Navigate('/landing-pages')
                })
            } catch (error) {
                console.error("Error sending email");
            }
        } else {
            try {
                axios.post(`${process.env.REACT_APP_BACKEND_PORT}/game`, { gameFormat }, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then((res) => {
                    Navigate('/landing-pages')
                }).catch((err) => {
                    alert(err.response.data.message)
                })
            } catch (error) {
                console.error("Error sending email");
            }

        }
    }

    const ImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");
                    const maxWidth = 300; // Set your desired maximum width
                    const maxHeight = 150; // Set your desired maximum height
                    let width = img.width;
                    let height = img.height;
                    if (width > maxWidth || height > maxHeight) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    const compressedBase64 = canvas.toDataURL("image/jpeg", 0.5); // Adjust the quality as needed
                    setGameFormate({ ...gameFormat, logo: compressedBase64 });
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="flex w-full flex-col items-center mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center text-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                    Game Management
                </div>
                <div className="mt-2 text-2xl font-bold leading-10 text-black">
                    Set up your landing page
                </div>
                <div className="flex gap-5 justify-between mt-12 text-xl font-semibold tracking-tight text-blue-950 max-md:mt-10">
                    <div onClick={() => { setSelectedRow(1) }} className={`cursor-pointer text-center justify-center px-5 py-2.5  ${selectedRow === 1 ? 'bg-indigo-400 text-white' : 'text-black'} rounded-3xl`}>
                        Page Content
                    </div>
                    <div onClick={() => { setSelectedRow(2) }} className={`cursor-pointer text-center justify-center px-5 py-2.5 whitespace-nowrap ${selectedRow === 2 ? 'bg-indigo-400 text-white' : 'text-black'} rounded-3xl`}>
                        Design
                    </div>
                    <div onClick={() => { setSelectedRow(3) }} className={`cursor-pointer text-center justify-center px-5 py-2.5 ${selectedRow === 3 ? 'bg-indigo-400 text-white' : 'text-black'} rounded-3xl`}>
                        Social Media links
                    </div>
                </div>

                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                    {
                        selectedRow === 1 && (
                            <>
                                <div className="flex flex-col my-5 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="mt-4 text-base font-medium leading-5 text-black w-full">
                                                Resturant Name
                                                <input onChange={(e) => { setGameFormate({ ...gameFormat, resturantName: e.target.value }) }} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter your Brand Name`} value={gameFormat.resturantName} />
                                            </div>
                                        </div>
                                        <div className="flex mt-4 gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="mt-4 text-base font-medium leading-5 text-black w-full">
                                                Resturant Address
                                                <input onChange={(e) => { setGameFormate({ ...gameFormat, resturantAddress: e.target.value }) }} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter Resturant Address`} value={gameFormat.resturantAddress} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                    <div className="text-2xl max-md:max-w-full">Brand Name</div>
                                    <div className="flex flex-col items-start pr-20 mt-3.5 text-base max-md:pr-5 max-md:max-w-full ">
                                        <div onClick={() => { setUploadLogo(true); setGameFormate({ ...gameFormat, logo: '', brandName: '' }) }} className="flex gap-3 justify-center">
                                            <input type='radio' className="w-[20px] ml-1" id="uploadLogo" name="selection" checked={uploadLogo} />
                                            <label htmlFor="uploadLogo" id="uploadLogo" className="my-auto">Upload logo</label>
                                        </div>
                                        <div onClick={() => { setUploadLogo(false); setGameFormate({ ...gameFormat, logo: '', brandName: '' }) }} className="flex gap-3 justify-center mt-1.5">
                                            <input type='radio' className="w-[20px] ml-1" id="enterBrandName" name="selection" checked={!uploadLogo} />
                                            <label htmlFor="enterBrandName" id="enterBrandName" className="my-auto">Enter brand name</label>
                                        </div>
                                    </div>
                                </div>

                                {
                                    uploadLogo ? (<div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                        <div className="flex flex-row md:flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                                {
                                                    gameFormat.logo ? <img src={gameFormat.logo} alt="logo" className="shrink-0 rounded-full bg-zinc-300 h-[100px] w-[100px] max-md:mt-10" /> : <div className="shrink-0 rounded-full bg-zinc-300 h-[100px] w-[100px] max-md:mt-10" />
                                                }
                                                <div className="flex flex-row ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                                                    <div className="justify-center self-stretch px-0.5 py-2.5 my-auto w-full text-base font-semibold leading-6 text-center text-white whitespace-nowrap bg-indigo-400 hover:bg-indigo-500 cursor-pointer rounded-xl max-md:mt-10">
                                                        <input onChange={ImageUpload} type="file" id="uploadFileInput" style={{ display: "none" }} />
                                                        <label htmlFor="uploadFileInput" className="cursor-pointer">Upload</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>) : (<div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                        <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="mt-4 text-base font-medium leading-5 text-black w-full">
                                                    Brand Name
                                                    <input onChange={(e) => { setGameFormate({ ...gameFormat, brandName: e.target.value }) }} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter your Brand Name`} value={gameFormat.brandName} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Options for the fortune wheel
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            {
                                                data.map((Item, index) => (
                                                    <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full" key={index}>
                                                        Option {index + 1}
                                                        <div className="flex">
                                                            <input
                                                                onChange={(e) => {
                                                                    setGameFormate({
                                                                        ...gameFormat,
                                                                        options: { ...gameFormat.options, [`option${index + 1}`]: e.target.value }
                                                                    })
                                                                }}
                                                                className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full"
                                                                type="text"
                                                                placeholder={`Enter your option ${index + 1}`}
                                                                value={gameFormat.options[`option${index + 1}`]}
                                                            />
                                                            <select
                                                                onChange={(e) => {
                                                                    const selectedValue = Number(e.target.value);
                                                                    const previousValue = gameFormat.options[`option${index + 1}frequency`] || 0;

                                                                    // Calculate new total
                                                                    const newTotal = total + previousValue - selectedValue;

                                                                    setTotal(newTotal);
                                                                    setGameFormate({
                                                                        ...gameFormat,
                                                                        options: { ...gameFormat.options, [`option${index + 1}frequency`]: selectedValue }
                                                                    });
                                                                }}
                                                                className="md:ml-2 flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-[100px]"
                                                                value={gameFormat.options[`option${index + 1}frequency`] || ''}
                                                            >
                                                                <option disabled value="">Select</option>
                                                                {
                                                                    new Array(total + (gameFormat.options[`option${index + 1}frequency`] || 0) + 1).fill(0).map((_, optionIndex) => (
                                                                        <option key={optionIndex} value={optionIndex}>
                                                                            {optionIndex}
                                                                        </option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="container mt-10">
                                    <div className="spinBtn" onClick={spinedClick}></div>
                                    <div className="wheel">
                                        <div className="number" style={{ '--i': 1, '--clr': '#8497FC' }}>
                                            <span>{gameFormat.options.option1 || 'option 1'}</span>
                                        </div>
                                        <div className="number" style={{ '--i': 2, '--clr': '#FDFDAF' }}>
                                            <span>{gameFormat.options.option2 || 'option 2'}</span>
                                        </div>
                                        <div className="number" style={{ '--i': 3, '--clr': '#8497FC' }}>
                                            <span>{gameFormat.options.option3 || 'option 3'}</span>
                                        </div>
                                        <div className="number" style={{ '--i': 4, '--clr': '#FDFDAF' }}>
                                            <span>{gameFormat.options.option4 || 'option 4'}</span>
                                        </div>
                                        <div className="number" style={{ '--i': 5, '--clr': '#8497FC' }}>
                                            <span>{gameFormat.options.option5 || 'option 5'}</span>
                                        </div>
                                        <div className="number" style={{ '--i': 6, '--clr': '#FDFDAF' }}>
                                            <span>{gameFormat.options.option6 || 'option 6'}</span>
                                        </div>
                                        <div className="number" style={{ '--i': 7, '--clr': '#8497FC' }}>
                                            <span>{gameFormat.options.option7 || 'option 7'}</span>
                                        </div>
                                        <div className="number" style={{ '--i': 8, '--clr': '#FDFDAF' }}>
                                            <span>{gameFormat.options.option8 || 'option 8'}</span>
                                        </div>
                                    </div>
                                </div> */}
                            </>
                        )
                    }

                    {
                        selectedRow === 2 && (
                            <>
                                <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                    <div className="text-2xl max-md:max-w-full">Wheel Color</div>
                                    <div className="flex gap-3 justify-start mt-4">
                                        <div className="w-[20px] h-[20px] bg-[#8497FC]"></div>
                                        <label htmlFor="uploadLogo" className="my-auto">Blue</label>
                                    </div>
                                    <div className="flex gap-3 justify-start mt-1.5">
                                        <div className="w-[20px] h-[20px] bg-[#FDFDAF]"></div>
                                        <label htmlFor="enterBrandName" className="my-auto">Yellow</label>
                                    </div>
                                </div>


                                <div className="flex flex-col mt-10 p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                    <div className="text-2xl max-md:max-w-full">Page Color</div>
                                    <div className="flex gap-3 justify-start mt-4">
                                        <div className="w-[20px] h-[20px] bg-[#fff]" style={{ border: "1px solid #ccc" }}></div>
                                        <label htmlFor="uploadLogo" className="my-auto">White</label>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center mt-20 pt-8 pb-2 bg-white shadow-sm max-w-[722px]">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8669bf69e13c31c7393cd2bffae76e00d4bf176564e064b80a017f38623d8955?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="self-stretch w-full aspect-[1.47] max-md:max-w-full"
                                        alt=""
                                    />
                                    <div className="flex gap-2 justify-between pr-3 mt-20 ml-16 max-md:mt-10">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09923380b2cf92c7af98f537f3b12d5be8700c253ddfb790781d9d8ae18e083a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 w-3 aspect-square"
                                            alt=""
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f03689dd694571b2ab72fa555b6452258c8c545c9423f29744481b208431a64?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 w-3 aspect-square"
                                            alt=""
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1197ebe75a39d3255ddb89ec9c333c50ee053aad5aad94a85e44cfa92f92ee8?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-[1.09] w-[13px]"
                                            alt=""
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a60c44158bfb1f23e8e72c732fc861feb2cf3250b04e7eae73cd5e4c87d38b5?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-[1.09] w-[13px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-3.5 ml-12 text-xs leading-3 text-slate-800">
                                        © 2024 Company name . All rights reserved.
                                    </div>
                                </div>

                            </>
                        )
                    }

                    {
                        selectedRow === 3 && (
                            <>
                                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Links of Social Media Platform
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Instagram
                                                <input onChange={(e) => setGameFormate({ ...gameFormat, instagram: e.target.value })} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} value={gameFormat.instagram} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                TikTok
                                                <input onChange={(e) => setGameFormate({ ...gameFormat, tiktok: e.target.value })} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} value={gameFormat.tiktok} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Facebook
                                                <input onChange={(e) => setGameFormate({ ...gameFormat, facebook: e.target.value })} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} value={gameFormat.facebook} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Google Maps
                                                <input onChange={(e) => setGameFormate({ ...gameFormat, googleMaps: e.target.value })} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} value={gameFormat.googleMaps} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Twitter
                                                <input onChange={(e) => setGameFormate({ ...gameFormat, twitter: e.target.value })} className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} value={gameFormat.twitter} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Unique URL for Landing Page
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Landing Page URL
                                                <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Email Content
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Content
                                                <textarea onChange={(e) => setGameFormate({ ...gameFormat, content: e.target.value })} rows="6" cols="30" className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter content`} value={gameFormat.content} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    }
                    <div className="flex max-w-[1050px] ml-5 mr-4 mt-5 justify-end max-md:ml-0 max-md:w-full">
                        <div
                            onClick={createLandingPage}
                            className="justify-center w-[200px] self-stretch px-3 py-2.5 my-auto text-base font-semibold leading-6 text-center text-white whitespace-nowrap bg-indigo-400 rounded-xl hover:bg-indigo-500 max-md:mt-10 cursor-pointer"
                        >
                            <label className="cursor-pointer" >{`${id ? 'Update Landing Page' : 'Create Landing Page'}`}</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

