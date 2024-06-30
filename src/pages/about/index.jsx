import React from 'react'
import Hero from '../../components/Hero'
import AboutMission from '../../components/AboutMission'
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <Hero Image="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&" heading="About us" para1="Revolutionizing Restaurant" para2="Management with EGO"/>
            <AboutMission />
            <div className="text-5xl font-bold text-center bg-clip-text text-[#8497FC] max-md:text-3xl max-w-[1100px] mx-auto mb-3 mt-6 leading-20">
                Unlock Your Restaurant's Potential: Schedule Your EGO Demo Now!
            </div>
            <div onClick={() => { Navigate('/demo') }}  className="justify-center px-8 py-4 text-base font-medium leading-5 text-center text-white bg-indigo-400 rounded w-[180px] m-auto">
                Book a Demo
            </div>
        </div>
    )
}

export default Index