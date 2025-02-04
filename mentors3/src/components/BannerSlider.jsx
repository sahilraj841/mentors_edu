import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const BannerSlider= () => {
    return (
        <div className="w-full max-w-[1304px] mx-auto">
            <img
                src="/photos/changedBanner.jpeg"
                alt="Banner"
                className="w-full h-auto object-cover rounded-2xl"
            />
        </div>
    );
};

export default BannerSlider;
