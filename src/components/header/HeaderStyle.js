import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconCart from '../../assets/icon-shopping-cart.svg';
import iconUser from '../../assets/icon-user.svg';

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
`

export const HeaderDiv1 = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  width: 124px;
  height: 38px;
`

export const SearchInp = styled.input`
  width: 400px;
  margin: 30px;
  padding: 12px 48px 12px 22px;
  font-size: 16px;
  border-radius: 50px;
  outline: none;
  border: 2px solid #21bf48;
`

export const SearchBtn = styled.button`
  margin-left: -80px;
  margin-bottom: 3px;
  width: 28px;
  height: 28px;
`

export const HeaderDiv2 = styled.div`
  display: flex;
  align-items: center;
`

export const CartTxt = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 26px;
  font-size: 12px;
  width: 46px;
  color: #767676;
  &::before {
  content: '';
  display: block;
  background-image: url(${iconCart});
  background-repeat: no-repeat;
  background-size: 32px;
  background-position: center;
  padding: 4px 0;
  width: 32px;
  height: 32px;
  }
`

export const LoginTxt = styled(Link)`
  width: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #767676;
&::before {
  content: '';
  display: block;
  background-image: url(${iconUser});
  background-repeat: no-repeat;
  background-size: 32px;
  background-position: center;
  padding: 4px 0;
  width: 32px;
  height: 32px;
  }
`