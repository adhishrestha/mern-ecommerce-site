import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const CarouselSection = ({
  items,
  renderItem,
  slidesPerView = 4,
  autoplay = false,
  pagination = false,
  className = '',
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={
        autoplay
          ? {
              delay: 3000,
              disableOnInteraction: false,
            }
          : false
      }
      loop={true}
      speed={800}
      pagination={
        pagination
          ? {
              clickable: true,
            }
          : false
      }
      navigation={{
        prevEl: '.custom-prev',
        nextEl: '.custom-next',
      }}
      grabCursor={true}
      spaceBetween={20}
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
      className={`${className}`}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSection;
