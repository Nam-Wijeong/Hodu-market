import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import instaIcon from '../../assets/icon-insta.svg'
import facebookIcon from '../../assets/icon-fb.svg'
import youtubeIcon from '../../assets/icon-yt.svg'

export default function Footer() {
  return (
    <FooterWrap>
      <FooterUl>
        <FooterDivTxt>
          <li><Link to='/'>호두샵 소개</Link></li>
          <li><Link to='/'>이용약관</Link></li>
          <li><Link to='/'><strong>개인정보처리방침</strong></Link></li>
          <li><Link to='/'>전자금융거래약관</Link></li>
          <li><Link to='/'>청소년보호정책</Link></li>
          <li><Link to='/'>제휴문의</Link></li>
        </FooterDivTxt>
        <FooterDivSns>
          <li><Link to='/'><img src={instaIcon} alt="인스타 아이콘" /></Link></li>
          <li><Link to='/'><img src={facebookIcon} alt="페이스북 아이콘" /></Link></li>
          <li><Link to='/'><img src={youtubeIcon} alt="유튜브 아이콘" /></Link></li>
        </FooterDivSns>
      </FooterUl>
      <FooterAddress>
        <p>(주)HODU SHOP</p>
        제주특별자치도 제주시 동광로 137 제주코딩베이스캠프<br/>
        사업자 번호 : 000-0000-0000 | 통신판매업<br/>
        대표 : 김호두
      </FooterAddress>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  background-color: #f2f2f2;
  padding: 60px 80px;
`

const FooterUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 30px;
`

const FooterDivTxt = styled.div`
  display: flex;
  li {
    font-size: 14px;
    color: #000;
  }
  li + li{
    margin-left: 14px;
    &::before {
      content: '|';
      display: inline-block;
      margin-right: 14px;
    }
  strong {
    font-weight: 700;
    }
  }
`

const FooterDivSns = styled.div`
  display: flex;
  li {
    margin-left: 14px;
  }
`

const FooterAddress = styled.address`
  p{
    font-weight: 700;
  }
  margin-top: 30px;
  color: #767676;
  font-size: 14px;
  line-height: 24px;
`