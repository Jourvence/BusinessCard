import React from "react";
// import TopImg from "./TopImg"; It's in the background
import NameTag from "./NameTag";
import Job from "./Job";
import CardWebsite from "./CardWebsite";
import SocialButtons from "./SocialButtons";
import About from "./About";
import Intrests from "./Intrests";
import SocialsBottom from "./SocialsBottom";

function SingleCard() {
    return (
        <>
            <div id="singleCard">
                <div id="mainCardContent">
                    <NameTag/>
                    <Job/>
                    <CardWebsite/>
                    <SocialButtons/>
                    <About/>
                    <Intrests/>
                    <SocialsBottom/>
                </div>
            </div>
        </>
    )
}

export default SingleCard