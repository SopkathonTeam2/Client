import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetLetter } from '../lib/useGetLetter';

import { useRecoilValue } from 'recoil';
import { bottleAtom } from './../recoil/atoms/bottleAtom';

const HomeHeader = () => {
  const [userName, setUserName] = useState();
  const [reaminDays, setRemainDays] = useState();
  //링크 복사
  const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 편지 전달 링크가 복사되었어요!');
    } catch (error) {
      console.log(error);
    }
  };

  // 데이터 통신 return이 안돼서 일단 atom에 저장 -> atom 값 가져오기
  const { userResponseDto, roomResponseDto } = useRecoilValue(bottleAtom);

  useEffect(() => {
    setUserName(userResponseDto.name);
    setRemainDays(roomResponseDto.remainingDays);
  }, []);

  // 이름 & 남은 날짜 데이터 받아오기
  // const getHeaderData = async () => {
  //   console.log('드렁옴');
  //   const data2 = useGetLetter();
  //   console.log(data2);

  //   const data = await useGetLetter();
  //   console.log(data, '?!?!?!?');
  //   // setUserName(data.userResponseDto.name);
  //   // setRemainDays(data.roomResponseDto.remainingDays);
  // };

  // useEffect(() => {
  //   getHeaderData();
  // }, []);

  return (
    <St.headerWrapper>
      <St.headerTop>
        <St.headerTitle>{userName}님의 바다</St.headerTitle>
        <St.headerBtn onClick={() => handleCopyClipBoard(window.location.href)}>
          편지 요청하기
        </St.headerBtn>
      </St.headerTop>
      <St.headerContent>
        편지 열람까지 <St.dayHighLight>{reaminDays}</St.dayHighLight>일 남았어요
      </St.headerContent>
    </St.headerWrapper>
  );
};

export default HomeHeader;

const St = {
  headerWrapper: styled.section`
    height: 175px;
    width: 100%;
    padding: 0 32px;
    background-color: ${({ theme }) => theme.color.white};
  `,
  headerTop: styled.div`
    display: flex;
    padding: 42px 0 9px 0;
    gap: 63px;
  `,
  headerTitle: styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
  `,
  headerBtn: styled.button`
    width: 127px;
    height: 44px;
    border-radius: 80px;
    padding: 12px 20px;
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  `,
  headerContent: styled.p`
    ${({ theme }) => theme.text.body2};
    color: #7d7d7d;
  `,
  dayHighLight: styled.span`
    ${({ theme }) => theme.text.body2};
    color: ${({ theme }) => theme.color.blue};
  `,
};
