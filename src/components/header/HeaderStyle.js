import styled from 'styled-components';

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

export const CartImg = styled.img`
  margin-right: 26px;
  &::after{
  }
`