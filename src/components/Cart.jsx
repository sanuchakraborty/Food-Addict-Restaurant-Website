import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartLogo from "../assets/Cart.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Cart({setShow, size}) {

  return (
    <>
      <Section id="cart">
        <ul className="links">
          <li onClick ={()=>setShow(true)}>
            
              Food Items
            
          </li>
          <li onClick ={()=>setShow(false)}>
            
              Your Cart
              <span className="item-number"> / Items-{size}</span>
            
          </li>
          
        </ul>
        <div className="brand">
          <img src={CartLogo} alt="Icon" onClick ={()=>setShow(false)} />
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.5vw;
  .brand {
    img {
      margin-top: 0.5rem;
      margin-bottom:0;
      height: 52px;
      width: 50px;
      margin-left:0;
      margin-right:100px;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 5rem;
    cursor: pointer;
    li {
        margin-right:1rem;
        margin-left: 200px;
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        item-number {
                color: red;
          }
      }
      .active {
        color: #f9c74f;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
    gap: 2rem;
    cursor: pointer;
    li {
      margin-right:6rem;
      margin-left: 20px;
      color: #fc4958;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #f9c74f;
      item-number {
              color: red;
        }
    }
    .active {
      color: #f9c74f;
    }
  }
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;
