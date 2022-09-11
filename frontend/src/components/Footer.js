import React from "react";
import img from '../../src/banner.jpeg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
      <div className="bannerC">
        <img className="banner" alt="banner" src={img} />
        <img className="banner" alt="banner" src={img} />
        <img className="banner" alt="banner" src={img} />
      </div>
      
      </div>
    </div>
  );
};

export default Footer;

{/* <div className="card-name">
<img
  alt="instagram"
  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
/>
</div>
<div className="card-name"><a href="https://twitter.com/tmb_express"><img
  alt="twitter"
  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
/></a>

</div>
<div className="card-name">
<img
  alt="Linkedin"
  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
/>
</div>
<div className="card-name">
<img
  alt="facebook"
  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
/>
</div>
<div className="card-name">
<img
  alt="whatsapp"
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
/>
</div> */}