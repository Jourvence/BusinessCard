import React from "react";
import twt from '../images/twt.png';
import fac from '../images/fac.png';
import insta from '../images/insta.png';
import github from '../images/github.png';

function SocialsBottom() {
    return (
        <>
           <div id="socialsBottomContainer">
                <a href="https://x.com/"><img src={twt} alt="twitter" id="socialImgs" /></a>
                <a href="https://www.facebook.com"><img src={fac} alt="fac" id="socialImgs" /></a>
                <a href="https://www.instagram.com"><img src={insta} alt="insta" id="insta" /></a>
                <a href="https://github.com/Jourvence"><img src={github} alt="github" id="github"/></a>
           </div>
        </>
    )
}

export default SocialsBottom