import { useEffect, useState } from "react";
import AsideHeader from "./AsideHeader";
import { useSelector } from "react-redux";
import axios from "axios";

function PaymentHistory() {
    const userId = useSelector(state => state.authentication.userId);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_PORT}/payment/history/${userId}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const updatedData = res.data.data?.map((item) => {
                    return {
                        plan: item.plan,
                        amount: `€${item.amount}`,
                        landingPages: item.landingPages,
                        date: item.expiryDate.slice(0, 10) ,
                        method: item.paymentMethod
                    }
                });
                setData(updatedData);
            } catch (error) {
                console.error("Error fetching payment history:", error);
            }
        };

        fetchData();
    }, [userId]);

    const columns = [
        "Subscription Plan",
        "Amount",
        "Landing Pages",
        "Expiry Date",
        "Payment Method"
    ];

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
                        {columns.map((column, idx) => (
                            <div key={idx} className="font-bold flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">
                                {column}
                            </div>
                        ))}
                    </div>

                    {data.map((row, index) => (
                        <div key={index} className="flex gap-5 justify-between items-center p-5 mt-5 bg-white max-md:flex-wrap shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                            {Object.values(row).map((value, idx) => (
                                <div className={`w-[80px] md:w-[70px] ${idx === 0 && 'md:w-[50px] mr-14'} ${idx === 1 && 'md:w-[40px]'} ${idx === 3 && 'md:w-[40px] mr-16'} flex-shrink-0 whitespace-nowrap text-ellipsis`} key={idx}>
                                    {value}
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
