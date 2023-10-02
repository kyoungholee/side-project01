import React from 'react';
import Image from 'next/image';
import style from '@/styles/header.module.css';

export default function header() {
  return (
    <div className={style.header}>
      <div className={style.hamgerContainer}>
        <Image
          className={style.hambergerImage}
          src="/img/hamgerbar.png"
          width={700}
          height={300}
          alt="카테고리 아이콘"
        />
        <span className={style.category}>카테고리</span>
      </div>

      <Image
        className={style.logoImage}
        src="/img/logo.png"
        width={700}
        height={300}
        alt="카테고리 아이콘"
      />
      <form>
        <div className={style.searchContainer}>
          <input
            placeholder="생각나는 나들이 장소를 검색해보세요."
            className={style.search}
          />
        </div>
      </form>
      <div className={style.heartContainer}>
        <Image
          className={style.heartImage}
          src="/img/blackheart.png"
          width={400}
          height={300}
          alt="좋아요 아이콘"
        />
        <span className={style.heart}>찜 목록</span>
      </div>
      <span>마이 카테고리</span>
    </div>
  );
}
