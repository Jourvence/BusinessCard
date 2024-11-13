import React from "react";

import email from '../images/email.png';
import lnkIn from '../images/lnkIn.png';

function SocialButtons() {
    return (
        <>
            <div id="socialsContainer">
                <button id="socialButtons" type="button" class="btn btn-light btn-sm"><img src={email} alt="email" id="emailEmoji" />Email</button>
                <button id="socialButtons" type="button" class="btn btn-primary btn-sm"><img src={lnkIn} alt="linkedId" id="linkedIn"/>Primary</button>
            </div>
        </>
    )
}

export default SocialButtons