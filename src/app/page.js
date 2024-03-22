"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import style from '../app/products/styles.module.css'
import Image from 'next/image'
import img from "../../public/img1.png"
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link'
export default function page() {
  const [category,setCategory] = useState()
  useEffect(() => {
    console.log(`Database name is ${process.env.APIKEY} ${process.env.APISECERT}`);
    const apiKey = process.env.apikey  //|| 'ck_503e81308c5e908b9050b367e98d837395f578c4'; // Use environment variable or default value
  const apiSecret = process.env.APISECRET || 'cs_1ed4558d5120ba67905426b5f46f8a38efb47035'; // Replace 'YOUR_API_SECRET' with your actual API secret
    const apiUrl = `https://kingdomcollection.uk/wp-json/wc/v3/products`; // Adjust the URL as needed
    const reviewUrl = `https://kingdomcollection.uk/wp-json/wc/v3/products/reviews/?520`;
    // Concatenate API key and secret with a colo
    const credentials = `${apiKey}:${apiSecret}`;
    // Base64 encode the credentials
    const base64Credentials = btoa(credentials);
  
    // Set up the request headers
    const headers = new Headers({
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/json'
    });
  
    // Set up the fetch request
    const requestOptions = {
      method: 'GET',
      headers: headers,
    };
    //console.log("id",id);
    fetch(`https://kingdomcollection.uk/wp-json/wp/v2/categories`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
         console.log('Products:', products);
         setCategory(products);
      })
      .catch(error => {
        console.error('There was a problem with the fetch request:', error);
      });
    fetch(`https://kingdomcollection.uk/wp-json/wp/v2/posts`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
         console.log('Products:', products);
         
      })
      .catch(error => {
        console.error('There was a problem with the fetch request:', error);
      });
      
  }, [])
 
  return (
   <div style={{overflowX:'hidden',boxSizing:'border-box',paddingLeft:'0',paddingRight:'0'}} className={style.mainPage}>
   <Header/>
   <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <h1 className={style.text} style={{fontSize:'1.5rem',color:'#222222'}}>Shop by Category</h1>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',gap:'15px'}}>
      {
        category?.map((i)=>(
         <Link href={i.link}>
           <div className={style.categoryProduct}  >
          <Image src={img} width={190} height={270} style={{borderRadius:'12px'}}/>
      <p>{i.name}</p>
          </div>
         </Link>
        ))
      }
    </div>
   </div>



   <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'1rem',marginTop:'2rem'}}>
    <h1 className={style.giftHead} >Shop our popular gift categories</h1>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',gap:'15px'}}>
      {
        [1,2,3,4].map((i)=>(
          <div className={style.gitfProduct} style={{padding:'0',border:'.1px solid gray',}} >
          <Image src={img} width={250} height={190} style={{borderRadius:'12px'}}/>
        
          <p className={style.text} style={{fontWeight:'600',width:'full'}}>Home living</p>
         
      
          </div>
        ))
      }
    </div>


  
   </div>
   <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'1rem',marginTop:'2rem'}}>
    <h1 className={style.text} style={{fontSize:'1.5rem',color:'#222222',display:'flex',alignItems:'center',cursor:'pointer'}}>Fresh from the blog <GoArrowRight /></h1>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',gap:'15px'}}>
      {
        [1,2,3].map((i)=>(
          <div className={style.homeProduct} style={{padding:'0',border:'.1px solid gray',alignItems:'flex-start',gap:'10px'}} >
          <Image src={img} width={400} height={400} style={{borderRadius:'12px'}}/>
        
          <div className={style.Blogtext}>Home living</div>
          <div className={style.text} style={{fontWeight:'600',paddingLeft:'2rem'}}>Home living siuuisa jashasuu sjhaush</div>
          <div className={style.Blogtext} >Home xsds msnu sanuhs nsuasa hsua  living</div>
         
      
          </div>
        ))
      }
    </div>

    <div className={style.sub}>
    <p  className={style.text}>Get unique gift ideas and so much more delivered right to your inbox.</p>
    <div className={style.search}>
                    <input placeholder='Enter your Email' className={style.input} style={{width:'55%',border:'none'}} />
                    <div className={style.subBtn} >Subscribe</div>
                </div>
    </div>
  
   </div>
   <footer className={style.footer}>
      <div className={style.leftColumn}>
        <img src="/kc-logo.png" alt="Logo" className={style.logo} />
      </div>
      <div className={style.rightColumn}>
        <div className={style.column}>
          <h3>Shop</h3>
          <ul>
            <li>  <a href="#"> Gift cards </a> </li> 
            <li>  <a href="#"> Etsy Registry </a> </li> 
            <li>  <a href="#"> Sitemap </a> </li> 
            <li>  <a href="#"> Etsy blog </a> </li> 
            <li>  <a href="#"> Etsy United Kingdom </a> </li> 
            <li>  <a href="#"> Etsy Germany </a> </li> 
            <li>  <a href="#"> Etsy Canada </a> </li> 
          </ul>
        </div>
        <div className={style.column}>
          <h3>Sell</h3>
          <ul>
            <li>  <a href="#"> Sell on Etsy </a> </li> 
            <li>  <a href="#"> Teams </a> </li> 
            <li>  <a href="#"> Forums </a> </li> 
            <li>  <a href="#"> Affiliates & Creators </a> </li> 
          </ul>
        </div>
        <div className={style.column}>
          <h3>About</h3>
          <ul>
            <li>  <a href="#"> Etsy, Inc. </a> </li> 
            <li>  <a href="#"> Policies </a> </li> 
            <li>  <a href="#"> Investors </a> </li> 
            <li>  <a href="#"> Careers </a> </li> 
            <li>  <a href="#"> Press </a> </li> 
            <li>  <a href="#"> Impact </a> </li> 
            <li>  <a href="#"> Legal imprint </a> </li> 
          </ul>
        </div>
        <div className={style.column}>
          <h3>Help</h3>
          <ul>
            <li>  <a href="#"> Help Centre </a> </li> 
            <li>  <a href="#"> Privacy settings </a> </li> 
          </ul>
        </div>
      </div>
    </footer>
    <footer className={style.footerEnd}>
      <div className={style.footerLeft}>
        <button className={style.button}>Button</button>
      </div>
      <div className={style.footerRight}>
      <div className={style.column} >
          <ul style={{ display:'flex',  flexDirection:'row',gap:'20px',justifyContent:'center',alignItems:'center'}}>
            <li>  <a href="#"> &copy; 2024 Etsy, Inc. </a> </li> 
           <li>  <a href="#">  Terms of Use</a> </li> 
            <li>  <a href="#"> Privacy </a> </li> 
            <li>  <a href="#"> Interest-based ads </a> </li> 
            <li>  <a href="#"> Local Shops </a> </li> 
            <li>  <a href="#">  Regions </a> </li> 
          </ul>
        </div>
      </div>
    </footer>
   </div>
  )
}

