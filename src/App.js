import React,{useState ,useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import FoodCart from "./components/FoodCart";
import Cart from "./components/Cart";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
// import Items from "./components/Items";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });

  
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  
  const [show, setShow]= useState(true);
  const [cart,setCart] = useState([]);
  const handleClick = (product) =>{
    if(cart.indexOf(product)!==-1) return;
  setCart([...cart,product]);
 };

 const handleChange = (product ,d)=>{
  const ind =cart.indexOf(product);
  const arr = cart;
  arr[ind].amount +=d;

  if(arr[ind].amount === 0) arr[ind].amount=1;
  setCart([...arr]);
 };

//  useEffect(()=>{
//   console.log("Cart Change");
//  },[cart]);


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Cart setShow = {setShow} size={cart.length}/>
      {show?<Products handleClick={handleClick}/>:<FoodCart cart={cart} setCart={setCart} handleChange={handleChange}/>}
      
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}
