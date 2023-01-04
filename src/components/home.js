import React from "react";
import Fade from "react-reveal/Reveal";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
    document.querySelectorAll(".image-container img").forEach((image) => {
      image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src =
          image.getAttribute("src");
      };
    });
    document.querySelector(".popup-image span").onclick = () => {
      document.querySelector(".popup-image").style.display = "none";
    };
    var open = document.getElementById('hamburger');
    var changeIcon = true;
    
    open.addEventListener("click", function(){
    
        var overlay = document.querySelector('.overlay');
        var nav = document.querySelector('nav');
        var icon = document.querySelector('.menu-toggle i');
    
        overlay.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
    
        if (changeIcon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
    
            changeIcon = false;
        }
        else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            changeIcon = true;
        }
    });
  });
  return (
    <div>
      <div className="Video-Section">
        <video poster="" loop autoPlay muted>
          <source src="/videos/v.webm" type="video/webm" />
          <source src="/videos/v.mp4" type="video/mp4" />
        </video>
        <header>
        <div class="menu-toggle" id="hamburger">
            <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
        {/* <div class="container"> */}
            <nav>
                <h1><a href="index.html" class="brand">PORTFOLIO</a></h1>
                <ul>
                    <li><a href="#" className='navbtn-home'>Home</a></li>
                    <li><a href="#" className='navbtn'>Portfolio</a></li>
                    <li><a href="#" className='navbtn'>Contact</a></li>
                    <li><a href="#"  className='navbtn'>Socials</a></li>
                    <li><a href="#"  className='navbtn'>About</a></li>
                </ul>
            </nav>
        {/* </div> */}
</header>
        <div className="anim">
          <h1 className="abdul">ABDUL</h1>
          <h1 className="mannan">MANNAN</h1>

          <p className="line">
            Professional Graphic Designer and Video Editor.</p>
            <p className="line1">With over 2 years of experience in Adobe PhotoShop,</p> 
            <p className="line1">Adobe
            Illustrator, Premier Pro, After Effects, and Blender.</p>
          
          <p className="read">Read More...</p>
          <button className="hirebtn">Hire Me</button>
        </div>
      </div>

      <Fade top distance="10%" duration={1500}>
        <div className="portfolio" id="portfolio">
          <h1 className="portfolio-heading">PORTFOLIO</h1>
          <div className="portfolioButtons">
            <button className="GraphicDesign">Graphic Design</button>
            <p className="lineDesign">
              <hr className="sline" />
            </p>
            <button className="GraphicDesign">Video Editing</button>
          </div>
        </div>
      </Fade>

      <div className="showcase">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <h1 className="designHeading">
                Designs <br />&<br />
                Artworks
              </h1>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d1.png" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="creativityGrid">
              <h1 className="creativity">Creativity</h1>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d2.png" />
                </div>
              </div>
            </Item>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d4.png" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d3.png" />
                </div>
              </div>
            </Item>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d5.png" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item></Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <button className="viewMore">View More</button>
            </Item>
          </Grid>
        </Grid>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d1.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d2.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d3.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d4.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d5.png" alt="" />
        </div>
      </div>

      <div className="about">
        <div className="rectangle-box">
          <div className="rectangle-shadow"></div>
          <div className="rectangle">
            <div className="passport-pic"></div>
          </div>
        </div>
        <div className="about-text" id="about">
          <h1 className="about-heading">About</h1>
          <p className="about-lines">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like...
          </p>
        </div>
      </div>
      <div className="Expertise-sections">
          <h1 className="portfolio-heading">Fields of Expertise</h1>
          <div className="expertise">
            <div className="list1">
            <h4 className="expertise-head">1. Graphic Design  </h4>
              <ul className="expertise-list">
                <li className="points">Thumbnails/ banner design</li>
                <li className="points">Advertisment, Social media Posts</li>
                <li className="points">Flyers, Brochures, Menu Design</li>
                <li className="points">UI/UX Design</li>
                <li className="points">PhotoEditing</li>
                <li className="points">3D Artworks</li>
                <li className="points">Posters/Artworks...</li>
              </ul>
            </div>
            <div className="list2">
            <h4 className="expertise-head">2. Video Editing  </h4>
              <ul className="expertise-list">
                <li className="points">Gaming Montages</li>
                <li className="points">Youtube Videos</li>
                <li className="points">Animations 2D/3D</li>
                <li className="points">Intros</li>
                <li className="points">Advertisment</li>
              </ul>
            </div>
          </div>
          <div className="softwares">
          <h4 className="softwares_head">Softwares I use</h4>
          <ul className="software-list">
                <li className="soft_points">Adobe PhotoShop</li>
                <li className="soft_points">Adobe Illustrator</li>
                <li className="soft_points">Adobe Premier Pro</li>
                <li className="soft_points">Adobe After Effects</li>
                <li className="soft_points">Adobe xd/Figma</li>
                <li className="soft_points">Blender</li>
              </ul>
        </div>
        </div>
        
        <div className="social-section" id="social">
        <h1 className="social-heading">Socials</h1>
        <div className="icons">
        <i class='fas fa-camera-retro' ></i>
        <i class="fa fa-facebook-official" ></i>
        <i class="fa fa-youtube-square" ></i>
        <i class="fa fa-linkedin-square" ></i>
        </div>
        </div>

        <div className="contact-section" id="contact">
          <br/>
          <h4 className="contact-head">Contact</h4>
          <div className="links">
          <p className="insta-links">mannan.babar16@gmail.com</p>
          <p className="insta-links">https://www.instagram.com/mannan.babar16/</p>
          <p className="insta-links">https://www.instagram.com/mannan.babar16/</p>
          <p className="insta-links">https://www.instagram.com/mannan.babar16/</p>
          <p className="insta-links">+92 300 4256110</p>
          <button className="mail-btn">Click to send mail</button>
          </div>
        </div>
    </div>
  );
}

export default Home;
