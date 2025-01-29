import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const BannerSlider = () => {
    const images = [
        "/photos/mentorsBanner.jpg",
        "/photos/mentorsBanner2.png",
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative w-full h-[calc(100vw/2)]">
                {/* Outer Neon Frame */}
                <div className="absolute inset-0 border-[10px] border-transparent rounded-2xl animate-border-glow"></div>

                {/* Swiper Carousel */}
                <Swiper 
                    navigation 
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]} 
                    loop={true}
                    className="rounded-2xl"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img 
                                src={src} 
                                alt={`Banner ${index + 1}`}
                                className="w-full h-full object-contain rounded-2xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BannerSlider;

<style jsx>{`
    @keyframes borderGlow {
        0% { border-color: #00eaff; box-shadow: 0 0 20px #00eaff; }
        25% { border-color: #0099ff; box-shadow: 0 0 25px #0099ff; }
        50% { border-color: #0055ff; box-shadow: 0 0 30px #0055ff; }
        75% { border-color: #0099ff; box-shadow: 0 0 25px #0099ff; }
        100% { border-color: #00eaff; box-shadow: 0 0 20px #00eaff; }
    }

    .animate-border-glow {
        animation: borderGlow 3s linear infinite;
    }
`}</style>
