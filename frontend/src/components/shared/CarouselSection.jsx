import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const CarouselSection = ({ items, renderItem, slidesPerView = 4 }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={800}
      // navigation
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      spaceBetween={24}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
        },

        480: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 3,
        },

        1024: {
          slidesPerView,
        },
      }}
      className="category-swiper pb-20"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSection;
