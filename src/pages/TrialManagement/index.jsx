import { useEffect, useState } from "react";
import AsideHeader from "../../components/AsideHeader";
import axios from "axios";

function Index() {
    // Sample data object with row names and corresponding values

    const [data, setData] = useState(null);
    const [fetchUser, setFetchUser] = useState(false);

    const columns = [
        "Name",
        "Email Address",
        "Phone Number",
        "Request Date",
    ];

    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/auth/trial`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                setData(res.data);
                // console.log(res.data);
            })
        } catch (error) {
            console.error("error");
        }
    }, [fetchUser])


    // // State to store the checked state for each row
    // const [checkedStates, setCheckedStates] = useState(data?.map(() => true));

    // const handleChange = (index) => {
    //     setCheckedStates(prevStates => {
    //         const newStates = [...prevStates];
    //         newStates[index] = !newStates[index];
    //         return newStates;
    //     });
    // };

    const approveUser = async (id) => {
        try {
            axios.patch(`${process.env.REACT_APP_BACKEND_PORT}/auth/trial?id=${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                setFetchUser(!fetchUser)
                // console.log(res.data);
            })
        } catch (error) {
            console.error("error");
        }
    }

    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                        Trial Management
                    </div>
                </div>
                <div className="min-w-0 flex gap-5 mt-10 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] overflow-auto">
                    {columns.map((key, idx) => (
                        <div key={idx} className="font-bold flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{key}</div>
                    ))}
                    <div className="w-[60px]"></div>
                </div>

                {data?.map((item, index) => (
                    <div key={index} className="min-w-0 flex gap-5 mt-10 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] overflow-auto w-full">
                        <div className="w-[100px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</div>
                        <div className="w-[180px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{item.email}</div>
                        <div className="w-[140px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{item.phoneNumber || '-'}</div>
                        <div className="w-[100px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{item.createdAt.slice(0, 10)}</div>
                        {
                            item.isTrialVerified ?
                                <button className="justify-center self-stretch p-2.5 font-semibold text-center text-white whitespace-nowrap bg-indigo-400 rounded-xl border-2 border-indigo-400 border-solid">
                                    Approved
                                </button> : <button onClick={() => approveUser(item._id)} className="justify-center self-stretch p-2.5 font-semibold text-center text-black whitespace-nowrap rounded-xl border-2 border-indigo-400 border-solid bg-white">
                                    Approve
                                </button>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;