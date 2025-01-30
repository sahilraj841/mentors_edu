import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const BannerSlider = () => {
    const images = [
        "/photos/2.png",
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative w-full h-[calc(100vw/2)]">
                {/* Outer Neon Frame */}
                <div className="absolute inset-0 border-[10px] border-transparent rounded-2xl animate-border-glow"></div>

                {/* Swiper Carousel */}
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }} // Increased delay to 5 seconds
                    modules={[Navigation, Autoplay, Pagination]}
                    loop={true}
                    className="rounded-2xl shadow-xl"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <img
                                src={src}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-full object-cover rounded-2xl" // Changed to `object-cover` for better fit
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BannerSlider;

<style jsx>{
    `
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

    /* Improved styling for the slider */
    .swiper-pagination-bullet {
        background: #00eaff;
        opacity: 0.8;
    }
    .swiper-pagination-bullet-active {
        background: #0055ff;
        opacity: 1;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: #00eaff;
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
        color: #0055ff;
        transform: scale(1.1);
        transition: transform 0.2s ease;
    }
    `
}</style>
