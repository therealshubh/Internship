import React, { useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/ImgSlider.css';

const galleryImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg'
];

Modal.setAppElement('#root');

const ImgSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="gallery-fullwidth-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="gallery-swiper"
      >
        {galleryImages.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex justify-content-center">
              <img
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="img-fluid rounded gallery-img"
                style={{ width: '100vw', height: '600px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(index);
                  }
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Lightbox"
        className="Modal"
        overlayClassName="Overlay"
      >
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          initialSlide={activeIndex}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="img-fluid"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="btn btn-danger mt-3" onClick={closeModal} aria-label="Close gallery modal">Close</button>
      </Modal>
    </div>
  );
};

export default ImgSlider;
