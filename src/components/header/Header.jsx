import React from 'react';
import imgLogo from '../../assets/Logo-hodu.svg';
import iconSearch from '../../assets/icon-search.svg';
import { NavHeader, HeaderDiv1, LogoImg, SearchInp, SearchBtn, HeaderDiv2, CartTxt, LoginTxt} from './HeaderStyle';

export default function Header() {
  return (
    <NavHeader>
      <HeaderDiv1>
        <LogoImg src={imgLogo} alt="logo-img" />
        <SearchInp type="text" placeholder='상품을 검색해보세요!' />
        <SearchBtn><img src={iconSearch} alt="search-icon" /></SearchBtn>
      </HeaderDiv1>
      <HeaderDiv2>
        <CartTxt>장바구니</CartTxt>
        <LoginTxt to='/login'>로그인</LoginTxt>
      </HeaderDiv2>
    </NavHeader>
  )
}
