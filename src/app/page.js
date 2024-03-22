"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import style from '../app/products/styles.module.css'
import Image from 'next/image'
import img from "../../public/img1.png"
import c1 from "../../public/decoration.jpeg"
import c2 from "../../public/fashion-mag.jpeg"
import c3 from "../../public/furniture.png"
import c4 from "../../public/images.jpg"
import c5 from "../../public/interor.jpg"
import c6 from "../../public/life.jpg"
import c7 from "../../public/music.jpg"
import c8 from "../../public/photgraph.jpg"
import c9 from "../../public/style.jpg"
import c10 from "../../public/uncatego.png"
import g1 from "../../public/g1.png"
import g2 from "../../public/g2.png"
import g3 from "../../public/g3.png"
import g4 from "../../public/g5.jpg"
import b1 from "../../public/b1.jpg"
import b2 from "../../public/b4.jpg"
import b3 from "../../public/b3.jpg"
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link'
export default function Page() {
  const blogs = [
    {
      title:'9 Comfy Throws for Cosy Autumn Vibes',
      tag:'Shopping Guides',
      image:b1,
      des :"Embrace the snuggling season with stylish throws that will warm your hearts."
    },
    {
      title:'14 Beautiful Bags That Express Your Unique Style',
      tag:'Shopping Guides',
      image:b2,
      des:"Amp up your fashion game with bags that perfectly match your aesthetic."
    },
    {
      title:'The Best Gift Ideas for Kids of All Ages',
      tag:'Gifts Guides',
      image:b3,
      des:"Shop the sweetest surprises for all little ones in your family–these gifts for kids will definitely earn you some brownie points."
    },
  ]
  const [category,setCategory] = useState([])
  const [allproduct,setAllproduct] = useState([])

  const [imgArray, setImgArray] = useState([
    { url: c1 },
    { url: c2 },
    { url: c3 },
    { url: c4 },
    { url: c5 },
    { url: c6 },
    { url: c7 },
    { url: c8 },
    { url: c9 },
    { url: c10 }
])
  const gifts = [{title:"Anniversary"},{title:"Gifts for Him"},{title:"Gifts for Her"},{title:"Wedding gift"}]
  const giftsImgs = [g1,g2,g3,g4]

  function mergeArrays(category, imgArray) {
    const mergedArray = [];

    // Iterate through the arrays and merge objects
    for (let i = 0; i < category.length; i++) {
        // Create a new object with product name and corresponding image
       
        const mergedObject = {
            productName: category[i].name,
            productlink: category[i].link,
            imageUrl: imgArray[i].url
        };
        // Add merged object to the new array
        mergedArray.push(mergedObject);
    }

    return mergedArray;
}

// Call the function to merge arrays
const merged= mergeArrays(category, imgArray);



  function mergeArrays2(gifts, giftsImgs) {
    // Check if arrays have the same length
    // if (category.length !== imgArray.length) {
    //     throw new Error("Arrays must have the same length");
    // }

    // Create a new array to store merged objects
    const mergedArray2 = [];

    // Iterate through the arrays and merge objects
    for (let i = 0; i < gifts.length; i++) {
        // Create a new object with product name and corresponding image
        const mergedObject = {
            title: gifts[i].title,
            imageUrl: giftsImgs[i]
        };
        // Add merged object to the new array
        mergedArray2.push(mergedObject);
    }

    return mergedArray2;
}

// Call the function to merge arrays
const merged2 = mergeArrays2(gifts, giftsImgs);
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
    fetch(`https://kingdomcollection.uk/wp-json/wc/v3/products`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(products => {
       console.log('Products page:',products       );
setAllproduct(products)
    })
    .catch(error => {
      console.error('There was a problem with the fetch request:', error);
    });


    fetch(`https://kingdomcollection.uk/wp-json/wp/v2/categories`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
         console.log('Products page:');
         setCategory(products);
         mergeArrays()
         mergeArrays2()
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
         //console.log('Products:', products);
         
      })
      .catch(error => {
        console.error('There was a problem with the fetch request:', error);
      });
      
   
    
  }, [])
  
  return (
   <div style={{overflowX:'hidden',boxSizing:'border-box',paddingLeft:'0',paddingRight:'0'}} className={style.mainPage}>
   <Header/>
   <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:'2rem'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',gap:'15px'}}>
      {
        allproduct ? allproduct.slice(0,4).map((i)=>(
        <Link href={`/products/${i.id}`}  key={i.id}>
          <div className={style.gitfProduct} style={{padding:'0',border:'.1px solid gray',}}  >
          <Image src={i.images[0].src} width={250} height={190} style={{borderRadius:'12px'}} alt='img'/>
        
          <p className={style.text} style={{fontWeight:'400',width:'90%',fontSize:'.8rem',display:'flex',alignItems:'center',paddingLeft:'1rem'}}>{i.categories[0].name}</p>
         
      
          </div>
        </Link>
        )):''
      }
    </div>


  
   </div>
   <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <h1 className={style.text} style={{fontSize:'1.5rem',color:'#222222'}}>Shop by Category</h1>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',gap:'15px'}} className={style.cate}>
      {
        merged ?  merged.slice(0,4).map((i,index)=>(
         <Link href={i.productlink} key={i.productlink}>
           <div className={style.categoryProduct}  >
          <Image src={i.imageUrl.src} width={220} height={200} style={{borderRadius:'50%'}} alt='img'/>
      <p>{i.productName}</p>
          </div>
         </Link>
        )):''
      }
    </div>
   </div>



   <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'1rem',marginTop:'2rem'}}>
    <h1 className={style.giftHead} >Shop our popular Products</h1>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',gap:'20px'}}>
      {
      allproduct ? allproduct.slice(4,8).map((i)=>(
         <Link href={`/products/${i.id}`} key={i.id}>
          <div className={style.gitfProduct} style={{padding:'0',border:'.1px solid gray',height:'auto',width:'auto'}}   >
          <Image src={i.images[0].src} width={250} height={160} style={{borderRadius:'12px',}} alt='img'/>
        
          <p className={style.text} style={{fontWeight:'400',width:'full'}}>{i.categories[0].name}</p>
         
      
          </div>
         </Link>
        )):''
      }
    </div>


  
   </div>
   <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:'2rem'}}>
    <h1 className={style.text} style={{fontSize:'1.5rem',color:'#222222',display:'flex',alignItems:'center',cursor:'pointer',marginLeft:'1rem'}}>Fresh from the blog <GoArrowRight /></h1>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',gap:'15px'}}>
      {
        blogs.map((i,index)=>(
          <div key={index} className={style.homeProduct} style={{padding:'0',border:'.1px solid gray',alignItems:'flex-start',gap:'10px',}} >
          <Image src={i.image} height={250} style={{borderRadius:'12px',width:'100%'}} alt='img'/>
        
          <div className={style.Blogtext}>{i.tag}</div>
          <div className={style.text} style={{fontWeight:'600',paddingLeft:'2rem'}}>{i.title}</div>
          <div className={style.Blogtext} style={{width:'20rem'}} >{i.des}</div>
         
      
          </div>
        ))
      }
    </div>

    <div className={style.sub}>
    <p  className={style.text}>Get unique gift ideas and so much more delivered right to your inbox.</p>
    <div className={style.emailinput}>
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
            <li>  <a href="#">  Registry </a> </li> 
            <li>  <a href="#"> Sitemap </a> </li> 
            <li>  <a href="#">  blog </a> </li> 
            <li>  <a href="#"> United Kingdom </a> </li> 
            <li>  <a href="#"> Germany </a> </li> 
            <li>  <a href="#">Canada </a> </li> 
          </ul>
        </div>
        <div className={style.column}>
          <h3>Sell</h3>
          <ul>
            <li>  <a href="#"> Sell </a> </li> 
            <li>  <a href="#"> Teams </a> </li> 
            <li>  <a href="#"> Forums </a> </li> 
            <li>  <a href="#"> Affiliates & Creators </a> </li> 
          </ul>
        </div>
        <div className={style.column}>
          <h3>About</h3>
          <ul>
            <li>  <a href="#">  Inc. </a> </li> 
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
        <p><a href="#" > &copy; 2024  Inc. </a></p>
      </div>
      <div className={style.footerRight}>
      <div className={style.column} >
          <ul style={{ display:'flex',  flexDirection:'row',gap:'20px',justifyContent:'center',alignItems:'center'}}>
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

