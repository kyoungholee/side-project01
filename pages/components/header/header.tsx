import React from 'react';
import style from '@/styles/header.module.css';

export default function header() {
  return (
    <div className={style.header}>
      <p>카테고리를 위한 햄버거 이미지 넣기</p>
      <span>아빠 이번주는 어디가~?</span>
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
