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
        <span>카테고리</span>
      </div>

      <Image
          src="/img/logo.png"
          width={700}
          height={300}
          alt="카테고리 아이콘"
        />
      <form>
        <label>
          <input placeholder="생각나는 나들이 장소를 검색해보세요." />
        </label>
      </form>
      <span>찜 목록</span>
      <span>마이 카테고리</span>
    </div>
  );
}
