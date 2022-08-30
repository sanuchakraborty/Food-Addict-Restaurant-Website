import React, {useState} from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import axios from "axios";


export default function Newsletter() {
  
  
 
  const [input,setInput] = useState({
    name:"",
    email:"",
    phonenumber: "",
    address:""
  })
  
    
  function handleChange(event){
    const {name, value} =event.target;
    // console.log(event.target);
    setInput(prevInput =>{
      return {
        ...prevInput,
        [name]:value
      }
    })
  }

  function handleClick(event){
    event.preventDefault();

    const newNote ={
      name:input.name,
      email:input.email,
      phonenumber:input.phonenumber,
      address:input.address

    }

    axios.post("http://localhost:3005/" ,newNote)
  }


  return (
    <Section id="newsletter">
      <div className="title">
        <h1>
          <span>Fill Your Details Here</span> 
        </h1>
        <p>
   
         
        </p>
      </div>
      <div className="container">
        <button>Name</button>
        <input onChange={handleChange} type="text" name="name" value={input.name} placeholder="Enter Your Name..." autoComplete="off" /> 
      </div>
      <div className="container">
        <button>Email</button>
        <input onChange={handleChange} type="text" name="email" value={input.email} placeholder="Enter Your Email..." autoComplete="off" /> 
      </div>
      <div className="container">
        <button>Phone Number</button>
        <input onChange={handleChange} type="number" name="phonenumber" value={input.phonenumber} placeholder="Enter Your Phone Number..." autoComplete="off" /> 
      </div>
      <div className="container">
        <button>Address</button>
        <input onChange={handleChange} type="text" name="address" value={input.address} placeholder="Enter Your Address..." autoComplete="off" /> 
      </div>
      <button className="container" onClick={handleClick} >Place Order</button>

    </Section>
  )
}

const Section = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 2rem;
      font-size: 1.4rem;
      background-color: #fc4958;
      border-radius: 1rem;
      border: none;
      color: white;
      font-weight: 800;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #f9c74f;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
