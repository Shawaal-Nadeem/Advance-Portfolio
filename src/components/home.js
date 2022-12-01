import React from 'react';
import Fade from 'react-reveal/Reveal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect} from "react";
function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow:'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
  document.querySelectorAll('.image-container img').forEach(image=>{
image.onclick=()=>{
  document.querySelector('.popup-image').style.display='block';
  document.querySelector('.popup-image img').src=image.getAttribute('src');
}
  });
  document.querySelector('.popup-image span').onclick=()=>{
    document.querySelector('.popup-image').style.display='none';
 }
  });
  return (
   <div>
    <div className='Video-Section'>
    <video poster="" loop autoPlay muted>
  <source src="/videos/v.webm" type="video/webm"/>
  <source src="/videos/v.mp4" type="video/mp4"/>
</video>
<header class="nav-buttons">
  <h1 className='logo'>PORTFOLIO</h1>
  <nav>
  <ul>
            <li ><a href='#' className='navbtn-home'>Home</a></li>
            <li><a href='#portfolio' className='navbtn'>Portfolio</a></li>
            <li><a href='#' className='navbtn'>Contact</a></li>
            <li><a href='#' className='navbtn'>Socials</a></li>
            <li><a href='#' className='navbtn'>About</a></li>
          </ul>
          </nav>
</header>
<div className='anim'>
<h1 className='abdul'>ABDUL</h1>
<h1 className='mannan'>MANNAN</h1>

<p className='line'>Professional Graphic Designer and Video Editor.<br/> With over 2 years of experience in Adobe PhotoShop, Adobe Illustrator, Premier Pro, After Effects, and Blender.</p>
    <p className='read'>Read More...</p>
    <button className='hirebtn'>Hire Me</button>
    </div>
    </div>

    <Fade top distance='10%' duration ={1500}>
<div className='portfolio' id='portfolio'>
<h1 className='portfolio-heading'>PORTFOLIO</h1>
<div className='portfolioButtons'>
<button className='GraphicDesign'>Graphic Design</button>
<p className='lineDesign'><hr className='sline'/></p>
<button className='GraphicDesign'>Video Editing</button>
</div>
</div>
</Fade>

<div className='showcase'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <h1 className='designHeading'>Designs <br/>&<br/>Artworks</h1>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <div className='image-container'>
    <div className='image'><img src='/images/d1.png'/></div>
    </div>
          </Item>
        </Grid>
        <Grid  item xs={4}>
          <Item className='creativityGrid'>
            <h1 className='creativity'>Creativity</h1>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className='image-container'>
    <div className='image'><img src='/images/d2.png'/></div>    
    </div>
          </Item>
          <Item>
            <div className='image-container'>
    <div className='image'><img src='/images/d4.png'/></div>
    </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className='image-container'>
    <div className='image'><img src='/images/d3.png'/></div>
    </div>
          </Item>
          <Item>
            <div className='image-container'>
    <div className='image'><img src='/images/d5.png'/></div>
    </div>
          </Item>
        </Grid>
      </Grid>
      <div className='popup-image'>
        <span>&times;</span>
        <img src="/images/d1.png" alt=''/>
      </div>
      <div className='popup-image'>
        <span>&times;</span>
        <img src="/images/d2.png" alt=''/>
      </div>
      <div className='popup-image'>
        <span>&times;</span>
        <img src="/images/d3.png" alt=''/>
      </div>
      <div className='popup-image'>
        <span>&times;</span>
        <img src="/images/d4.png" alt=''/>
      </div>
      <div className='popup-image'>
        <span>&times;</span>
        <img src="/images/d5.png" alt=''/>
      </div>
</div>

   </div>
  );
}

export default Home;
