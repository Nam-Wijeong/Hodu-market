import React from 'react';
import imgLogo from '../../assets/Logo-hodu.png';
import iconSearch from '../../assets/icon-search.svg';
import iconCart from '../../assets/icon-shopping-cart.svg';
import iconUser from '../../assets/icon-user.svg';
import { NavHeader, HeaderDiv1, LogoImg, SearchInp, SearchBtn, HeaderDiv2, CartImg} from './HeaderStyle';

export default function Header() {
  return (
    <NavHeader>
      <HeaderDiv1>
        <LogoImg src={imgLogo} alt="logo-img" />
        <SearchInp type="text" placeholder='상품을 검색해보세요!' />
        <SearchBtn><img src={iconSearch} alt="search-icon" /></SearchBtn>
      </HeaderDiv1>
      <HeaderDiv2>
        <CartImg src={iconCart} alt="cart-icon" />
        <img src={iconUser} alt="user-icon" />
      </HeaderDiv2>
    </NavHeader>
  )
}
