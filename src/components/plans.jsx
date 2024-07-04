import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// * Pricing plans :
//  	monthly or yearly: Good
//  	Number of restaurants : 1 restaurant = 49 € , 2 to 4 = 44€ per restaurant (cross out the original price) and 
//      5+ = 39€ per restaurant (cross out the original price)

export default function PricingPlan() {
    const Navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [yearNumber, setYearNumber] = useState(1);

    const [amountMonthly, setAmountMonthly] = useState(49);
    const [originalAmount, setOriginalAmount] = useState(49);

    const [amountYearly, setAmountYearly] = useState(588);
    const [originalAmountYearly, setOriginalAmountYearly] = useState(588);


    // Function to update the amount based on the number of restaurants/pages
    function updateMonthAmount(quantity) {
        setOriginalAmount(49 * quantity)
        if (quantity === 1) {
            setAmountMonthly(49 * quantity);
        } else if (quantity >= 2 && quantity <= 4) {
            setAmountMonthly(44 * quantity);
        } else if (quantity >= 5) {
            setAmountMonthly(39 * quantity);
        }
    }

    function updateYearAmount(quantity) {
        setOriginalAmountYearly(49 * quantity * 12)
        if (quantity === 1) {
            setAmountYearly(49 * quantity * 12);
        } else if (quantity >= 2 && quantity <= 4) {
            setAmountYearly(44 * quantity * 12);
        } else if (quantity >= 5) {
            setAmountYearly(39 * quantity * 12);
        }
    }

    // Increment function for number
    const increment = () => {
        setNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            updateMonthAmount(newNumber);
            return newNumber;
        });
    };

    // Decrement function for number
    const decrement = () => {
        if (number === 1) return;
        setNumber(prevNumber => {
            const newNumber = prevNumber - 1;
            updateMonthAmount(newNumber);
            return newNumber;
        });
    };


    const incrementYear = () => {
        setYearNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            updateYearAmount(newNumber);
            return newNumber;
        });
    };

    const decrementYear = () => {
        if (yearNumber === 1) return;
        setYearNumber(prevNumber => {
            const newNumber = prevNumber - 1;
            updateYearAmount(newNumber);
            return newNumber;
        });
    };


    return (
        <div className="max-w-[876px] mt-10 mx-auto">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 mx-auto">
                <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full mx-auto" style={{ boxShadow: '0px 4px 13px 0px #00000099', borderRadius: "20px" }}>
                    <div className="flex flex-col grow px-6 pt-12 pb-6 w-full text-3xl font-bold bg-white rounded-3xl shadow-sm text-gray-950 max-md:px-5 max-md:mt-10">
                        <div className="self-center text-center">Monthly Plan</div>
                        <div className="flex flex-col mx-4 mt-9 text-lg text-black max-md:mx-2.5">
                            <div className="text-2xl text-neutral-400">What You’ll Get</div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b10c657ed950499012f5a3695971d358963b11e5373fb5f9427dd1b936135e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Monitoring and Support</div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Access to Application </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Data</span>{" "}
                                    <span className="">gathering</span>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Dashboard</span>{" "}
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b7222b04389a5335095a5d90b72a8c7e06d9a1b0ac97ba52e5a3a0081259055?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div className="flex items-center space-x-2">
                                    <span className='mr-3'>Landing page</span>

                                    <button
                                        onClick={decrement}
                                        className="w-6 h-6 flex items-center justify-center bg-indigo-400 text-white rounded-full text-lg"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        value={number}
                                        readOnly
                                        className="w-10 text-center pl-1.3"
                                    />
                                    <button
                                        onClick={increment}
                                        className="w-6 h-6 flex items-center justify-center bg-indigo-400 text-white rounded-full text-lg"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>
                        </div>
                        <div className="shrink-0 mx-4 mt-10 w-80 max-w-full h-px border border-dashed bg-neutral-400 border-neutral-400 max-md:mx-2.5" />
                        <div className="self-center mt-12 leading-10 text-center max-md:mt-10">
                            {number > 1 && (
                                <span className='line-through font-light text-2xl text-red-400'>
                                    €{originalAmount}
                                </span>
                            )}
                            <span className=""> €{amountMonthly}</span>
                            <span className="text-lg  text-gray-950">/month</span>
                        </div>
                        <button onClick={() => Navigate('/login', { state: { paymentType: 'Monthly', amount: amountMonthly, landingPages: number } })} className="justify-center cursor-pointer items-center px-16 py-2 mt-10 text-2xl font-semibold leading-10 text-center text-white bg-indigo-400 rounded-xl max-md:px-5 max-md:mt-10">
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full mx-auto" style={{ boxShadow: '0px 4px 13px 0px #00000099', borderRadius: "20px" }}>
                    <div className="flex flex-col grow px-6 pt-12 pb-6 w-full text-3xl font-bold bg-white rounded-3xl shadow-sm text-gray-950 max-md:px-5 max-md:mt-10">
                        <div className="self-center text-center">Yearly Plan</div>
                        <div className="flex flex-col mx-4 mt-9 text-lg text-black max-md:mx-2.5">
                            <div className="text-2xl text-neutral-400">What You’ll Get</div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b10c657ed950499012f5a3695971d358963b11e5373fb5f9427dd1b936135e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Monitoring and Support</div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>Access to Application </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Data</span>{" "}
                                    <span className="">gathering</span>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f797e714413771ecdc998d3a7a71d9bafb99061f2626ac3cee8a4c7708336bfd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div>
                                    <span className="">Dashboard</span>{" "}
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b7222b04389a5335095a5d90b72a8c7e06d9a1b0ac97ba52e5a3a0081259055?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div className="flex items-center space-x-2">
                                    <span className='mr-3'>Landing page</span>

                                    <button
                                        onClick={decrementYear}
                                        className="w-6 h-6 flex items-center justify-center bg-indigo-400 text-white rounded-full text-lg"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        value={yearNumber}
                                        readOnly
                                        className="w-10 text-center pl-1.3"
                                    />
                                    <button
                                        onClick={incrementYear}
                                        className="w-6 h-6 flex items-center justify-center bg-indigo-400 text-white rounded-full text-lg"
                                    >
                                        +
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="mt-7"></div>
                        <div className="shrink-0 mx-4 mt-10 w-80 max-w-full h-px border border-dashed bg-neutral-400 border-neutral-400 max-md:mx-2.5" />
                        <div className="self-center mt-12 leading-10 text-center max-md:mt-10">
                            {yearNumber > 1 && (
                                <span className='line-through font-light text-2xl text-red-400'>
                                    €{originalAmountYearly}
                                </span>
                            )}
                            <span className=""> €{amountYearly}</span>
                            <span className="text-lg  text-gray-950">/year</span>
                        </div>
                        <button onClick={() => Navigate('/login', { state: { paymentType: 'Yearly', amount: amountYearly, landingPages: yearNumber } })} className="justify-center cursor-pointer items-center px-16 py-2 mt-10 text-2xl font-semibold leading-10 text-center text-white bg-indigo-400 rounded-xl max-md:px-5 max-md:mt-10">
                            Subscribe Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

