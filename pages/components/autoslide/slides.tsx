import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '@/styles/slides.module.css';

const AutoSlider = () => {
  const images = ['/img/baby1.jpg', '/img/baby2.jpg', '/img/baby3.jpg']; // 이미지 파일 경로 목록
  const [currentSlide, setCurrentSlide] = useState(0);

  // 다음 슬라이드로 이동하는 함수
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // 이전 슬라이드로 이동하는 함수
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    );
  };

  useEffect(() => {
    // 일정 시간 간격으로 다음 슬라이드로 이동하는 로직
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // 3초마다 슬라이드 변경

    // 컴포넌트가 언마운트될 때 인터벌 해제
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={style.sliderContainer}>
      <button onClick={prevSlide} className={style.sliderLeft}>
        <Image src="/img/left_arrow.png" width={50} height={50} alt="화살표" />
      </button>
      <Image
        src={images[currentSlide]}
        width={700}
        height={300}
        alt={`Slide ${currentSlide + 1}`}
      />
      <button onClick={nextSlide} className={style.sliderRight}>
        <Image src="/img/right_arrow.png" width={50} height={50} alt="화살표" />
      </button>
    </div>
  );
};

export default AutoSlider;
