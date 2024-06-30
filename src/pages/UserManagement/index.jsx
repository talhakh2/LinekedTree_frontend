import { useEffect, useState } from "react";
import AsideHeader from "../../components/AsideHeader";
import Switch from '@mui/material/Switch';
import axios from "axios";
import { useSelector } from "react-redux";

function Index() {
    // Sample data object with row names and corresponding values
    const userId = useSelector(state => state.authentication.userId);
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/auth/getall`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                // console.log(res);
                const updatedData = res.data?.map((Item) => {
                    return { name: Item.name, email: Item.email, phoneNumber: Item.phoneNumber, access: Item.access, pages: Item.pages }
                })
                setData(updatedData);
            })
        } catch (error) {
            console.error("error");
        }
    }, [])

    const columns = [
        "Name",
        "Email Address",
        "Phone Number",
        "Access Level",
        "Restaurant Pages"
    ];

    // State to store the checked state for each row
    const [checkedStates, setCheckedStates] = useState(data.map(() => true));

    const handleChange = (index) => {
        setCheckedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                        User Management
                    </div>
                </div>
                <div className="min-w-0 flex gap-5 mt-10 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] overflow-auto">
                    {columns.map((key, idx) => (
                        <div key={idx} className="font-bold flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{key}</div>
                    ))}
                    <div className="w-[60px]"></div>
                </div>

                {data.map((row, index) => (
                    <div key={index} className="min-w-0 flex gap-5 mt-5 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] overflow-auto w-full">
                        <div className="w-[100px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{row.name}</div>
                        <div className="w-[180px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{row.email}</div>
                        <div className="w-[140px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{row.phoneNumber || '-'}</div>
                        <div className="w-[170px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{row.access || '-'}</div>
                        <div className="w-[10px] flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">{row.pages || '-'}</div>
                        <Switch
                            checked={checkedStates[index]}
                            onChange={() => handleChange(row._id)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <button className="justify-center self-stretch p-2.5 font-semibold text-center text-white whitespace-nowrap bg-indigo-400 rounded-xl border-2 border-indigo-400 border-solid">
                            Blocked
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
