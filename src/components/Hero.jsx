import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Hero1 from '../assets/Hero1.jpg';
// import Hero2 from '../assets/Hero2.jpg'; 
import { Keyboard, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="mx-auto mt-10 px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{ enabled: true }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper !max-w-[1120px] overflow-hidden rounded-lg"
      >
        <SwiperSlide>
          <div className='aspect-video1 overflow-hidden'>
            <img className='w-full h-full object-cover' src={Hero1} alt="Hero 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='aspect-video1 overflow-hidden'>
            <img className='w-full h-full object-cover' src={Hero1} alt="Hero 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='aspect-video1 overflow-hidden'>
            <img className='w-full h-full object-cover' src={Hero1} alt="Hero 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='aspect-video1 overflow-hidden'>
            <img className='w-full h-full object-cover' src={Hero1} alt="Hero 2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;


<script>

</script>
