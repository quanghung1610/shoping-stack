import React from 'react';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'; 
import {BsFillTelephoneFill, BsTwitter} from 'react-icons/bs';
import {FaAddressBook} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Store for me</Logo>
            <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
            <MenuItems>
                <AiFillFacebook />
                <AiFillInstagram />
                <BsFillTelephoneFill />
                <BsTwitter />
            </MenuItems>
        </Left>
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaAddressBook style={{marginRight:"10px"}}/> 140, Lê Trọng Tấn
        </ContactItem>
        <ContactItem>
          <BsFillTelephoneFill style={{marginRight:"10px"}}/> 034 451 0148
        </ContactItem>
        <ContactItem>
          <SiGmail style={{marginRight:"10px"}} /> quanghung0360@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}


const Container = styled.div`
  display: flex;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const MenuItems = styled.div`
  display: flex;
  letter-spacing: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;