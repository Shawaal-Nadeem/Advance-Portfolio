import React from 'react';

function Home() {
  return (
   <div>
    <div className='Homepage'>
    <video poster="" loop autoPlay muted>
  <source src="/videos/v.webm" type="video/webm"/>
  <source src="/videos/v.mp4" type="video/mp4"/>
</video>
<header class="nav-buttons">
  <h1 className='logo'>PORTFOLIO</h1>
  <nav>
  <ul>
            <li ><a href='#' className='navbtn-home'>Home</a></li>
            <li><a href='#' className='navbtn'>Portfolio</a></li>
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
   </div>
  );
}

export default Home;
