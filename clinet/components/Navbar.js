import React from 'react';
import styled from 'styled-components';
import {BsSearch } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';


export default function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>En/Vi</Language>
                <SearchContainer>
                    <Input type="text" placeholder='Enter the product ' />
                    <BsSearch />
                </SearchContainer>
            </Left>
            <Center><Logo>Store for me</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem> 
                  <FaShoppingCart />
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}


const Container =styled.div`
    height: 60px;
    Background: red;
 
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
     border: none;
     width: 120%;
`;



const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;