import React from 'react';
import "./footer.css";
import DeleteIcon from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Git from '@mui/icons-material/GitHub';


const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};


const Footer = () => (
<div
className='container'
><footer className="footer">
  <div className='footerIcons'>
  <DeleteIcon className='icon'  onClick={() => openInNewTab('https://www.facebook.com/er.simar.ramgarhia/')}/>  
  <LinkedIn className='icon' onClick={() => openInNewTab('https://www.linkedin.com/in/simranjeetdev/')}/>
  <Git className='icon' onClick={() => openInNewTab('https://github.com/simranjeet09')}/>
   
  </div>
  <span>  © 2022 Simranjeet Singh All Rights Reserved
</span>
</footer></div>
); 
export default Footer;
