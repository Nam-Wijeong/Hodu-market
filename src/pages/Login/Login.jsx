import React from 'react'
import imgLogo from '../../assets/Logo-hodu.svg';
import styled from 'styled-components';

export default function Login() {
  return (
    <>
      <LoginHeader>
        <img src={imgLogo} alt="로고사진" />
      </LoginHeader>
      <LoginBtnWrapper>
        <button type='button'>구매회원 로그인</button>
        <button type='button'>판매회원 로그인</button>
      </LoginBtnWrapper>
      <LoginForm>
        <input type='text' placeholder='아이디' required/>
        <input type='password' placeholder='비밀번호' required/>
        <LoginBtn type="submit">로그인</LoginBtn>
      </LoginForm>
      <LoginBottomWrapper>
        <button type="button">회원가입</button>
        <button type="button">비밀번호 찾기</button>
      </LoginBottomWrapper>
    </>
  )
}

const LoginHeader = styled.header`
  width: 238px;
  margin: 100px auto;
  margin-bottom: 70px;
`

const LoginForm = styled.form`
  width: 550px;
  margin: 0 auto;
  padding: 34px;
  border: 1px solid #c4c4c4;
  border-top: none;
  border-radius: 0 0 10px 10px;
  input {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    outline: none;
    padding: 20px 0;
    font-size: 16px;
    color: #767676;
  }
  input + input {
    margin-top: 6px;
  }
`

const LoginBtnWrapper = styled.div`
    width: 550px;
    margin: 0 auto;
  button {
    width: 275px;
    padding: 20px 0;
    border: 1px solid #c4c4c4;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
    font-weight: 500;
  }
`

const LoginBtn = styled.button`
  width: 100%;
  margin-top: 36px;
  padding: 18px 0;
  color: #fff;
  background-color: #21bf48;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
`

const LoginBottomWrapper = styled.div`
  width: 550px;
  margin: 30px auto;
  text-align: center;
  button {
    margin-left: 14px;
    font-size: 16px;
    color: #333333;
  }
  button + button {
    &::before {
      content: '|';
      display: inline-block;
      margin-right: 14px;
      color: #333333;
    }
  }
`