import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Graphic()
{
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
                textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
<div>
    <div>
    <header class="header-Page2">
    <i class="fa fa-home"></i>
          <nav>
            <ul className="nav-ul-page2">
              <li className="nav-li-page2">
                <a className="navbtn-page2">
                  Thumbnail Designs
                </a>
              </li>
              <li className="nav-li-page2">
                <a className="navbtn-page2">
                  PhotoEditing
                </a>
              </li>
              <li className="nav-li-page2">
                <a className="navbtn-page2">
                  Branding
                </a>
              </li>
              <li className="nav-li-page2">
                <a className="navbtn-page2">
                  3D artworks
                </a>
              </li>
              <li className="nav-li-page2">
                <a className="navbtn-page2">
                  UI/UX Designs
                </a>
              </li>
              <li className="nav-li-page2">
                <a className="navbtn-page2">
                Social Media Posts
                </a>
              </li>
            </ul>
          </nav>
        </header>
    </div>
<div className="heading-page2">
    <button className="headingP2">
        THUMBNAIL DESIGNS
    </button>
</div>
<div className='page2-pics'>
<Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>Hello
              </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>Hello</Item>
        </Grid>
        {/* <Grid item xs={5}>
          <Item><div className="image-container">
                <div className="image">
                  <img src="/images/d1.png" />
                </div>
              </div></Item>
        </Grid>
        <Grid item xs={5}>
          <Item><div className="image-container">
                <div className="image">
                  <img src="/images/d1.png" />
                </div>
              </div></Item>
        </Grid> */}
      </Grid>
      </div>
</div>
    );
}

export default Graphic;