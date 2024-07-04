import React from 'react'
import Services from '../../components/Services'
import Mission from '../../components/Mission'
import Steps from '../../components/Steps'
import { useNavigate } from 'react-router-dom'


const Index = () => {
    const Navigate = useNavigate();
    return (
        <div className='mt-10'>
            <div className="flex flex-col md:flex-row mx-4 md:mx-0 items-center relative">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/517608b66619326a8b0a32ec9fa9d7209bcae27996796c6a8663ff1a0195df09?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="w-full aspect-[2.17] max-w-[350px] hidden md:block absolute top-0"
                        style={{zIndex: 0}}
                    />
                <div className="flex-1 relative md:ml-10 mt-5">
                    <div style={{zIndex: 10}} className="text-3xl z-2 font-bold text-black leading-[39px] max-w-[596px]">
                        Streamline Your Restaurant's Online Presence
                    </div>
                    <div style={{zIndex: 10}} className="text-base font-medium mt-5 leading-5 w-full text-neutral-800">
                        Seamlessly integrate online tools and platforms to enhance your
                        restaurant's visibility, engage with customers, and boost your online
                        reputation. From managing social media profiles to optimizing search
                        engine presence, our solution empowers you to effortlessly streamline
                        every aspect of your restaurant's online presence for maximum impact and
                        success
                    </div>
                    <button onClick={() => { Navigate('/demo') }} className="justify-center px-8 py-4 text-base font-medium leading-5 text-center text-white bg-indigo-400 rounded w-[200px] text-md mt-10">
                        Book a Demo
                    </button>

                </div>
                <div className="flex-1 relative flex justify-center">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38afc885faf4ca67144eac483b8514ce75ab18e0efbe05901dbb50c86e5f741?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="w-full aspect-[0.89] max-w-[408px]"
                        style={{ zIndex: 10 }}
                    />
                    <img
                        style={{ zIndex: 0 }}
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d032841299ebc95a5225968bb612a9d184d80cb2265f6a8059002d6d68ebfb?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="w-full aspect-[3.45] max-w-[811px] absolute bottom-[1%]"
                    />

                </div>
            </div>
            {/* <Hero Image="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&" heading="Home" para1="Revolutionizing Restaurant" para2="Management with EGO"/> */}
            <Services />
            <Mission />
            <Steps />
            <hr className="mt-20" />
        </div>
    )
}

export default Index