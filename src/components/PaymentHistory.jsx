import { useEffect, useState } from "react";
import AsideHeader from "./AsideHeader";
import { useSelector } from "react-redux";
import axios from "axios";

function PaymentHistory() {
    // Sample data object with row names and corresponding values
    const userId = useSelector(state => state.authentication.userId);
    const [data, setData] = useState();

    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/payment/history/${userId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                const updatedData = res.data.data?.map((Item) => {
                    return { plan: Item.plan, ammount: `${Item.amount}$`, Date: Item.plan.slice(0, 10), method: Item.paymentMethod }
                })
                setData(updatedData);
                console.log(res.data.data);
            })
        } catch (error) {
            console.error("error");
        }
    }, [])


    // const data = [
    //     { plan: "Yearly", ammount: "$988", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     // Add more objects as needed
    // ];

    const columns = [
        "Subscription Plan",
        "Ammount",
        "Date",
        "Payment Method",
    ]

    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                        Payment History
                    </div>
                </div>
                <div className="w-[900px] m-auto">
                    <div className="min-w-0 flex gap-5 mt-10 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] overflow-auto">
                        {columns?.map((key, idx) => (
                            <div key={idx} className="font-bold flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{key}</div>
                        ))}
                    </div>

                    {data?.map((row, index) => (
                        <div key={index} className="flex gap-5 justify-between items-center p-5 mt-5 bg-white max-md:flex-wrap shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                            {Object.keys(row).map((key, idx) => (
                                <div className={`w-[80px] md:w-[70px] ${idx === 0 && 'md:w-[200px] mr-16'} ${idx === 1 && 'md:w-[80px]'} flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis`} key={idx}>
                                    {row[key]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PaymentHistory;