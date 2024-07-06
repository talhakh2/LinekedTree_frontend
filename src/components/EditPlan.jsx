import React, { useState } from 'react'
import axios from 'axios'


export default function EditPlan({ priceData, setShowMonthEditPlan, setShowYearEditPlan, setPriceData, fetchPriceData, update }) {
    const [priceDataCopy, setPriceDataCopy] = useState(priceData)


    const handleCancel = () => {
        setShowMonthEditPlan(false)
        setShowYearEditPlan(false)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPriceDataCopy(prev => ({ ...prev, [name]: value }));
    };

    const handleCheck = (e) => {
        const { name } = e.target;
        setPriceDataCopy(prev => {
            const newPriceDataCopy = {
                ...prev,
                features: {
                    ...prev.features,
                    [name]: !prev.features[name], // Toggle the current value
                }
            };
            
            return newPriceDataCopy;
        });
    };


    const handleConfirm = () => {
        if(update === 'monthly'){
            setPriceData(prev => {
                const newPriceDataUpdated = {
    
                    ...prev,
                    monthlyPlan: priceDataCopy // Update the monthly plan with priceDataCopy
    
                };
                updateMonthPriceDB(newPriceDataUpdated)
                return newPriceDataUpdated;
            });
        
        } else{
            setPriceData(prev => {
                const newPriceDataUpdated = {

                    ...prev,
                    yearlyPlan: priceDataCopy // Update the monthly plan with priceDataCopy

                };
                updateYearPriceDB(newPriceDataUpdated)
                return newPriceDataUpdated;
            });
        }

    };

    async function updateMonthPriceDB(newPriceDataUpdated) {
        try {
            const res = await axios.put(`${process.env.REACT_APP_BACKEND_PORT}/price/monthly`, { updatedData: newPriceDataUpdated }, {
                headers: { 'Content-Type': 'application/json' },
            });
                setShowMonthEditPlan(false)
                setShowYearEditPlan(false)
                fetchPriceData()
        } catch (error) {
            console.error("Error fetching price data");
        }
    }

    async function updateYearPriceDB(newPriceDataUpdated) {
        try {
            const res = await axios.put(`${process.env.REACT_APP_BACKEND_PORT}/price/yearly`, { updatedData: newPriceDataUpdated }, {
                headers: { 'Content-Type': 'application/json' },
            });
            setShowMonthEditPlan(false)
            setShowYearEditPlan(false)
            fetchPriceData()
        } catch (error) {
            console.error("Error fetching price data");
        }
    }


    return (
        <>
            <div className="flex justify-center items-center mt-10">
                <div className="flex flex-col bg-white rounded-3xl shadow-xl max-w-[400px] w-full">
                    <div className="flex flex-col w-full text-center bg-white">
                        <div className="flex flex-col px-6 pt-6 w-full bg-white">
                            <div className="flex flex-col">
                                <div className="text-lg font-semibold leading-7 text-gray-900">
                                    Edit Plan
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
                                            Plan Name
                                        </div>
                                        <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                                            onChange={handleInputChange} type="text" placeholder="Enter plan name" value={priceDataCopy.planName} name="planName" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center mt-4">
                                    <div className="flex flex-col col-span-5 gap-4">
                                        <div className="text-sm font-medium leading-5 text-black">
                                            Features
                                        </div>

                                        <div className='flex justify-between items-center'>
                                            <div className="text-sm leading-5 text-black">
                                                Monitoring and Support
                                            </div>
                                            <input className="ml-auto" type="checkbox" name="feature1"
                                                onChange={handleCheck} checked={priceDataCopy.features.feature1} />
                                        </div>

                                        <div className='flex justify-between items-center'>
                                            <div className="text-sm leading-5 text-black">
                                                Access to Application
                                            </div>
                                            <input className="ml-auto" type="checkbox" name="feature2"
                                                onChange={handleCheck} checked={priceDataCopy.features.feature2} />
                                        </div>

                                        <div className='flex justify-between items-center'>
                                            <div className="text-sm leading-5 text-black">
                                                Data Gathering
                                            </div>
                                            <input className="ml-auto" type="checkbox" name="feature3"
                                                onChange={handleCheck} checked={priceDataCopy.features.feature3} />
                                        </div>

                                        <div className='flex justify-between items-center'>
                                            <div className="text-sm leading-5 text-black">
                                                Dashboard
                                            </div>
                                            <input className="ml-auto" type="checkbox" name="feature4"
                                                onChange={handleCheck} checked={priceDataCopy.features.feature4} />
                                        </div>


                                    </div>
                                </div>

                                <div className="flex flex-col justify-center mt-4">
                                    <div className="flex flex-col">
                                        <div className="text-sm font-medium leading-5 text-black">
                                            Price
                                        </div>
                                        <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                                            onChange={handleInputChange} type="number" placeholder="Enter Price" value={priceDataCopy.price} name="price" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center mt-4">
                                    <div className="flex flex-col">
                                        <div className="text-sm font-medium leading-5 text-black">
                                            Price For Pages 2-4
                                        </div>
                                        <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                                            onChange={handleInputChange} type="number" placeholder="Enter Price" value={priceDataCopy.for_2_to_4} name="for_2_to_4" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center mt-4">
                                    <div className="flex flex-col">
                                        <div className="text-sm font-medium leading-5 text-black">
                                            Price For Pages 5+
                                        </div>
                                        <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                                            onChange={handleInputChange} type="number" placeholder="Enter Price" value={priceDataCopy.for_5_Plus} name="for_5_Plus" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center mt-4">
                                    <div className="flex flex-col">
                                        <div className="text-sm font-medium leading-5 text-black">
                                            Discount % (Optional)
                                        </div>
                                        <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                                            onChange={handleInputChange} type="number" placeholder="Enter Discount" value={priceDataCopy.discount} name="discount" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col pt-8 w-full text-base font-semibold leading-6 whitespace-nowrap">
                        <div className="flex flex-col px-6 pb-6 w-full bg-white">
                            <button className="justify-center text-center items-center px-5 py-2.5 text-white bg-indigo-400 rounded-lg shadow-sm cursor-pointer"
                                onClick={handleConfirm}
                            >
                                Confirm
                            </button>
                            <div className="justify-center text-center items-center px-5 py-2.5 mt-3 text-black bg-white rounded-lg cursor-pointer border border-gray-300 border-solid shadow-sm"
                                onClick={handleCancel}
                            >
                                Cancel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
